import Add from "./Add";

describe("add function", () => {
    test("adds 1 + 2 to equal 3 using toBe", () => {
        expect(Add(1, 2)).toBe(3)
    })

    test("adds 1 + 2 to equal 3 using", () => {
        expect(Add(1, 2)).toEqual(3)
    })
})