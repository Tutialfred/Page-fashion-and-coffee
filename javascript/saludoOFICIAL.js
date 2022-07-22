// HEAD
// Trabaja con "saludar cliente.HTML"
// Obligando al usuario colocar algo en el prompt, no puede ir vacio.

let user = ""

while(user === "" || user === null){

     user = prompt("Hello' Tell me your name"); //Deja la opcion al usuario para escribir 
}


if(user.length > 0 && !false){
    alert("Hi " + user) //Hi "tuti"
} 



