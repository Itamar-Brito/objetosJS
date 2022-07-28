const cliente = { 
    nome: "Andre",
    idade:36,
    cpf : "98765432154",
    email: "andre@gmail.com",
    fones: ['987983347', '987987987']
}

cliente.dependente = {
    nome:"Sara",
    parentesco: "filha",
    nascimento: "20/03/2011"
}


console.log(cliente)

cliente.dependente.nome = "Sara Silva"

console.log(cliente)