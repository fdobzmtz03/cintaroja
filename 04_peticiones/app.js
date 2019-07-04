
// const request = require('request');
// const url = `https://swapi.co/api`

// request(`${url}/species/5/`, function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   const json = JSON.parse
//   console.log('body:', body); // Print the HTML for the Google homepage.
//   console.log('Este es el JSON', json)
  
//   console.log(json.name)
// });


// request(`${url}/films/7/`, function (error, response, body) {
//     console.log('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the Google homepage.
//   });

// request(`${url}/species/9/`, (err, res, body) => {
//     console.log( err); 
//     //console.log(res); 
//     const json = JSON.parse(body)
//     console.log('Este es el body:', body); // Print the HTML for the Google homepage.
//     console.log('Este es el JSON', json)
//     console.log('Name', json.nanme)
//     console.log(JSON.stringify(json.name))
//   }); 

// const getSomething = (path, id) => {
//     request.get( request(`${url}/${path}/${id}/`, (err, res, body) => {
//              //console.log( err); 
//              //console.log(res); 
//              const json = JSON.parse(body)
//              //console.log('Este es el body:', body); // Print the HTML for the Google homepage.
//              //console.log('Este es el JSON', json)
//              console.log('Name', json.name)
//              console.log('Gender', json.gender)
//              //console.log(JSON.stringify(json.language))
//              console.log('Species', json.species)
//           }) )
// }

// getSomething('people', '4')
// getSomething('people', '9')
// getSomething('people', '15')
// getSomething('people', '5')
// getSomething('people', '30')

const request = require('request');
const poke = `https://pokeapi.co/api/v2`

const getSomething = (any, id) => {
    request.get( request(`${poke}/${any}/${id}/`, (err, res, body) => {
             const json = JSON.parse(body)
             console.log('Generation', json.generation)
             console.log('Pokemon types', json.pokemon)
             console.log('Name', json.names)
            }) )
        }

getSomething('type', 'water')

getSomething('type', 'fairy')

getSomething('ability', '3')

const getPokemon = (any, id) => {
    request.get( request(`${poke}/${any}/${id}/`, (err, res, body) => {
             const json = JSON.parse(body)
             console.log('Baby Form', json.is_baby)
             console.log('Pokemon Chain Evolution', json.chain)
             console.log('trigger', json.trigger)
            }) )
        }

getPokemon('evolution-chain', 'eevee')
getPokemon('evolution-chain', 'pikachu')
getPokemon('evolution-chain', 'gloom')
