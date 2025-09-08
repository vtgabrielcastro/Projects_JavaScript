//Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form")
const numberInput = document.querySelector("#number")
const multiplicatorInput = document.querySelector("#multiplicator")

const title = document.querySelector("#multiplication-title span")

const multiplicationTable = document.querySelector("#multiplication-operations")


//Funções
const createTable = (number, multiplicatorNumber)=> {
    multiplicationTable.innerHTML = ""; // vai deixar o container vazio

    for( let i = 1; i <= multiplicatorNumber; i++){
        const result = number * i;

        const template = ` <div class ="row">
            <div class = "operation"> ${number} x ${i} = </div>
            <div class = "result"> ${result} </div>
        </div>`;

        const parse = new DOMParser();

        const htmlTemplate = parse.parseFromString(template, "text/html"); //cria um documento html, e n apenas a div

        const row = htmlTemplate.querySelector(".row"); //acessa a primeira div.row do documento

        multiplicationTable.appendChild(row) // adiciona a linha da tabuada        
    }
    title.innerText = number;
}

//Eventos
multiplicationForm.addEventListener("submit", (e)=>{
    e.preventDefault(); //impede evento padrão do form (seria recarregar a pag)
    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicatorInput.value;

    if(!multiplicationNumber || !multiplicatorNumber) return;

    createTable(multiplicationNumber, multiplicatorNumber)
});