const infraInput = document.getElementById("infra");
const professoresInput = document.getElementById("professores");
const localizacaoInput = document.getElementById("localizacao");

const infraValor = document.getElementById("infraValor");
const professoresValor = document.getElementById("professoresValor");
const localizacaoValor = document.getElementById("localizacaoValor");

infraInput.addEventListener("input", () => {
    infraValor.textContent = infraInput.value;
});

professoresInput.addEventListener("input", () => {
    professoresValor.textContent = professoresInput.value;
});

localizacaoInput.addEventListener("input", () => {
    localizacaoValor.textContent = localizacaoInput.value;
});