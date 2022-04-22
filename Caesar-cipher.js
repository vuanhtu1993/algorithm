const caesarCipher = (str, shift, decrypt = false) => {
    const s = decrypt ? (26 - shift) % 26 : shift;
    const n = s > 0 ? s : 26 + (s % 26);
    return [...str]
        .map((l, i) => {
            const c = str.charCodeAt(i);
            if (c >= 65 && c <= 90)
                return String.fromCharCode(((c - 65 + n) % 26) + 65);
            if (c >= 97 && c <= 122)
                return String.fromCharCode(((c - 97 + n) % 26) + 97);
            return l;
        })
        .join('');
};

function cypher(str, shift) {

}

const code = caesarCipher('Hello World!', -3); // 'Ebiil Tloia!'
//   console.log(code)
const decode = caesarCipher('Ebiil Tloia!', -3, true); // 'Hello World!'
// console.log(decode)


var alphabet = "abcdefghijklmnopqrstuvwxyz";
var newalpha = "";

function shift(n) {
    for(let i = 0; i < alphabet.length; i++) {
        let offset = (i + n)%alphabet.length
        newalpha += alphabet[offset]
    }
    return newalpha
}

function encode(str, key) {
    newalpha = shift(key)
    result = ""
    str = str.lowerCase()
    for(let i = 0; i < str.length; i++) {
        let indexChar = alphabet.indexOf(str[i])
        console.log(indexChar)
    }
}

const plainText = "My name is Anhtus"
encode(plainText, 4)