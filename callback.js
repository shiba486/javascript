/*
scenario
1.userRegister
2.send email
3.login
4.get userdata
5.show userdata
*/
 //when a function use another func as a parameter or return func than it is called higer-order function
 
function userRegister(callback){
    setTimeout(function(){
        console.log('register end');
        callback();
    },5000)
}

function sendEmail(callback){
    setTimeout(function(){
        console.log('send email end');
        callback();
    },4000)
}

function userLogin(callback){
    setTimeout(function(){
        console.log('userLogin end');
        callback();
    },3000)
}

function getData(callback){
    setTimeout(function(){
        console.log('getDAta end');
        callback();
    },2000)
}

function showData(){
    setTimeout(function(){
        console.log('showData end');
    },1000)
}
// callback hell
userRegister(function(){
    sendEmail(function(){
        userLogin(function(){
            getData(function(){
                showData()
            });
           
        })

    });

});


console.log(`hello world`);