let findPrimes = (target) => {
    let pool = []
    let primes = [2]
    let max = Math.sqrt(target)

    for(let i = 0; i < target; i++){
        pool.push(1)
    }

    for (let i = 3; i <= max; i += 2){
        if(pool[i]){
            for(let j = i * i; j < target; j += i*2){
                pool[j] = 0
            }
        }
    }

    for (let i=2; i < target; i++){
        if (pool[i]){
            primes.push(i)
        }
    }
    
    return primes
}

module.exports = findPrimes