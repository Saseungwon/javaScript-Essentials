// 논리 연산자(logical operator)

const a = 1 === 1
const b = 'AB' === 'AB'
const c = true === true

console.log(a, b, c)  // true, true, true, 

console.log('&&: ', a && b && c) // && : and(모두 true여야 true)
console.log('||: ', a || b || c) // || : or(하나 이상만 true면 true)
console.log('!: ', !a)           // ! : not(false면 true, true면 false가 반환)