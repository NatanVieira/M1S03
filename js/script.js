
function chamaConfirmacao (path) {
    if (confirm('Deseja abrir a página?')) {
        window.location.href=path;
    }
}

let mostraNome = () => {
    var nome;
    nome = prompt("Digite seu nome: ");
    alert(nome);

}

let mostraNomeIdadeEsporte = () => {
    var nome;
    var idade;
    var esporte;
    nome = prompt("Digite seu nome: ");
    idade = Number(prompt("Digite sua idade: "));
    esporte = confirm("Gosta de esportes?");

    console.log("nome: ", nome, " idade: ", idade, " gosta de esportes? ", esporte ? "Sim" : "Não");
}

let mostraNomeSobrenome = () => {
    var nome;
    var sobrenome;
    nome = prompt("Digite seu nome: ");
    sobrenome = prompt("Digite seu sobrenome: ");
    alert(nome + " " + sobrenome);
}

let mostraSobrenomeTamanho = () => {
    var sobrenome;
    sobrenome = prompt("Digite seu sobrenome (o último): ");
    alert("Olá, " + sobrenome + ". Seu sobrenome contém " 
          + sobrenome.length + "letras");
}

let mostraIdadeBaseadaEmAnos = () => {
    var anoNascimento;
    var anoAtual;
    var idade;
    anoNascimento = prompt("Digite o ano de seu nascimento: ");
    anoAtual = prompt("Digite o ano atual: ");
    idade = anoAtual - anoNascimento
    alert("Sua idade é " + idade + " ou " + (idade - 1));
}