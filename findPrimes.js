let findPrimes = (number) => {
    let pool = []
    let primes = []
    let max = Math.sqrt(number)

    for(let i = 0; i < number; i++){
        pool.push(true)
    }

    for (let i = 2; i <= max; i++){
        if(pool[i]){
            for(let j = i*i; j < number; j+=i){
                pool[j] = false
            }
        }
    }

    for (let i=2; i < number; i++){
        if (pool[i]){
            primes.push(i)
        }
    }
    
    return primes
}