#!/usr/local/opt/node@6/bin/node

const [,, ... args] = process.argv

console.log('hello world ${args}')