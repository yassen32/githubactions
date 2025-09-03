function greet(name) {
  return `Hello, ${name}!`;
}

// Only log when this file is run directly, not when imported by tests
if (require.main === module) {
  console.log(greet("World")); // manual test
}

module.exports = greet;
    
