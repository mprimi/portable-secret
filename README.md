# portable-secret
A low-tech, super-portable hack to securely carry your most important secrets with you.

---

Portable Secret (`PS`) it's not a product, it's a hack. And a tool to demonstrate the hack.

Securely storing and exchanging secrets is can be tricky, even for experts. **I wanted a tool that even my mom could learn how to use.**

I personally use PS for the following:

 * Store important documents I want access to, even if I lose access to all my devices (copy of passport, concert tickets, ...)
 * Exchange *secrets* (online services passwords, bank account numbers, tax documents) with my family, friends and coworkers over non-secure channels (email, chat, web)
 * Store my top-level secret keys (i.e. backup recovery key, GPG keys, SSH keys, ...), I can carry these secrets with me on computers and unencrypted USB drives without fear of leaking them.

PS is a tool, and as such it can be used wrong, or to do bad things,

## Portable

A PS secret file is portable because:

 * It is a single HTML file with no external dependencies, and requires no internet connection to open
 * It can be easily carried and stored (on computers, cloud drives, USB drives, FTP and web servers, ...)
 * It can be opened securely on any device that can run a semi-modern web browser

## How does it work

A portable secret is an HTML file that embeds an encrypted payload.
It also contains a bit of Javascript with no imports and no external dependencies (it needs to work offline!). The script uses the browser built-in [Web Cryptography APIs](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API) to decrypt the secret. No data leaves your browser window.

**[Example](#)**

You can create a secret for yourself [here](#)

## Security considerations

A hammer is a crucial tool for building, breaking, nailing, etc. But can be dangerous if misused. And ineffective if used in the wrong settings.

Similarly, PS is a tool for online privacy and peace of mind. But it can definitely be used wrong, leading to stolen or lost secrets, and a false sense of security.
