let findPrimesFaster = require('../findPrimesFaster')

describe("#findPrimesFaster", () => {

    
    test("it returns all the primes less than a given numer", () => {
        expect(findPrimesFaster(100)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97])
    })
    
    test("it returns all the primes less than a small number", () => {
        expect(findPrimesFaster(3)).toEqual([2])
    })

    test("it returns an error message if given a number less than three", () => {
        expect(findPrimesFaster(null)).toEqual("Please enter an integer greater than two"),
        expect(findPrimesFaster(undefined)).toEqual("Please enter an integer greater than two"),
        expect(findPrimesFaster()).toEqual("Please enter an integer greater than two"),
        expect(findPrimesFaster(0)).toEqual("Please enter an integer greater than two"),
        expect(findPrimesFaster(-6)).toEqual("Please enter an integer greater than two"),
        expect(findPrimesFaster(1)).toEqual("Please enter an integer greater than two"),
        expect(findPrimesFaster(2)).toEqual("Please enter an integer greater than two")
        expect(findPrimesFaster(2.783)).toEqual("Please enter an integer greater than two")
        expect(findPrimesFaster("abcd")).toEqual("Please enter an integer greater than two")
    })

    test("it returns all primes less than a given large number", () => {
        expect(findPrimesFaster(1000000)[78497]).toEqual(999983)
    })
})