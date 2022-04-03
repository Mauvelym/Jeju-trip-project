const heading = document.createElement('h1');
heading.textContent = 'Hello';

const body = document.querySelector('body');
body.appendChild(heading);

heading.remove()

const headingElement = document.querySelector('h1')
headingElement.textContent = 'Yaro'

const headingElement = document.querySelector('.myClass')
headingElement.style.display = 'none'

const headingElement = document.querySelector('h1')
headingElement.classList.add('yourClass')

const headingElement = document.getElementsByTagName('h1')
const myClassElement = document.getElementsByClassName('myClass')
const myIdElement = document.getElementById('myId')

const headingElement = document.querySelector('h1')
const myClassElement = document.querySelector('.myClass')
const myIdElement = document.querySelector('#myId')

const myBody = document.bodyl

const heading = document.createElement('h1');
heading.textContent = 'Hello' ;
myBody.append(myBody);

const myName = document.createElement('div');
myName.classList.add('myName');
const myNametext = document.createElement('p');
myNameText.textContent = 'my Name is Yaro';
myName.append(myNameText);
myBody.append(myName);


var array = [1, 2, 3, 4];
array.length;