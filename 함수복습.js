// 함수 복습


// 기명함수
function sum(x,y) {
  console.log(x + y) 
}
sum(1, 3)  // 4
sum(4, 12) // 16


function sum(x,y) {
  return x + y
}
const a = sum(1, 3)
const b = sum(4, 12)
console.log(a)  // 4
console.log(b)  // 16


// 익명함수 
const sum = function(x,y) {
  return x + y
}


// return(권장)
function sum(x,y) {
  if (x < 2) {
    return
  }
  return x + y
}
console.log(sum(7, 3))


// arguments(인수가 너무 많을 때만 사용)
function sum () {
  console.log(arguments)
  return arguments[0] + arguments[1]
}
console.log(sum(7, 3))