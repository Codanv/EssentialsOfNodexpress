const list = [
    "Suit",
    "Pajama",
    "Kurti",
    "Lahanga"
]

test("testing mark in the array", () => {
    expect(list).toContain("Lahanga")
})

test("testing mark in the array", () => {
    expect(new Set(list)).toContain("Lahanga")
})

test("testing mark in the array", () => {
    expect(new Set(list)).not.toContain("Kids Wear")
})

