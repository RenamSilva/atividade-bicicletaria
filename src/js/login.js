
function fazerLogin() {
    const emailInput = document.getElementById("email");
    const senhaInput = document.getElementById("senha");
    const msgLogin = document.getElementById("msgLogin");

    const email = emailInput.value.trim();
    const senha = senhaInput.value.trim();

    if (email === "" || senha === "") {
        msgLogin.style.display = "block";
        msgLogin.textContent = "Preencha usuário/e-mail e senha para continuar.";
        return;
    }

    // Login simulado, sem autenticação real
    window.location.href = "dashboard.html";
}
