'use strict';
// //Download Resume 
// let resume  = document.querySelector('.btn-2');
// resume.addEventListener('click' , (e)=>{
//     return e;
// })

//Firing Event on submit button
// let submit = document.getElementById('btn-3');
// submit.addEventListener('click', (event)=>{
//     event.preventDefault(); //Prevent default form submission behaviour
//     // location.reload();
//     //show alert message
//     alert('Form submitted Succesfully ✅');
// })
let submit = document.getElementById('btn-3');
submit.addEventListener('click', (event) => {
    // Show alert message
    alert('Form submitted successfully ✅');
    event.preventDefault(); // Prevent default form submission behavior
    location.reload();    
});
// //Download Resume 
// let resume  = document.querySelector('.btn-2');
// resume.addEventListener('click' , (e)=>{
//     return e;
// })

//Firing Event on submit button
// let submit = document.getElementById('btn-3');
// submit.addEventListener('click', (event)=>{
//     event.preventDefault(); //Prevent default form submission behaviour
//     // location.reload();
//     //show alert message
//     alert('Form submitted Succesfully ✅');
// })