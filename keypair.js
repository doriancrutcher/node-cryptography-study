const {generateKeyPairSync}=require('crypto')

const {privateKey,publicKey}=generateKeyPairSync('rsa',{
    modulusLength: 2048,
    PublicKeyEncoding:{
        type: 'spki',
        format: 'pem'
    },
    privateKeyEncoding:{
        type:'pkcs8',
        format:'pem',
        cipher:'aes-256-cbc',
        passphrase:'top secret'
    }
});

console.log(publicKey)
console.log(privateKey)

module.exports={
    privateKey,publicKey
}