'use strict'


//______________HIGHER ORDER FUNCTION_________________
//Higher-order function are function that take other functions as arguments or return function  as their result 

const interViewQuestion = (CandidateName) => {
    if(CandidateName === 'shibanondo'){
        return function(topic){
            console.log(`Hii ${CandidateName}. what is ${topic}? plz explain us.`);
        }
    }else if(CandidateName === 'arian'){
        return function(topic){
            console.log(`Hii ${CandidateName}. what is ${topic}? plz explain us.`);
        }
    }else if(CandidateName === 'rasel'){
        return function(topic){
            console.log(`Hii ${CandidateName}. what is ${topic}? plz explain us.`);
        }
    }else if(CandidateName === 'arafat'){
        return function(topic){
            console.log(`Hii ${CandidateName}. what is ${topic}? plz explain us.`);
        }
    }
    else{
        return function(){
            console.log('welcome everyone');
        }
    }
}
//two way to call a higher function
//1::
/*
interViewQuestion("shibanondo")('full stack development');
interViewQuestion("rasel")('Ui and graphic design');
interViewQuestion("arafat")('seo');
interViewQuestion("ariyan")('android development');
*/
// 2::
// const can1 = interViewQuestion("shibanondo")
// can1('higher function')

