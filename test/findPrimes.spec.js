let findPrimes = require('../findPrimes')

describe("#findPrimes", () => {

    
    test("it returns all the primes less than a given numer", () => {
        expect(findPrimes(100)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97])
    })
    
    test("it returns all the primes less than a small number", () => {
        expect(findPrimes(3)).toEqual([2])
    })

    test("it returns an error message if given a number less than three", () => {
        expect(findPrimes(null)).toEqual("Please enter an integer greater than two"),
        expect(findPrimes(undefined)).toEqual("Please enter an integer greater than two"),
        expect(findPrimes()).toEqual("Please enter an integer greater than two"),
        expect(findPrimes(0)).toEqual("Please enter an integer greater than two"),
        expect(findPrimes(-6)).toEqual("Please enter an integer greater than two"),
        expect(findPrimes(1)).toEqual("Please enter an integer greater than two"),
        expect(findPrimes(2)).toEqual("Please enter an integer greater than two")
        expect(findPrimes(2.783)).toEqual("Please enter an integer greater than two")
        expect(findPrimes("abcd")).toEqual("Please enter an integer greater than two")
    })

    test("it returns all primes less than a given large number", () => {
        expect(findPrimes(1000000)[78497]).toEqual(999983)
    })
})