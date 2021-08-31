function welcomMessage(name,greetHandler){
    //console.log(greetHandler);
    greetHandler(name);
}
//const names=['Tom Hanks','tom brady', 'tom cruise'];
//const myObj={name: 'tom chinku', age:13};

function greetMorning(name){
    console.log('Good morning',name);

}

function greetAftarnoon(name){
    console.log('Good aftarnoon',name);

}

function greetEvening(name){
    console.log('Good evening',name);

}
welcomMessage('tom cruise', greetMorning);
welcomMessage('Mitu', greetAftarnoon);
welcomMessage('ety', greetEvening);


//kono ekta function er parameter hishebe jodi kono ekta function ke pathano hoy and vitor theke call kora hoy etai callback function bole