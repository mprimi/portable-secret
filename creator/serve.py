#!/usr/bin/python


# Modified version of:
# https://gist.github.com/SeanPesce/af5f6b7665305b4c45941634ff725b7a

import http.server
import ssl
import sys

host = "0.0.0.0"
port = 8443
# See README in this directory for instructions to generate certificate and key
cert = "./cert.crt"
key = "./private.key"

if __name__ == '__main__':
    context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
    context.load_cert_chain(certfile=cert, keyfile=key, password='')
    server_address = (host, port)
    httpd = http.server.HTTPServer(server_address, http.server.SimpleHTTPRequestHandler)
    httpd.socket = context.wrap_socket(httpd.socket, server_side=True)
    print(f"https://localhost:{port}")
    httpd.serve_forever()
