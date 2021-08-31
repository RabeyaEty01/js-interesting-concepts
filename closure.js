//kono ekta function er vitore jodi kono ekta function ke use kori ba function ke return kori , ei je function take return kortesi shey jodi outside er kono variable ke jodi access kore taile tar nijossho ekta encapsulation othoba closure othoba private variable declare kore.


function stopWatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}
let clock1=stopWatch();
console.log(clock1());
console.log(clock1());