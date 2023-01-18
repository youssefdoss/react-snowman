/** Returns a random element from an array or string */
function choice(input) {
  return input[Math.floor(Math.random() * input.length)];
}

export { choice };