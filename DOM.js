
//finding elements by DOM
//1.getElementById
// const heading = document.getElementById('heading');
// console.log(heading)

//2. getElementsByTagName
// const heading = document.getElementsByTagName('h1');
// console.log(heading[1]);

//3.getElementsByClassName
// const heading = document.getElementsByClassName('heading');
// console.log(heading)

//4.querySelector
// const heading = document.querySelector('.heading');
// console.log(heading)

// 5.querySelectorAll
// const heading = document.querySelectorAll('#heading');
// console.log(heading);


//Traverse DOM
//__________________

//1.parentNode
    // const heading = document.querySelector('.heading');
    // const parent = heading.parentNode;
    // console.log(parent)

//2.children
    // const parent = document.querySelector('.parent');
    // const children = parent.children;
    // console.log(children)

//3.childNodes
    // const parent = document.querySelector('.parent');
    // const children = parent.childNodes;
    // console.log(children)

// 4.nextElementSibling (property)
    // const heading = document.querySelector('#heading');
    // const bro = heading.nextElementSibling;
    // console.log(bro)

// 5.previousElementSibling (property)
    // const thirdHeader = document.querySelector('.thirdHeader');
    // const bro = thirdHeader.previousElementSibling;
    // console.log(bro);


    //Manipulation
//___________________________

    // const heading = document.querySelector("#heading");
    // heading.innerHTML = 'Coding is awesome';
    // heading.style.color = 'red';
    // heading.style.fontSize = '30px';
    // heading.classList.add('title');
    // heading.classList.remove('heading')

//createElement
    // const heading = document.createElement('h2');
    // const parent = document.querySelector('.parent');
    
    // heading.innerHTML = 'javascript is awesome';
    // parent.appendChild(heading);
    // // parent.appendChild(h3);
    // const h3 = document.createElement('h3');
    // h3.innerHTML= 'i just love js';
    // // heading.insertAdjacentElement('beforebegin',h3)
    // // heading.insertAdjacentElement('afterend',h3)
    // heading.insertAdjacentElement('beforeend',h3)

    // console.log(heading);
    // heading.classList.add('header')


//DOM EVENT

// const BlackButton = document.querySelector('.btn');
// const BlueButton = document.querySelector('#blue-Btn');
// const redButton = document.querySelector('#red-Btn');
// const heading = document.querySelector('#heading');



// BlackButton.addEventListener('click',(event)=>{
//     heading.style.color = "red";
//     console.log(event);
// })
// BlueButton.addEventListener('click',()=>{
//     heading.style.color = "blue";
//     heading.style.fontSize = "60px";
// })
// redButton.addEventListener('click',()=>{
//     heading.style.color = "purple";
// })

