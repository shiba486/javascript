
const register = (callback)=>{
    setTimeout(()=>{

        console.log('user registered end')
        callback();
    },2000)
}

const sendEmail = (callback)=>{
    setTimeout(()=>{
        console.log('email send end')
        callback();
    },3000)
}

const LogInUser = (callback)=>{
    setTimeout(()=>{
        console.log('login end')
        callback();

    },2000)
}

const getSdata = (callback)=>{
    setTimeout(()=>{
        console.log('gets data end')
        callback();

    },2000)
}


const displayData = ()=>{
    setTimeout(()=>{

        console.log('display data end')
        
    },2000)
}

register(()=>{
    sendEmail(()=>{
        LogInUser(()=>{
            getSdata(()=>{
                displayData();
            });         
        })
        
    });
})

console.log('other work running');

