// this (상황에 따라 다르게 써야됨)
// 일반 함수는 호출 위치에 따라 this 정의!!
// 화살표 함수는 자신이 선언된 함수 범위에서 this 정의!!

const ssw = {
  name: 'Seungwon',
  normal: function(){ 
    console.log(this.name)    // Seungwon
  }, 
  arrow: () => {
    console.log(this.name)    // undefined
  }
}
ssw.normal()
ssw.arrow()

const amy = {
  name: 'Seungwon',
  normal: ssw.normal, 
  arrow: ssw.arrow
}
amy.normal()  // Amy
amy.arrow()   // undefined


// 예제1

function User(name) {
  this.name = name
}
User.prototype.normal =function(){
  console.log(this.name)    
}
User.prototype.arrow = () => {    // 화살표 함수는 영역 내에서만 this를 정의하기 때문에 undefined
  console.log(this.name)
}

const ssw = new User('SSW')
ssw.normal()  // SSW
ssw.arrow()   // undefined


// 예제2

// 일반함수로 실행
const timer = {
  name: 'Seungwon', 
  timeout: function (){
     setTimeout(function(){
       console.log(this.name)    // undefined : this가 일반함수로 만들어져 있어서 undefined
     }, 2000)
  }
}
timer.timeout()

// 화살표 함수로 실행
const timer = {
  name: 'Seungwon', 
  timeout: function (){
     setTimeout(() =>{
       console.log(this.name)    // Seungwon : 화살표 함수가 만들어진 범위 내에서 this가 정의됨
    }, 2000)
  }
}
timer.timeout()