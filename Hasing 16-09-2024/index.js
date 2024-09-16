// // import bcrypt from 'bcrypt';

// // const hash = bcrypt.hashSync('abc', 5);
// // console.log(hash);

// // const oldhash = '$2b$05$yo7L3hI/2BlX0tXxzKbawuGHF/EgmRq4wTveRH6Asy3udf2pYBJ96';
// // const isMatch = bcrypt.compareSync('abc1', oldhash);
// // console.log(isMatch);

// import crypto from 'crypto';

// const encryptSymmetric = (key, iv, plaintext) => {
//     const cipher = crypto.createCipheriv(
//         "aes-256-gcm",
//         Buffer.from(key, 'base64'),
//         Buffer.from(iv, 'base64')
//     );
//     let ciphertext = cipher.update(plaintext, 'utf8', 'base64');
//     ciphertext += cipher.final('base64');
//     const tag = cipher.getAuthTag()

//     return { ciphertext, iv, tag }
// }

// const plaintext = "Hello, world!";
// const key = 'PsA+aAMtBMr0xxswkkFkY6lpddcFb6DlZA+dCqnibcQ=';
// const iv = 'U/7SoPe+maC9Pvfb';


// const { ciphertext, tag } = encryptSymmetric(key, iv, plaintext);
// console.log('ciphertext : ' + ciphertext);
// // console.log('iv : ' + iv);
// // console.log('tag : ' + tag.toString('base64'));


// const decryptSymmetric = (key, ciphertext, iv, tag) => {
//     const decipher = crypto.createDecipheriv(
//         "aes-256-gcm",
//         Buffer.from(key, 'base64'),
//         Buffer.from(iv, 'base64')
//     );

//     decipher.setAuthTag(Buffer.from(tag, 'base64'));

//     let plaintext = decipher.update(ciphertext, 'base64', 'utf8');
//     plaintext += decipher.final('utf8');

//     return plaintext;
// }

// const output = decryptSymmetric(key, ciphertext, iv, tag);

// console.log(output); 

import jwt from 'jsonwebtoken';
// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
var sign = 'shhhhh';
var token = 'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imtpc2hhbHlAZ21haWwuY29tIiwiaWF0IjoxNzI2NTA4MDg3fQ.0Q7RwWCg5QchPVffw0r2kIX2aGsprzdIN8wWivPP9E9tlZIvzxMbFZ7hxM8OO_tA'
var decoded = jwt.verify(token,sign);
console.log(token);

// aisekvnwoevn => 500rs


// aoienfwe => no
// aoeifnweog => no