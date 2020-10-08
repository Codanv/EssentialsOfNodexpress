const prime = require('./prime')

test("5 is prime, so expected output is true", () => {
    expect(prime(5)).toBeTruthy()
})
