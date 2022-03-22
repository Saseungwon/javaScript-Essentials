// 콜백 (Callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)

function timeout(callback) {
  setTimeout(() => {
    console.log('SSW!')
    callback()        // 실행위치를 보장 시켜준다.
  }, 3000)
}
timeout(() => {
  console.log('Done!')
})     // 콜백함수