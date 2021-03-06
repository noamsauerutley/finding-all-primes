let findPrimes = (target) => {
    if (target && Number.isInteger(target) && target > 2){
        let record = []
        let primes = []
        let max = Math.sqrt(target)

        for(let number = 0; number < target; number++){
            record.push(1)
        }

        for (let prime = 2; prime <= max; prime ++){
            if(record[prime]){
                for(let multiple = prime * prime; multiple < target; multiple += prime){
                    record[multiple] = 0
                }
            }
        }

        for (let sievedNumber=2; sievedNumber < target; sievedNumber++){
            if (record[sievedNumber]){
                primes.push(sievedNumber)
            }
        }
        
        return primes
    }
    return "Please enter an integer greater than two"
}

module.exports = findPrimes