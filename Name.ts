let personname :string = '';

personname = prompt('what is your name?') || ' ';

let lowercase :string = personname.toLowerCase() ;
let uppercase :string = personname.toUpperCase() ;
let tittlecase :string = personname.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ') ;

if(personname !== null && personname !== ''){
    alert(`Hello ${personname}, would you like to learn some python today?` )
}
 
else{
    alert('please fill your name !')
}
