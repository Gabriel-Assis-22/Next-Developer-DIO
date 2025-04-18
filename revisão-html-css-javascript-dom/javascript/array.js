const aluno = [
    {
        nome: 'Vitor',
        idade: 66,
    },
    {
        nome: 'Gabriel',
        idade: 18,
    },
    {
        nome: 'Eric',
        idade: 17,
    },
];

// aluno.push({
//     nome: 'José',
//     idade: 17,
// },)


// console.log(aluno[2].idade);

const alunosfiltraedos = aluno.filter((aluno) => aluno.idade <= 18);
console.log(alunosfiltraedos);

const alunoGabriel = aluno.find((aluno) => aluno.nome === 'Gabriel');
console.log(alunoGabriel);

const alunoGabrielIndex = aluno.findIndex((aluno) => aluno.nome === 'Gabriel');
console.log(alunoGabrielIndex);

const idadesSomadas = aluno.reduce ((acc, aluno)=>{
    return acc + aluno.idade;
},0);

console.log(idadesSomadas); 

const menorDeIdade = aluno.some((aluno) => aluno.idade < 18);
const naoAposentado = aluno.every((aluno) => aluno.idade < 65);

console.log(menorDeIdade);
console.log(naoAposentado);