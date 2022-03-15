
function chamaConfirmacao (path) {
    if (confirm('Deseja abrir a página?')) {
        window.location.href=path;
    }
}