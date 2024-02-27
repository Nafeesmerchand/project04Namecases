"use strict";
let personname = '';
personname = prompt('what is your name?') || ' ';
let lowercase = personname.toLowerCase();
let uppercase = personname.toUpperCase();
let tittlecase = personname.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
if (personname !== null && personname !== '') {
    alert(`Hello ${personname}, would you like to learn some python today?`);
}
else {
    alert('please fill your name !');
}
