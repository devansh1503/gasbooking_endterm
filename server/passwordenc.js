require('dotenv').config()
const key = process.env.key

function encrypt(str){
    var result = ''
    for(let i=0; i<str.length; i++){
        result += String.fromCharCode(str.charCodeAt(i)^key.charCodeAt(i%key.length))
    }
    return result
}

module.exports = {
    encrypt,
}