// 비효율적인 방법
    const SSW = {
      firstName : 'Seungwon',
      lastName : 'Sa',
      getFullName : function(){
        return `${this.firstName} ${this.lastName}`
      }
    }
    console.log(SSW)    // {{firstName : 'Seungwon', lastName : 'Sa', getFullName ....}}
    console.log(SSW.getFullName) // Seungwon Sa


    const amy = {
      firstName : 'Amy',
      lastName : 'Clarke',
      getFullName : function (){ 
        return `${this.firstName} ${this.lastName}`
      }
    }
    console.log(amy.getFullName)

    const neo = {
      firstName : 'Neo',
      lastName : 'Smith',
      getFullName : function (){ 
        return `${this.firstName} ${this.lastName}`
      }
    }
    console.log(neo.getFullName)


// 작은 프로젝트면 위에 처럼 다 만드는 것이 상관 없는데 큰 프로젝트면 효율이 떨어짐
    // 기본적인 구조도 똑같고 속성과 메서드 이름도 똑같고 로직도 똑같음 => 메모리 손해


// 효율적으로 만들기
    function User(first, last) {    // 생성자 함수는 관행적으로 파스칼케이스로 작성(맨앞 대문자)
      this.firstName = first
      this.lastName = last
    }
    User.prototype.getFullName = function() {   // 프로토타입 도입으로 메모리에 한 번만 만들어져서 효율적
      return `${this.firstName} ${this.lastName}`
    }

    const ssw = new User('Seungwon', 'Sa')   // 생성자 함수, ssw은 인스턴스
    const amy = new User('Amy', 'Clarke') 
    const neo = new User('Neo', 'Smith') 

    console.log(ssw.getFullName()) // Seungwon Sa
    console.log(amy)
    console.log(neo)