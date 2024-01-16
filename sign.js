const {createSign, createVerify, verify}= require('crypto');
const { publicKey,privateKey } = require('./keypair');
const { create } = require('lodash');

const message= 'this data must be signed';

// Sign 

const signer = createSign('rsa-sha256');

signer.update(message);

const signature = createVerify('rsa-sha256');

verifier.update(message);

const isVerified=verifier.verify(publicKey,signature,'hex')