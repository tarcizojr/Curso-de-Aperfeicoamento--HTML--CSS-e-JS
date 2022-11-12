const pessoa ={
    nome:"Tarcizo",
    sobreNome:"Leite",
    idade:21,

    fala(){
        console.log("Ola", this.nome)
    }
}

pessoa.fala()