# portable-secret
A low-tech, super-portable hack to securely carry your most important secrets with you.
Or exchange files and messages with others over non-private channels.

---

Portable Secret ("`PS`") it's not a product, it's just a trick, a *hack*.
The source code and tool provided here are merely a demonstration of such a hack.

Securely storing and exchanging secrets can be tricky, even for experts. **I wanted a tool that even my mom could learn how to use**, so we can communicate privately and securely.

## How it works

A `Portable Secret` is an HTML file containing an encrypted payload.

It also contains a bit of pure Javascript (no external dependencies).
The script uses the browser built-in [Web Cryptography APIs](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API) to decrypt the secret.

The file can be sent over email, SMS, or stored online (Dropbox, FTP, Cloud Drive, ...).

The receiver can open the file in a web browser (even without an internet connection), plug in the password, and retrieve the secret. No data leaves the browser window context.

**[Example](#)**

You can create a secret for yourself [here](#)

## Use case scenarios

I use PS in the following situations:

#### Store top-level keys

I use `PS` to store my top-level secret keys (e.g. PGP key, backup recovery key, wallet recovery passphrase, primary email address password, password manager recovery key, 2FA seeds, ...).

**Paranoid scenario**: a burglar breaks into my home and steals **ALL** my devices. Using `PS`  I'd still be able to get back into most of my systems, as long as I have access to at least one of the copies of my secrets I have stashed in various secret places (both online and offline).


#### Store critical documents

I use `PS` to store a picture of my passport on a (non-indexed) page of a website I own.

**Paranoid scenario**: I am stuck in a foreign country, all my documents lost and my devices unable to connect.
As long as I can use a computer, any computer with a browser, I can visit that page and download a copy of the passport.

#### Share passwords with family

I use `PS` to encrypt passwords and confidential bits of information (Netflix password, bank account number, tax returns, PINs, ...) and send them over non-secure channels (SMS, email, Dropbox, AirDrop, ...).
The `PS` key required to unlock such a secret can be transmitted securely over the air (as in yell it from the next room over).

**Paranoid scenario**: an attacker has gained access to a family member's device and can intercept all communications. This is a grave situation, but `PS` adds an extra layer of security to the most critical bits of these conversations.

#### Share documents with collaborators

I use `PS` to share advanced draft versions of a project I'm working on with selected collaborators. This also works to send my tax documents to my accountant. I transmit the key over a voice call, and they can write it down **temporarily**.
The receiver can open the file without needing any special software (except for a browser).
This is similar to sharing an encrypted PDF, except I trust my solution more.

**Paranoid scenario**: The receiver's email account (or server) has been compromised, and the attacker has access to all messages ever received. Thanks to `PS`, my documents will stay safe
(clearly, this does not protect me from an attacker gaining access to the storage system where these files end up being saved, unencrypted. Nothing short of divine intervention can effectively and reliably protect me from such an attack).


#### Talk privately to friends, and share pictures

I occasionally send or receive a text or a picture that I would like to be extra confidential, e.g., a spicy picture from my partner, a rant about a friend, or a joke that could hurt my reputation if read by someone that doesn't know me.
I do not trust the Big Tech companies with this kind of content, and neither should you.
Here `PS` can add an extra layer of transport security, at the cost of a very little inconvenience.

**Paranoid scenario**: Google is reading my emails, Facebook is reading my messages, no dispute here. At any time in the future, my conversation on these platforms may leak (disgruntled employee, nation-state hack, sheer incompetence, ...). I'm ok with 99.999% of my messages leaking online. For the remaining 0.001%, I use `PS` and sleep better at night.

## On Portability

I consider `PS` *portable* because:

 * It consists of a single HTML file with no external dependencies
 * It can be easily carried and stored (on computers, cloud drives, USB drives, FTP and web servers, ...)
 * It requires no internet connection to decrypt (or encrypt for that matter)
 * It can be opened securely on any device that can run a semi-modern web browser
 * It only uses NIST-recommended algorithm (e.g. it would be trivial to implement compatible encryption/decryption) in a different language.

### On tools

`PS` is a tool. As such, it can be used *wrong* (e.g. weak password for critical secret), or to do bad things (e.g., facilitate the exchange of copyrighted material).

I cannot take responsibility for such misuse any more than a hammer manufacturer can take responsibility for you hammering your thumb, or using the hammer to attack someone.

I can only hope that for each bad usage, there are 100 good ones (according to my own subjective notions of good and bad).
As a society, we apply the same reasoning to hammers, cars, computers, and everything else that can be used for good and for bad.


### Feedback

I would love to hear what you think of this project.
Please do [create a GH issue](#) if you have anything to share.

Alternatively, send me an email. You can find my homepage through my GH profile (the friction is intentional, I hope you understand my reasons).
