describe("Test", () => {
  it("passed with true", () => {
    expect(true).toBe(true)
  })

  it("passed with 1", () => {
    expect(1).toBe(1)
  })

  it("fail with 1", () => {
    expect(2).toBe(1)
  })
})
