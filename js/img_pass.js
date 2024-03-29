
function togglePasswordVisibility(inputId, buttonId) {
    // recebe os parâmetros id do campo senha id da imagem 

    let inputPass = document.getElementById(inputId);
    let btnShowPass = document.getElementById(buttonId);

    if (inputPass.type === "password") {
        inputPass.setAttribute("type", "text");
        btnShowPass.classList.replace("bi-eye", "bi-eye-slash");
    } else {
        inputPass.setAttribute("type", "password");
        btnShowPass.classList.replace("bi-eye-slash", "bi-eye");
    }
}

// Adicionar evento de clique a imagem do olho sobre senha. Ao clicar na imagem do olho, ele dispara a função toogle com os parâmetros do id do input e id da imagem
document.getElementById("btn_senha").addEventListener("click", function() {
    togglePasswordVisibility("senha", "btn_senha");
});

// Adicionar evento de clique ao olho de confirmação de senha
document.getElementById("btn_confirm_senha").addEventListener("click", function() {
    togglePasswordVisibility("senha_confirm", "btn_confirm_senha");
});









