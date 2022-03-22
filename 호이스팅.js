// 호이스팅 (Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const a = 7

// 함수표현 : 함수표현보다 실행을 먼저해서 오류
double()
const double = function () { 
  console.log(a * 2)
}

// 함수선언 : 함수선언은 동작할 수 있는 범위의 가장 최상단으로 가서 호출 가능
double()
function double() { 
  console.log(a * 2)
}