const numerology = require('../numerology')
const domains = require('./top1000domains.json')

domains.forEach((domain) => {
  const num = numerology(domain, [1, 7])

  console.log(`folder${num}`)
})
