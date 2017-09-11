const numerology = require('../numerology')

const userPortsRange = [1024, 49151]
const port = numerology('my-app-name', userPortsRange)

console.log(port)
