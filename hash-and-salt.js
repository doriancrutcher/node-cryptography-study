const {createHash, scryptSync, randomBytes, timingSafeEqual} = require('crypto')

function hash(input){
    return createHash('sha256').update(input).digest('base64')
}

function signup(email,password){
    const salt = randomBytes(16).toString('hex')
    const hashedPassword=scryptSync(password, salt, 64).toString('hex');

    const user = {email, password: `${salt}:${hashedPassword}`}

    users.push(user);
    
    return user
}

function login(email,password){
    const user = users.find(v=>{
        v.email===email
    })

    const [salt, key]= user.password.split(':')
    const hashedBuffer = scryptSync(password,salt,64);

    const keyBuffer = Buffer.from(key,'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    if(match){
        return 'login success'
    }else{
        return 'login fail'
    }

}

let password='hi-mom';


// HMAC Example 

const {createHmac}=require('crypto')


const key = 'super-secret';
const message = 'boo';

const hmac=createHmac('sha256',key).update(message).digest('hex')
console.log(hmac)

const key2 = 'other-secret';


const hmac2=createHmac('sha256',key2).update(message).digest('hex')
console.log(hmac2)
