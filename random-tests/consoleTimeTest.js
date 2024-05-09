console.time('array')
console.timeLog('array')
console.time(new Array(2_000_000).fill(2).find((_, index) => index === 2000000))
console.timeEnd('array')