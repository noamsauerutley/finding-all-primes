let findPrimes = require('../findPrimes')

describe("#findPrimes", () => {

    test("it returns all the primes less than a given numer", () => {
        expect(findPrimes(100)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97])
    })

    test("it returns an empty array if given a number less than three", () => {
        expect(findPrimes(0)).toEqual([]),
        expect(findPrimes(-6)).toEqual([]),
        expect(findPrimes(1)).toEqual([]),
        expect(findPrimes(2)).toEqual([])
    })

    test("it returns all primes less than a given large number", () => {
        expect(findPrimes(1000000)[78497]).toEqual(999983)
    })
})