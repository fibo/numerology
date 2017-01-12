function numerology (name, range) {
  if (arguments.length === 1) range = [1024, 49151]
  const inf = range[0]
  const sup = range[1]
  var num = name.split('').map((x) => x.charCodeAt()).reduce((a, b) => a + b)
  if (num < inf) num += inf
  if (num > sup) num = (num % sup) + inf
  return num
}
module.exports = numerology
