"use strict";

console.log = process.argv.find(v=>{return v == "--logs"}) ? console.log : function () {};

