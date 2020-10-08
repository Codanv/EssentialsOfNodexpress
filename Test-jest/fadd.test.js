test("adding floating point numbers", () => {
    const value = 0.1 + 0.2
    expect(value).toBeCloseTo(0.3)
})
