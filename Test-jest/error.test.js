function demo() {
    throw new Error('Okay! it is what is')
}

test("testing whether demo throws error", () => {
    expect(demo).toThrow()
    expect(demo).toThrow(Error)
    expect(demo).toThrow(/what/)
    expect(demo).toThrow('Okay! it is what is')
})
