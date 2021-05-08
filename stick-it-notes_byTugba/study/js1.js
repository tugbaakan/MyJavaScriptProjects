//write hello world
var txt = "Hello World";
console.log(txt);

//function or block scoped
//variables
/*var tugba = "Lion Roars"
console.log(tugba)

for (var i=0; i < 5;i++ )
{
    console.log(i);
}

console.log(i); */

//let 
/*for (let i=0; i < 5;i++ )
{
    console.log(i);
}
// throws error
console.log(i); */

//const
// throws error
/*for (const i=0; i < 5;i++ )
{
    console.log(i);
}*/

/*"use strict"
var Den = "Hello all"
console.log(Den)

"hoist"
Den = "Hello all"
console.log(Den) */

//for in
var object = {'yiyecek': 'elma', 'giyecek': 'hırka'}
for (let item in object)
{
    console.log(item);
}

for (let item in object)
{
    console.log(object[item]);
}

//for of
for(let item of [0, 5, 6])
{
    console.log(item);
}

// do-while loop
var y = 5
factorial = 1
do{
    factorial *= y
    y--
}while(y>=1)

console.log(factorial)

// continue - o iteration'da bir şey yapmadan geçmesini sağlar

// functions
function returnsquare (x= 2){
    return x*x
}

console.log(returnsquare());
console.log(returnsquare(5));

// rest operator ...params

function * myGenerator(){
    console.log("Hey ", yield)
    console.log("Are you ", yield)
}
let gen = myGenerator();

gen.next();
gen.next("Tarun");
gen.next("shiv");