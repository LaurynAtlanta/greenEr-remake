// let watering = document.querySelector('#watering');
// let changeBorder = document.querySelector('#changeborder');

// watering.style.color = 'rgb(19, 60, 6)';


// changeBorder.addEventListener('click', function(){
//     watering.classList.toggle('change');
// })


// watering.addEventListener('mouseenter', ()=>{
//     watering.style.color= 'pink';
// })  


// const list = document.querySelector('.list');
// // create li
// const newEl = document.createElement('li');

// const text = document.createTextNode('This is the Coolest');

// // add li
// const newie = newEl.appendChild(text);

// list.appendChild(newEl);

// // list.removeChild(newEl);


const ulList = document.querySelector('.ullist');
const listInput = document.querySelector('.list-input');
const addListBtn = document.querySelector('.addListBtn');

addListBtn.addEventListener('click', function(){
    //create li out of thin air
    const newthing = document.createElement('li');
    const liContent = document.createTextNode(listInput.value);
    //add the input value inside the li
    newthing.appendChild(liContent);
    //attach the li tp the user list
    ulList.appendChild(newthing);
});
