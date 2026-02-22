function calcularDias() {
    const hoje = new Date();
    const evento = new Date(2026, 5, 26);

    hoje.setHours(0, 0, 0, 0);
    evento.setHours(0, 0, 0, 0);

    const diferenca = evento - hoje;
    const diasRestantes = Math.ceil(diferenca / (1000 * 60 * 60 * 24));

    const contador = document.getElementById("contador");
    contador.textContent = diasRestantes >= 0 ? diasRestantes : 0;
}

calcularDias();