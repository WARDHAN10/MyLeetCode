const SOE = (n) => {
  let prime = []
  for (let i = 0; i < n + 1; i++) {
      prime.push(true)
  }
  if (n == 1) {
      return 1
  }
  let p = 2
  while (p * p <= n) {
      if (prime[p] == true) {
          for (let j = p * 2; j < n + 1; j += p) {
              prime[j] = false
          }
      }
      p += 1
  }
  prime[0] = false
  prime[1] = false
  const NewPrime = []
  for (let i = 0; i < prime.length; i++) {
      if (prime[i]) {
          NewPrime.push(i)
      }
  }
  return NewPrime
}


console.log(SOE(10))