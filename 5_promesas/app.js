/*
let devsDB = [
    {
        'name' : 'Fernando',
        'id' : 1
    },
    {
        'name' : 'Luis',
        'id' : 2 
    },
    {
        'name' : 'Ana',
        'id' : 3
    }
];

let cintasDB =[
    {
        'id': 1,
        'cinta' : 'Roja'
    },
    {
        'id': 2,
        'cinta' : 'Negra'
    }

];

const getDev = (id) => {
    return new Promise((resolve, reject) => {
        let developer = devsDB.find(dev => dev.id === id)
        //console.log(developer)
        if(!developer){
            reject(`El dev con Id ${id} no existe`)
        } else {
            resolve(developer)
        }
    });

};
/*
getDev(3)
 .then(res => {
     console.log(res)
 }, (err) => console.log(err))
 //.catch(err => console.log(err))

 getDev(30)
 .then(res => console.log(res))
 .catch(err => console.log(err))

 getDev(1)
 .then(res => console.log(res))
 .catch(err => console.log(err))*/
/*
 const getCinta = (id) => {
    return new Promise((resolve, reject) => {
        let cintaDB = cintasDB.find(cinta => cinta.id === id)
        if(!cintaDB){
            reject(`El dev con Id ${id} no se encuentra`)
        } else {
            resolve(cintaDB);
        }
    });

};
*/
/*
const getCinta = (dev) => {
    return new Promise((resolve, reject) => {
        let cintaDB = cintasDB.find(cinta => cinta.id === dev.id)
        if(!cintaDB){
            reject(`No se encuentra en las cintas el ${id}`)
        } else {
            resolve({
                cinta: cintaDB.cinta,
                dev: dev.name});
        }
    });

};

getDev(2)
.then(res => {
    console.log(res)
    getCinta(res.id)
    .then(data => console.log(`El dev ${data.dev} esta en la ${data.cinta}`))
    .catch(err => console.log(err))
})
.catch(err => console.log(err))
*/

let devsDB = [
    {
        'name': 'Fernando',
        'id': 1
    },
    {
        'name': 'Luis',
        'id': 2
    },
    {
        'name': 'Ana',
        'id': 3
    }
];
let cintasDB = [
    {
        'id': 1,
        'cinta': 'Roja'
    },
    {
        'id': 2,
        'cinta': 'Negra'
    }
]

const getDev = (id) => {
    return new Promise( (resolve, reject) => {
        let developer = devsDB.find(dev => dev.id === id);
        if(!developer) {
            reject(`El dev con Id ${id} no existe`);
        } else {
            resolve(developer)
        }
    })
};

const getCinta = (dev) => {
    return new Promise( (resolve, reject) => {
        let cintaDB = cintasDB.find(cinta => cinta.id === dev.id);
        if(!cintaDB) {
            reject(`No existe cinta para el dev ${dev.name}`);
        } else {
            resolve({
                cinta: cintaDB.cinta, 
                dev : dev.name
            });
        }
    });
};

getDev(3)
    .then(res => {
        //console.log(res)
        getCinta(res)
            .then(data => {
                console.log(`El dev ${data.dev} esta en la cinta ${data.cinta} `)
            })
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err))