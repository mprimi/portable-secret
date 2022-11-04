# Portable Secret Creator

Creator could be embedded in a single HTML file with inlined Javascript, and be portable.

However this has some issues:
 - Inlining all JS requires 2 levels of escaping, making it hard to modify/maintain those files
 - Some browsers disable `window.crypto` on local files and non-TLS servers

So the easiest way to run the creator locally is:

```
openssl req -new -newkey rsa:4096 -x509 -sha256 -days 365 -nodes -out cert.crt -keyout private.key

python3 serve.py
```

Then visit https://127.0.0.1:8443/index.html

Notice that some browsers are not happy with the self-signed certificate.

All of this is just for local development.
You can use the creator at: https://mprimi.github.io/portable-secret/creator/ or host it on your own (HTTPS) server.
