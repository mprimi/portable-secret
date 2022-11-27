// Display the encryption inputs on the page (invoked during body onload)
async function loadOpaqueValues() {
  document.getElementById("salt").setAttribute("value", saltHex)
  document.getElementById("iv").setAttribute("value", ivHex)
  document.getElementById("cipher").innerHTML = cipherHex
}

async function decrypt() {

  try {
    setMessage("Generating key from password...")

    // Load salt, from hex string to byte array
    let salt = hexStringToBytes(saltHex)

    if (salt.length != saltSize) {
      throw new Error(`Unexpected salt size: ${salt.length}`)
    }

    // Load password from page, as byte array
    let password = new TextEncoder().encode(document.getElementById("password").value)
    if (password.length == 0) {
      throw new Error(`Empty password`)
    }

    // Import password into a Key suitable for use with Cryptography APIs
    let passwordKey = await window.crypto.subtle.importKey(
      "raw", // Array of bytes
      password,
      {name: "PBKDF2"}, // What uses this key
      false, // Wether they can extract it
      ["deriveKey"] // What they can use it for
    )

    // Derive a key from the password, using PBKDF2
    let key = await window.crypto.subtle.deriveKey(
      {
        name: "PBKDF2", // https://en.wikipedia.org/wiki/PBKDF2
        salt: salt,
        iterations: iterations,
        hash: "SHA-1", // As per standard v2.0
      },
      passwordKey, // Wrapped password
      {
        name: "AES-GCM", // What is this key for
        length: keySize * 8, // key size in bits
      },
      false, // key is not extractable
      ["decrypt"] // key is for decryption
    )

    setMessage("Decrypting...")

    // Load IV, from hex string to byte array
    let iv = hexStringToBytes(ivHex)
    if (iv.length != blockSize) {
      throw new Error(`Unexpected IV size: ${iv.length}`)
    }

    // Load ciphertext, from hex string to byte array
    let cipher = hexStringToBytes(cipherHex)

    // Decrypt with AES in 'Galois/Counter Mode' (integrity + confidentiality)
    // https://en.wikipedia.org/wiki/Galois/Counter_Mode
    let decryptedBuffer = await window.crypto.subtle.decrypt(
      {
        name: "AES-GCM",
        iv: iv,
      },
      key,
      cipher
    )

    // Remove padding (added as necessary for block cipher)
    // https://en.wikipedia.org/wiki/Padding_(cryptography)#PKCS#5_and_PKCS#7
    decrypted = removePadding(new Uint8Array(decryptedBuffer))

    if (secretType == "text") {
      // Decode bytes to UTF-8
      plainText = new TextDecoder().decode(decrypted)
      // Display the plaintext on the page
      document.getElementById("target_text").innerHTML = plainText
      document.getElementById("text_output_div").hidden = false
    } else if (secretType == "image") {
      b64Data = btoa(decrypted.reduce((data, byte) => data + String.fromCharCode(byte), ''))
      const imageData = `data:image/${secretExt};base64,${b64Data}`
      document.getElementById("target_image").setAttribute("src", imageData)
      document.getElementById("image_output_div").hidden = false
    } else if (secretType == "file") {
      b64Data = btoa(decrypted.reduce((data, byte) => data + String.fromCharCode(byte), ''))
      const fileData = `data:application/octet-stream;base64,${b64Data}`
      document.getElementById("target_file").setAttribute("href", fileData)
      document.getElementById("target_file").setAttribute("download", `file.${secretExt}`)
      document.getElementById("file_output_div").hidden = false
    } else {
      throw new Error(`Unknown secret type: ${secretType}`)
    }

    setMessage("Decrypted successfully")

  } catch (err) {
    // TODO better handle failing promises
    setMessage(`Decryption failed: ${err}`)
    return
  }
}

// Transform an ASCII hexadecimal string into the corresponding byte array
function hexStringToBytes(input) {
  for (var bytes = [], c = 0; c < input.length; c += 2) {
    bytes.push(parseInt(input.substr(c, 2), 16));
  }
  return Uint8Array.from(bytes);
}

// The cleartext input must be padded to a multiple of the block size
// for encryption. This function removes the padding, expected to be
// compatible with PKCS#7 described in RFC 5652.
// https://en.wikipedia.org/wiki/Padding_(cryptography)#PKCS#5_and_PKCS#7
function removePadding(input) {
  // Last byte is the amount of padding
  padAmount = input[input.length-1]
  unpaddedSize = input.length - padAmount
  return input.slice(0, unpaddedSize)
}

// Update page with status of decryption
function setMessage(msg) {
  document.getElementById("errormsg").innerHTML = msg
}
