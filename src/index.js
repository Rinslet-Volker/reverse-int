module.exports = function reverse (n) {
  const withoutMinus = String(n).replaceAll('-', '');
  return withoutMinus.split('').reverse().join('');
}
