//___________________CLOSURE EXERCISE_____________________
const interViewQuestion = (name)=>{
    return function(topic){
        if(name ==='shiba'){
            console.log(`Hii ${name}. what is ${topic}? plz explain us.`);
        }else if(name ==='nondo'){
            console.log(`Hii ${name}. what is ${topic}? plz explain us.`);
        }else if(name ==='das'){
            console.log(`Hii ${name}. what is ${topic}? plz explain us.`);
        }else if(name ==='faruk'){
            console.log(`Hii ${name}. what is ${topic}? plz explain us.`);
        }else{
            console.log('this is js advance topic for learning!')
        }
    }
}

const candidates1 = interViewQuestion('shiba')
candidates1('react js');
const candidates2 = interViewQuestion('nondo')
candidates2('digital marketing');
const candidates3 = interViewQuestion('das')
candidates3('graphic design');

interViewQuestion('faruk')('penetration testing')