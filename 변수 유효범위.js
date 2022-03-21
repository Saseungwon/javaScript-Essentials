// 변수 유효범위 
// var, let, const

function scope(){
  if(true) {
    const a = 123;    // const, let는 중괄호 내에서만 동작한다. var는 어디서든 사용 가능
    console.log(a)
  }
}