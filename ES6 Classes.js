// ES6 Classes

const ssw = {
  name: 'Seungwon',
  normal(){               // normal: function(){   축약할 수 있음
    console.log(this.name)
  }, 
  arrow: () => {
    console.log(this.name)
  }
}
ssw.normal()
ssw.arrow()


// class로 작성하기

class User {
  constructor(first, last){
    this.firstName = first
    this.lastName = last
  }
  getFullName(){
    return `${this.firstName} ${this.lastName}`
  }
}


// function User(first, last) {    
//   this.firstName = first
//   this.lastName = last
// }
// User.prototype.getFullName = function() {   
//   return `${this.firstName} ${this.lastName}`
// }