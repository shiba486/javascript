const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("hello this is promise 1!");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("successfull");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async 2 consumed");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ name: "shiba", id: 123, lang: "js", promise: "promise3" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "shiba", id: "123", promise: "promise4" });
    } else {
      reject("Error: Code is is not Working!");
    }
  }, 1000);
});

promiseFour
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("promise is either resolve or rejected!");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "js user", id: "123", promise: "promise5" });
    } else {
      reject("Error: javascript is is not Working!");
    }
  }, 1000);
});

async function consumeFivePromise() {
  try {
    let response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumeFivePromise();

/*
async function getAllUser(){
    try {
        const url = "https://jsonplaceholder.typicode.com/albums/1/photos";
        const response = await fetch(url);
     const data = await response.json();
     console.log(data);
    } catch (error) {
        console.log("E", error);
    }
}
getAllUser();
*/
/*
const URL = fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
URL.then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
})
*/
//get data from api//
/*
 const url = fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
 url.then((response)=>{
    return response.json();
 }).then((data)=>{
    console.log(data);
 }).catch((error)=>{
    console.log(error);
 })
*/
async function getData() {
  try {
    const url = "https://jsonplaceholder.typicode.com/albums/1/photos";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData();
