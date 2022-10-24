
 > Do you worry about privacy and digital disaster recovery more than most people?
 > This is for you.
 > M'

# 🔐 Portable Secret
A low-tech, super-portable trick to:
 * Talk and exchange files privately with people less tech-savvy than you
 * Store your most important secret in plain sight, online or offline, and access them without special software or key

---

Portable Secret is not a product and it is barely a project.
**It is just a neat trick, a *hack***.

The [source code](https://github.com/mprimi/portable-secret) and tool provided are merely a demonstration.

---

## The problem

When I communicate with most people online, I need to lower my *desired* level of privacy to whatever the other party can handle.

E.g.: **I can't expect my mom to learn how to send [PGP mail](https://en.wikipedia.org/wiki/Pretty_Good_Privacy). I can't expect my accountant to learn to use [age](https://github.com/FiloSottile/age). Etc.**

This got me thinking... Could I *raise* the security of the conversation without inconveniencing the other party, or requiring them to learn special software or skills?

Portable Secret is my answer to this question. With it, I can share arbitrarily sensitive secrets with anyone I know. And they can read it using household software they already knows how to use.

### Talking to my future self

Turns out this little trick is also great to transmit secrets to myself in a future emergency.
e.g. **stranded in a foreign country, all my documents and device stolen**.

Portable Secret provides a path to get back into all my systems, with any computer, from anywhere in the world!

## How it works

A `Portable Secret` is a self-contained HTML file containing an encrypted payload.
It also contains a few lines of *pure* Javascript (no external calls or dependencies) that leverage the browser built-in [Web Cryptography APIs](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API) to decrypt the secret.

These HTML files can be sent over insecure channels (E-mail, SMS, chat, ...) or stored online (Dropbox, FTP, Cloud Drive, ...).

The receiver can open the file in any web browser on any platform, even without an internet connection.

The decrypted data exists only temporarily within the browser window context.

### **[Example](https://mprimi.github.io/portable-secret/example.html)**

You can create yourself a Portable Secret [here](https://mprimi.github.io/portable-secret/creator)

### Portability

I call this kind of secret *portable* because:

 * It consists of a single HTML file with no external dependencies
 * It can be easily carried and stored (on devices, cloud drives, USB drives, FTP and web servers, ...)
 * It requires no internet connection to decrypt (or encrypt for that matter)
 * It can be opened securely on any device and operating system that can run a semi-modern web browser
 * It uses standard, [NIST-recommended](https://csrc.nist.gov/projects/block-cipher-techniques) cryptography algorithms (e.g. compatible encryption/decryption can be trivially implemented in any language)

---

## Usage for personal communications

Below are a few daily digital life scenarios, and how I use Portable Secret to stay a little more safe and private when talking to friends and family online.

#### Share a password, bank account number, padlock code, spare house key hiding place, ...

Examples:
 * send my bank account number to a new employer
 * share the WiFi password with a friend visiting
 * share my Netflix password with my partner

E-mail and texts are convenient ways to share these kinds of secrets. But they are not private (service providers can read them in transit), and not forward-secure.

In these scenarios, I create a one-time Portable Secret and send it over text or email. The secret password can be easily shared "over the air" (as in: yelled from the next room over, or relayed over a phone call).

Even a secret with a trivial password (e.g. `password`), is enough to keep Google or Facebook from reading my message. Which sometimes is all I need.


#### Share pictures and files

Examples:
 * send my partner a spicy picture
 * share a confidential document draft with a client
 * send a particularly sensitive letter to a friend
 * share financial information with my accountant

It is hard to share a picture with someone without also sharing it with your service provider (Facebook, Google, Apple, AT&T, ...). Future data breaches at these providers may leak my very embarrassing picture on the internet, forever.

Similarly to the password-sharing case, I create a one-time Portable Secret and send it over text or email. Then communicate the password via a separate channel. Or, better, create a password out of secrets that already share with the receiver.

---

## Usage for disaster recovery

Portable Secret was motivated by communication privacy, but it also works great to communicate *with my future self*, during a crisis!

The following scenarios are often on my mind, and I've never encountered a solution that I like more than Portable Secret.

#### Scenario: All your device are belong to us[*](https://en.wikipedia.org/wiki/All_your_base_are_belong_to_us)

Example:
 * a burglar breaks into my house and steals *all* my phones, computers, and external drives
 * a ransomware attack locks me out of all my systems

At this point, I'd be *royally* screwed. No access to (encrypted) offsite backups; no access to password manager; no access to email and phone, making it impossible to reset any other account, ...

Using Portable Secret I can get out of this pickle in minutes, using any computer. I can access a subset of my top-level recovery keys (GPG key, backup keys, 2FA seeds, SSH keys, ...), without needing any special software and without having to remember any passwords.

I store critical top-level keys as Portable Secrets on USB drives stashed in strategic places. I also have copies published on the internet.

If any of these copies fall into the hands of an adversary, I am not worried they'll be able to extract or use them.

#### Scenario: Stranded abroad

Example:
 * While traveling abroad, my passport, phone, and money get stolen

Another nightmare scenario. Using Portable Secrets, I store a copy of my passport and credit card number in a hidden corner of a website I own (unlinked to me).

If the nightmare scenario ever becomes reality, I can get my hands on a copy of my password and some funds within a minute, from any computer without any special software.

Anyone else stumbling on these secrets by lucky accident, would not be able to decrypt them.

#### Scenario: Untimely demise

Example:
 * I get hit by a bus

Dealing with a death is unpleasant enough. I don't want to subject my family to months of extra work to identify and retrieve my assets, digital and physical.

For this situation, I have created a Portable Secret for my family members. It can be opened by combining answers to secret questions only a few people would know. I trust them not to open this file unless necessary.

The secret contains a letter to family members, and some key documents and instructions related to my most important assets.

---

## Miscellaneous

### Prior art

I came up with Portable Secret on my own, but it's such a simple idea that I'm sure other people out there are doing similar things. I didn't find anything quite like it, but I also didn't search very hard.

If you are aware of any similar projects, please let me know and I'll link them here.

### Choosing a good password

Choosing a strong-enough password is key (pun intended).

Eventually I'll fill in this paragraph. For now all you get is the obligatory XKCD: [correct-horse-battery-staple](https://xkcd.com/936/)

### On tools

Portable Secret is a *tool*. As such, it can be used *wrong* (e.g. weak password), or used to do bad things (e.g., exfiltrate intellectual property).

I cannot take responsibility for such misuse any more than a hammer manufacturer can take responsibility for me hammering my thumb, or using the hammer to attack someone.

I can only hope that the benefits outweigh the costs, i.e. for every 1 bad usage, there are 1000 good ones.
We apply the same risk-benefit calculation to everything else in our lives that can be used for good and bad (hammers, cars, cameras, computers, ...).


### Feedback

I would love to hear what you think of this project, good, bad, or ugly.

Please use [GH issue](https://github.com/mprimi/portable-secret/issues) to report a problem and make improvement suggestions. For everything else, start a [GH Discussion](https://github.com/mprimi/portable-secret/discussions).

I'm happy to talk over email too. You can find the address (and PGP key) on my homepage, which is linked in my [GH profile](https://github.com/mprimi).
