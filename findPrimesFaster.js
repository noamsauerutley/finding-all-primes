let findPrimesFaster = (target) => {
    if (target && Number.isInteger(target) && target > 2){
        let record = []
        let primes = [2]
        let max = Math.sqrt(target)

        for(let number = 0; number < target; number++){
            record.push(1)
        }

        for (let prime = 3; prime <= max; prime += 2){
            if(record[prime]){
                for(let multiple = prime * prime; multiple < target; multiple += prime * 2){
                    record[multiple] = 0
                }
            }
        }

        for (let sievedNumber=3; sievedNumber < target; sievedNumber+=2){
            if (record[sievedNumber]){
                primes.push(sievedNumber)
            }
        }
        
        return primes
    }
    return "Please enter an integer greater than two"
}

module.exports = findPrimesFaster
