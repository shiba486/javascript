'use strict'

//method call, apply,bind
const book1={
    name:'bangla',
    type:'literature',
    about: function(favour,hero){
        console.log(`i love ${this.name},this is my favourite ${this.type} this is ${favour} .${hero}`)
    }
}
// book1.about();

const book2={
    name:'english',
    type:'Grammer',
}
// book1.about.call(book2,1200,'shhiba')  //call method we can call a object property by call() method
// book1.about.apply(book2,[5,'shib'])  //apply we can call a object property by call() method

book1.about.bind(book2,)