function r(){
    let min = 1;
    let max = 11;

    let r = Math.random() * (max-min) + min;

    return Math.floor(r);
}

let i = r();

// while(i !== 10){
//     console.log(i);


//     i = r();
// }
// console.log(i)

do{
    console.log(i);

    i = r();
}while(i !== 10);
console.log(i);