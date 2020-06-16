let {pathToRegexp} = require('path-to-regexp')
let params = []
let regexp = pathToRegexp('/user/:id/:age', params, {end: true})

console.log(params.map(item => item.name))