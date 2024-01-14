class myClass {
  myfunction1(name) {
    console.log(name);
  }
  myfunction2(name) {
    console.log(name);
  }
  myfunction3(name) {
    console.log(name);
  }

  students = {
    class: "12",
    age: 20,
    student1: {
      studen1_name: "ariyan",
      studen1_class: "12",
      student1_age: 20,
      student1_location: {
        studen1_localAddress: "Savar Radio Colony",
        studen1_permanentAddress: "Mymensingh,Chorpara Mur"
      },
    },
    student2: {
      studen2_name: "ariyan",
      studen2_class: "12",
      student2_age: 20,
      student2_location: {
        studen2_localAddress: "uttora-9, road number 11, house no-05",
        studen2_permanentAddress: "Netrokona, kalibariRoad,"
      },
    },
  };
}

// let classObject = new myClass;
let classObject = new myClass();
// classObject.myfunction1("shiba");
// classObject.myfunction2("nondo");
// classObject.myfunction3("das");
let stduentInfos = classObject?.students?.student2?.student2_location?.studen2_localAddress;
// console.log(stduentInfos);


class class1{
    constructor(val1,val2){     //parameterized constructor
        console.log(`hello i am constractor ${val1 + val2}`)
        this.firstNumber = val1;
        this.secondNumber = val2;
    }
    add(){
        let result = this.firstNumber + this.secondNumber;
        console.log(result);
    }
}
let classOne = new class1(10,20);
classOne.add();