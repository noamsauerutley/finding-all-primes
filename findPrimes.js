let findPrimes = (target) => {
    if (target && Number.isInteger(target) && target > 2){
        let record = []
        let primes = [2]
        let max = Math.sqrt(target)

        for(let i = 0; i < target; i++){
            record.push(1)
        }

        for (let i = 3; i <= max; i += 2){
            if(record[i]){
                for(let j = i * i; j < target; j += i*2){
                    record[j] = 0
                }
            }
        }

        for (let i=3; i < target; i+=2){
            if (record[i]){
                primes.push(i)
            }
        }
        
        return primes
    }
    return "Please enter an integer greater than two"
}

module.exports = findPrimes