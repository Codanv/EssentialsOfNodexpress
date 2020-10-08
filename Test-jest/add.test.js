const sum = require('./add')

test("adds 3 + 5 to equal to 8", () => {
    expect(sum(3, 5)).toBe(8)
})
