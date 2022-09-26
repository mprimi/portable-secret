# 🔐 Portable Secret
A low-tech, super-portable hack to securely carry your most important secrets with you.

Can also be used to add a layer of privacy to your communication over non-secure channels (email, SMS, cloud drives, ...)

---

Portable Secret (`PS`) it's not a product and barely a project. It is a trick, a *hack*.
The source code and tool provided here are merely a demonstration of such a hack.

## Motivation

Securely storing and exchanging secrets can be tricky, even for experts. **I wanted a tool so simple that even my mom could learn how to use it**.
I have been using `PS` with family and friends to communicate privately, when the circumstances require it.

## How it works

A `Portable Secret` is self-contained HTML file containing an encrypted payload.

The file also also contains a few lines of pure Javascript (no external dependencies).
This script uses the browser built-in [Web Cryptography APIs](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API) to decrypt the secret.

The file can be sent over email, SMS, or stored online (Dropbox, FTP, Cloud Drive, ...).

The receiver can open the file in a web browser (even without an internet connection), plug in the password, and retrieve the secret. No data leaves the browser window context.

Please try this **[example](https://mprimi.github.io/portable-secret/example.html)**, hopefully more clear than 1000 words.

You can create a secret for yourself [here](https://mprimi.github.io/portable-secret/create.html)

## Use case scenarios

I use PS in the following situations:

#### Store top-level keys

I use `PS` to store my top-level secret keys (e.g. PGP key, backup recovery key, primary email address password, password manager recovery key, 2FA seeds, ...).

**Paranoid scenario**: a burglar breaks into my home and steals **ALL** my devices. Using `PS`  I'd still be able to get back into most of my systems, as long as I have access to at least one of the copies of my secrets I have stashed in various secret places (both online and offline) if the burglar obtained some of these copies, they won't be able to use them.


#### Store critical documents

I use `PS` to store a picture of my passport on a (non-indexed) page of a website I own.

*Paranoid scenario*: I am stuck in a foreign country, all my documents lost and my devices unable to connect.
As long as I can use a computer with a browser, I can visit that page and download a copy of the passport. Nobody else that stumbles upon that page will be able to extract its content

#### Share passwords with family

I use `PS` to encrypt passwords and other confidential bits of information (Netflix password, bank account number, tax returns, PINs, ...) and send them over non-secure channels (SMS, email, Dropbox, AirDrop, ...).
The `PS` key required to unlock such a secret can be transmitted securely *over the air* (as in: yell it from the next room over :-P).

*Paranoid scenario*: an attacker has gained access to a family member's device and can intercept all communications. This is a grave situation, but thanks to `PS` some critical bits of information would be protected from the attacker prying eyes.

#### Share documents with collaborators

I use `PS` to share drafts of projects with selected collaborators. It also works to send tax documents to my accountant. I send the file via email, then the key over a voice call.
The receiver can open the file without needing any special software (except for a browser).
This is similar to sharing an encrypted PDF, except I trust my solution more. Plus it works with any file type.

*Paranoid scenario*: The receiver's email account (or server) has been compromised, and the attacker has access to all messages ever received. Thanks to `PS`, my documents will be safe
(clearly, this does not protect me from an attacker gaining access to the storage system where these files end up being saved unencrypted. Nothing short of divine intervention can  protect me from such an attack).


#### Talk privately to friends, and share pictures

I occasionally want to send or receive a text or a picture that I would like to be extra-extra-extra confidential, e.g., a spicy picture from my partner, a rant about coworker, or a joke that could hurt my reputation if read by someone that doesn't know me.
I do not trust the Big Tech companies with this kind of content, and neither should you.
Here `PS` can add an extra layer of transport security, at the cost of a little inconvenience.

*Paranoid scenario*: Google is reading my emails, Facebook is reading my messages, no dispute here. At any time in the future, my conversation on these platforms may leak (disgruntled employee, nation-state hack, sheer incompetence, ...). I'm ok with 99.999% of my messages leaking online. For the remaining 0.001%, I use `PS`, and I sleep better at night.

## On Portability

I consider `PS` *portable* because:

 * It consists of a single HTML file with no external dependencies
 * It can be easily carried and stored (on computers, cloud drives, USB drives, FTP and web servers, ...)
 * It requires no internet connection to decrypt (or encrypt for that matter)
 * It can be opened securely on any device and operating system that can run a semi-modern web browser
 * It uses NIST-recommended algorithm (e.g. compatible encryption/decryption can be trivially implemented in a different language)

### On tools

`PS` is a tool. As such, it can be used *wrong* (e.g. weak password for critical secret), or used to do bad things (e.g., facilitate exfiltration of IP or copyrighted material).

I cannot take responsibility for such misuse any more than a hammer manufacturer can take responsibility for you hammering your thumb, or using the hammer to attack someone.

I can only hope that for each bad usage, there are 100 good ones (according to my own subjective notions of good and bad).

As a society, we apply the same reasoning to hammers, cars, computers, and everything else that can be used for good and for bad.


### Feedback

I would love to hear what you think of this project.
Please do [create a GH issue](https://github.com/mprimi/portable-secret/issues) if you have anything to share.

Alternatively, send me an email. You can find my homepage through my GH profile (the friction is intentional, I hope you understand my reasons).
