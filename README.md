### To run the code
```
npm install
```
after
```
npm run dev
```

### Explaining the JWT

Firstly want to mention what is the JWT.

JWT stands for JSON Web Token. The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS)
structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or
integrity protected with a Message Authentication Code (MAC) and/or encrypted.

A JWT typically consists of three parts separated by dots:

- Header: Contains metadata about the type of token and the signing algorithm being used.
- Payload: Contains the claims. Claims are statements about an entity (typically, the user) and additional data.
- Signature: Used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed
along the way.
