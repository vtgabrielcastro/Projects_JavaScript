const container = document.querySelector(".container");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeImg = document.querySelector("#qr-code img");

function generateQrCode(){
    const qrCodeInputValue = qrCodeInput.value;
    if(!qrCodeInputValue) return;

    qrCodeBtn.innerText = "Gerando codigo...";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    // container.classList.add("active");
    qrCodeImg.addEventListener("load", ()=>{
        container.classList.add("active");
        qrCodeBtn.innerText = "Código criado!";
    })
}

//gerar pelo botão
qrCodeBtn.addEventListener("click", ()=>{
    generateQrCode()
})
//gerar a partir do enter
qrCodeInput.addEventListener("keydown", (e)=>{
    if(e.code === "Enter"){
        generateQrCode();
    }      
})


// Limpar area do QrCode
qrCodeInput.addEventListener("keyup", ()=>{
    if(!qrCodeInput.value){
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QR Code";
    }
})