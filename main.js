alert("programing...");

let nomeUsuário = prompt("Qual seu nome?");
let elemento = document.querySelector("#nome-usuário");

while(nomeUsuário == ""){
    nomeUsuário = prompt("Qual seu nome?");
}

if(nomeUsuário == null){
    elemento.textContent = "Professores";
}else{
    elemento.textContent = nomeUsuário;
}



