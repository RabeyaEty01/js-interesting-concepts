//function er vitore likhsi je variable gula oigula local scope .oigulare baire theke access kora jayna.
//function er bairer variable gulake global scope bole
//global scope er variable ke local scope e use korte parbo . but local scope er variable ke global scope e use korte parbona.
//let and const ke block scope bole {} ei bracket er moddhe thakbe. eder hoisting hobena.

//var ke global scope bole. eta hoisting hobe.
// kono variable er age jodi let ,const ba var konotai na dei tahole oi variable ta global hoye jay
const favNum = 27;

function add(first, second) {
    //console.log(mood); //hoisting
    const result = first + second;
   if(result>9){
       var mood='happy';
      mood='cranky';
   }
   //console.log(mood);
    return result;
}
const sum = add(11, 35);
//console.log(first);

for(let i=0; i<10; i++){

} 
//console.log(i);