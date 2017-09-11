/**
 * @param {String} name you want to convert into a number.
 * @param {Array} [range] defaults to `[1, 9]`.
 * @returns {Number} num.
 */
function numerology (name, range) {
  if (arguments.length === 1) range = [1, 9]
  const inf = range[0]
  const sup = range[1]
  var num = name.split('')
                .map((x) => x.toLowerCase().charCodeAt())
                .reduce((a, b) => a + b)
  if (num < inf) num += inf
  if (num > sup) num = (num % sup) + inf
  return num
}
module.exports = numerology
