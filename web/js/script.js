function continuarCompra() {
    window.location.href("finalizacaoPagamento.html");
}

function pagamentoCompra() {
    window.location.href("pagamento.html");
}

// Seleciona o elemento com a CLASSE '.container'
const container = document.querySelector(".container")
const registerBtn = document.querySelector(".register-btn")
const loginBtn = document.querySelector(".login-btn")
const toggleLeft = document.querySelector(".toggle-left")
const toggleRight = document.querySelector(".toggle-right")

// 1. Adiciona a classe 'active' ao container ao clicar em "Cadastre-se"
registerBtn.addEventListener("click", () => {
    container.classList.add("active")
    setTimeout(() => {
        toggleLeft.classList.add("display-none")
        toggleRight.classList.remove("display-none")
    }, 1500)
})

// 2. Remove a classe 'active' do container ao clicar em "Login"
loginBtn.addEventListener("click", () => {
    container.classList.remove("active")
    setTimeout(() => {
        toggleLeft.classList.remove("display-none")
        toggleRight.classList.add("display-none")
    }, 1500)
})