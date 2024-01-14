
/* without static keyword property work with class object */
/*
class student{
    constructor(val1){
        this.studentId = val1;
    }
    student1(profession){
        // let id = this.studentId;
        console.log(`shibanondo is a ${ profession}. His id is ${this.studentId}`);
    }
}
let students = new student(21);
students.student1('student')

*/

/* with static keyword property work with class */
/*
class student{

   static student1(profession){
        
        console.log(`shibanondo is a ${profession }`);
    }
}
student.student1('student')

*/

class parent{
    hello1(){
        console.log(`this is hello1 function `);
    }
    hello2(){
        console.log(`this is hello2 function `);
    }
}

class child extends parent{
   demo(){
        super.hello1();
        super.hello2();
   }
}

let childObject = new child();
childObject.demo();