
const register = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('user registered end')
            resolve();
        },2000)
    })
}

const sendEmail = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('email send end')
            resolve();
        },3000)
    })
}

const LogInUser = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('login end')
            resolve ('error is found');
    
        },2000)
    })
 
}

const getUserData = ()=>{
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('gets data end')
            resolve();
    
        },2000)
    })
}


const displayData = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('display data end')
            resolve();
        },2000)
    })

}
/*callback hell
register(()=>{
    sendEmail(()=>{
        LogInUser(()=>{
            getUserData(()=>{
                displayData();
            });         
        })
        
    });
})
*/

// promises 
// register()
//     .then(sendEmail)
//     .then(LogInUser)
//     .then(getUserData)
//     .then(displayData)
//     .catch((error)=>{
//         console.log('404: '+ err);
//     })

   

async function authenticate(){
  try{
   const message = await register();
                    await sendEmail();
                    await LogInUser();
                    await getUserData();
                    await displayData();
                    // console.log(message)
    
  }catch(err){
    console.log(err)
  }
}
authenticate()
// .catch(()=>{
//     console.log('eror is catch')
// })




console.log('other work running');

