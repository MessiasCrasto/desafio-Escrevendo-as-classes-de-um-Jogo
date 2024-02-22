class Hero {
    constructor(nome,idade,tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
    }
    especialidade() {
        let ataque=""
    if (this.tipo == "mago"){
    ataque = "magia"
    }else if (this.tipo == "guerreiro"){
    ataque = "espada"
    }else if (this.tipo == "monge"){
    ataque = "artes marciais"
    }else if (this.tipo == "ninja"){
    ataque = "shuriken"
    }
    return ataque
    }
    atacar() {
    console.log(`o ${this.tipo} atacou usando ${this.especialidade()}`)
    return
    }
}

let novoHero = new Hero("Jiraya",32,"ninja")
novoHero.atacar()