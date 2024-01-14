// let parentElement = document.querySelector('#parentElement')
// let referenceElement = document.querySelector('#referenceElement')

// let paragraph = document.createElement('p');
// let h1 = document.createElement('h1');

// paragraph.textContent = 'this is new paragraph create using dom';
// h1.textContent = 'this is new h1 create using dom';

// parentElement.insertBefore(paragraph,referenceElement);
// paragraph.insertAdjacentElement('beforebegin',h1)




let browserNavigatior = window.navigator;

let userAgent = browserNavigatior.userAgent;
let geolocation = browserNavigatior.geolocation;
let platform = browserNavigatior.platform;
let online = browserNavigatior.online;
let language = browserNavigatior.language;
let cookieEnabled = browserNavigatior.cookieEnabled;

console.table([userAgent,geolocation, platform, online, language, cookieEnabled])

//navigator object geolocation
navigator.geolocation.getCurrentPosition(function(position){
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude
    let altitude = position.coords.altitude
    let accuracy = position.coords.accuracy
    let speed = position.coords.speed

    let geoId = document.getElementById('geoId');
    geoId.innerText = `
    latitude = ${latitude}
    longitude = ${longitude}
    altitude = ${altitude}
    accuracy = ${accuracy}`

})