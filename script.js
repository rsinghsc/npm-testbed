#!/usr/local/opt/node@6/bin/node

const [,, ... args] = process.argv

console.log("hello world ${args}")
var PropertiesReader = require('properties-reader')
var properties = PropertiesReader('config.properties')

var fs = require('fs')
fs.readFile('question_id_list.txt', 'utf8', function(err, contents) {
    console.log(contents)
})

// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
//
// Connection URL
// const url = 'mongodb://localhost:27017';
// var url  = properties.get('mongo.url')
//
// Database Name
// const dbName = properties.get('mongo.db')
//
// Use connect method to connect to the server
// MongoClient.connect(url, function(err, client) {
//     assert.equal(null, err);
//     console.log("Connected successfully to server");
//
//     const db = client.db(dbName);
//
//     client.close();
// });