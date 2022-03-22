// 타이머함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearInterval(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

  // setTimeout
setTimeout( function() {
  console.log('ssw!')
}, 3000)

  // 화살표 함수로
setTimeout( () => {
  console.log('ssw!')
}, 3000)

const timer = setTimeout( () => {
  console.log('ssw!')
}, 3000)

// clearTimeout
const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearTimeout(timer)
})


// setInterval
const timer = setInterval( () => {
  console.log('ssw!')
}, 3000)

// clearInterval
const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearInterval(timer)
})

