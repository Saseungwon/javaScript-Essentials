// 화살표 함수 
// () => {}  vs  function (){}

  // 1. 기본
const double = function (x) { 
  return x * 21
}
console.log(double(7))

  // 2. 화살표 함수 
const doubleArrow = (x) => { 
  return x * 2
} 
console.log(doubleArrow(7))

  // 화살표 함수 축약형
const doubleArrow = (x) => x * 2

  // 화살표 함수 객체데이터 만드는 법(소괄호로 감싸기)
const doubleArrow = x => ({ 
  name: 'SSW'
})
