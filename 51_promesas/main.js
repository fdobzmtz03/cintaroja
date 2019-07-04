/*
const request = require('request');

const newPost = (title, cuerpo, userId) => {
    const url = 'https://jsonplaceholder.typicode.com';
    const uri = '/posts';
    const URL = url + uri;

    var json = JSON.stringify({
        title,
        body,
        userId
    })
    return new Promise( (resolve, reject) => {
        var options = {
            method: 'POST',
            body: json, 
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
        }
        request.post(URL, options, (err, res, body) => {
            if (res.statusCode === 201){
                const text = JSON.parse(body);
                resolve(text);
            }else{
                reject(res.statusCode)
            }
        });
    });
};

newPost('Este es un post', 'Este es el body de mi post',  1)
  .then(resp => console.log(resp))
  .catch(err => console.error(err))
  */
 const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/';

function createAuthor(nombre, apellidos, nacionalidad, biografia, genero, edad) {
    const URI = 'authors/'
    var URL_FINAL = URL_BASE + URI

    var jsonSend = {
        "name": nombre,
        "last_name": apellidos,
        "nacionalidad": nacionalidad,
        "biography": biografia,
        "gender": genero,
        "age": edad
    }

    return new Promise((resolve, reject) => {
        request.post({ url: URL_FINAL, form: jsonSend }, (err, response, body) => {
            let json = JSON.parse(body)
            response.statusCode == 201
                ? resolve(json)
                : reject('Error al crear un nuevo autor')
        })
    })
}

createAuthor("Katherine","last name primera","MX","bio primera","M",53)
     .then(nuevoAutor => console.log(nuevoAutor))
     .catch(error =>console.log(error))
