const cliente = { 
    nome: "Andre",
    idade:36,
    cpf : "98765432154",
    email: "andre@gmail.com"
}

const chaves = ["nome", "idade", "cpf","email"]

chaves.forEach( (info) => console.log(cliente[info]))
