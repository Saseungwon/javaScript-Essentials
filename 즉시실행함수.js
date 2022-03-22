// 즉시실행함수
// IIFE, Immediately-Invoked Function Expression

// 방법1
const a = 7
function double(){
  console.log(a * 2)
}
double();


// 방법2
(function(){ 
  console.log(a * 2)
})()


// 방법3
(function(){ 
  console.log(a * 2)
}())