console.log('May Node be with you');

const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const MongoClient = require('mongodb').MongoClient 
const connectionString = 'mongodb+srv://kaludavid411:Chooseme9@cluster0.xaxdq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

MongoClient.connect(connectionString)
  .then(client => {
    const db = client.db('naruto-quotes')
    const quotesCollection = db.collection('quotes')
    app.use(bodyParser.urlencoded({ extended: true }))
    app.get('/', (req, res) => {
        quotesCollection
           .find()
           .toArray()
           .then(results => {
            console.log(results)
        })
        .catch(error => console.error(error))
        res.sendFile(__dirname + '/index.html')
    })
    app.post('/quotes', (req, res) => {
        quotesCollection
          .insertOne(req.body)
          .then(result => {
            console.log(result);
            res.redirect('/')
          })
          .catch(error => console.error(error))
    })
    app.listen(3000, function(){
        console.log('listening on 3000');
    })
  })
  .catch(console.error)





