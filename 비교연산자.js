// 비교 연산자(comparison operator)

const a = 1 
const b = 1

console.log(a === b)  // === : 일치 연산자(true, false 반환)
console.log(a !== b)  // !== : 불일치 연산자(서로 달라야 true 같으면 false) 
console.log(1 < 1)    // false(수식이 맞아야 true) 
console.log(1 < 2)    // true

function isEqual(x, y) {
  return x === y
}
console.log(isEqual(1, 1))    // true
console.log(isEqual(2, '2'))  // false

