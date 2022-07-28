const cliente = { 
    nome: "Andre",
    idade:36,
    cpf : "98765432154",
    email: "andre@gmail.com",
    fones: ['987983347', '987987987']
}

cliente.fones.forEach(element => {
    console.log(element)
});