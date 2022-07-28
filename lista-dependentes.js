const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '98765432154',
    email: 'andre@gmail.com',
    fones: [ '987983347', '987987987' ],
    dependentes: [{
         nome: 'Sara Silva',
         parentesco: 'filha',
         nascimento: '20/03/2011'
        },
        ]
  }

cliente.dependentes.push({
    nome: 'Samia Maria',
    parentesco: 'filha',
    nascimento: '04/01/2014'
})

console.log(cliente)


const filhaMaisNova = cliente.dependentes.filter( dependente => dependente.nascimento === "04/01/2014" )

console.log(`a filha mais nova é a ${filhaMaisNova[0].nome}`)