
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