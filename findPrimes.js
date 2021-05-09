let findPrimes = (target) => {
    if (target && Number.isInteger(target) && target > 2){
        let record = Array(target).fill(1)
        let primes = []
        let max = Math.sqrt(target)
        
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