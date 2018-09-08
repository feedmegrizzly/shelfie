const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    // app.listen(8001,()=>{
    //     console.log(`listening again on port 8001`)
    // });
}).catch(err => {
    console.log(`ERROR CONTECTING TO DATABASE`, err.message)
})


app.get('/api/products', (req, res) => {
    const db = req.app.get('db');
    db.products.find().then(result => {
        res.send(result)
    })
});

app.post('/api/products', (req, res) => {
    const db = req.app.get('db');
    const { productName, url, price } = req.body;
    db.addProduct([productName, url, price])
        .then(result => {
            return db.getAllProducts()
        })
        .then(result => {
            res.send(result)
        });
})


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
