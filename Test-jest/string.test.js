test("i in indiana", () => {
    expect("indiana").not.toMatch(/I/)
})

test("i in indiana", () => {
    expect("indiana").toMatch(/i/)
})

test("i in indiana", () => {
    expect("indiana").toMatch(/iana/)
})

