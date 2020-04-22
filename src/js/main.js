"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below




const textAreaListener = document.querySelector('.content__textarea--js');

//textAreaListener.addEventListener('keyup', (e)=>{
 //localStorage.setItem('textareaValue', e.target.value);
//});
// if(localStorage.getItem('textareaValue')){
//   textAreaListener.value = localStorage.getItem('textareaValue');
// }
const saveButton = document.querySelector('.content__saveButton--js');
saveButton.addEventListener('click', (e)=>{
    localStorage.setItem('textareaValue', textAreaListener.value);
});

const loadButton = document.querySelector('.content__loadButton--js');
loadButton.addEventListener('mouseenter', (e)=>{
  loadButton.innerHTML = '😁';
});
loadButton.addEventListener('click', (e)=>{
  textAreaListener.value = localStorage.getItem('textareaValue');
});



