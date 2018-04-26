//REMOVE
var formTable = document.querySelector("table");
formTable.addEventListener("dblclick", function(event){
  event.target.parentNode.classList.add("fadeOut");

  setTimeout(function(){
    event.target.parentNode.remove();
  },500);
});

//SEARCH
var campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input", function(){

  pacientesLista = document.querySelectorAll(".paciente");
  
  if(this.value.length > 0){
    for(var i = 0; i < pacientesLista.length; i++){
      paciente.nome    = pacientesLista[i].querySelector(".info-nome").textContent;
      paciente.peso    = pacientesLista[i].querySelector(".info-peso").textContent;
      paciente.altura  = pacientesLista[i].querySelector(".info-altura").textContent;
      paciente.gordura = pacientesLista[i].querySelector(".info-gordura").textContent;

      var expressao = new RegExp(this.value,"i");

      if(!expressao.test(paciente.nome)) {
        pacientesLista[i].classList.add("invisivel");
      }else{
        pacientesLista[i].classList.remove("invisivel");
      };

    };
  }else{

    for(var i = 0; i < pacientesLista.length; i++){
      pacientesLista[i].classList.remove("invisivel");

    };
  };
});

//ADD NEW
var botaoPacienteAdd = document.querySelector("#adicionar-paciente");
botaoPacienteAdd.addEventListener("click", addPacienteForm);

function addPacienteForm(event) {
  event.preventDefault();
  AddPacienteTable(GetDataFromForm())
};

function AddPacienteTable(paciente) {
  let errorMsg = document.querySelector("#mensagem-erro");
  if (!validaPaciente(paciente)) {
    errorMsg.textContent = paciente.imc;
    return;
  } else {
    errorMsg.textContent = "";
  }
  document.querySelector("#tabela-pacientes").appendChild(createTr(paciente));
  document.querySelector("#form-adiciona").reset();
};

function GetDataFromForm() {
  paciente.nome    = document.querySelector("#form-adiciona").nome.value;
  paciente.peso    = document.querySelector("#form-adiciona").peso.value;
  paciente.altura  = document.querySelector("#form-adiciona").altura.value;
  paciente.gordura = document.querySelector("#form-adiciona").gordura.value;
  paciente.imc     = calcularImc(paciente.peso,paciente.altura);
  //
  return paciente;
};

function createTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");
  //
  pacienteTr.appendChild(createTd(paciente.nome,"info-nome"));
  pacienteTr.appendChild(createTd(paciente.peso,"info-peso"));
  pacienteTr.appendChild(createTd(paciente.altura,"info-altura"));
  pacienteTr.appendChild(createTd(paciente.gordura,"info-gordura"));
  pacienteTr.appendChild(createTd(paciente.imc,"info-imc"));
  //
  return pacienteTr;
};

function createTd(dataTd,classNameTd) {
  var componentTd = document.createElement("td");
  componentTd.classList.add(classNameTd);
  componentTd.textContent    = dataTd;
  //
  return componentTd;
};
