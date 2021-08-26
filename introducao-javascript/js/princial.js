
var titulo = document.querySelector("h1");
titulo.textContent = "Nutrição";
var titulo = document.querySelector("h2");
titulo.textContent = "Meus Clientes";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length ; i++){

    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if(peso <= 0 || peso >= 1000){
        console.log("Peso Inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura >= 3.00){
        console.log("altura inválida!");
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
    }

    if(alturaEhValida && pesoEhValido){
    var imc = peso / ( altura * altura);
    tdImc.textContent = imc.toFixed(2);
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

});