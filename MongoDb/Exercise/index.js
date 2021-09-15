let database = require('./database');
let instanodeDb = require('./instanode-db');

const MIN_DATE = new Date(-8640000000000000);
const MAX_DATE = new Date(8640000000000000);

let minDate = '';
let maxDate = '';

// database().then(() => {
//         instanodeDb.saveImage( {
//             url: 'https://http.cat/100',
//             description: 'such cat much wow',
//             tags: ['cat', 'kitty', 'cute', 'catsagram']
//         })
//     });

//search images by tag
database().then(() => {
    instanodeDb.findBytag('kitty')
        .then((t) => {
            // console.log(`${t.name} ${t.creationDate} `);
            console.log(t);
        });
});

//search  tag
database().then(() => {
    instanodeDb.findTag('kitty')
        .then((t) => {
            console.log(`${t.name} ${t.creationDate}`);            
        });
});


    