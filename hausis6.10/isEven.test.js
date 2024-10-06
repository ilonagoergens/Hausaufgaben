const isEven = require('./isEven')

test('ergibt "=Gerade" wen die zahl Gerade ist', () => {
    expect(isEven(2)).toBe("2=Gerade!")
    expect(isEven(8)).toBe("8=Gerade!")
})

test('ergibt "=Ungerade!" wen die Zahl Ungerade ist', () => {
    expect(isEven(3)).toBe("3=Ungerade!")
    expect(isEven(7)).toBe("7=Ungerade!")
})