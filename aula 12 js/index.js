const hora = 10;
const fome = 10;

if(hora <= 11 && hora >= 0){
    console.log("Bom dia")
    if(fome <= 10){
        console.log("Vamos comer")
    }else if(fome > 5){
        console.log("Vamos brincar")
    }
}else if(hora >= 12 && hora <= 17){
    console.log("Boa tarde")
}else if(hora >= 18 && hora <=23){
    console.log("Boa noite")
}else{
    console.log("Ola")
}