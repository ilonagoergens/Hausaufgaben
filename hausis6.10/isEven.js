function isEven(num) {
    if (num % 2 === 0)
        return num + "=Gerade!"
    else {
        return num + "=Ungerade!"
    }
}

console.log(isEven(8))

module.exports = isEven