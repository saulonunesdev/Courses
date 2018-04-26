var titulo = document.querySelector(".titulo");
titulo.textContent = 'Aparecida Nutricionista';

var paciente = {
    nome    : 'nome',
    peso    : 'peso',
    altura  : 'altura',
    gordura : '%',
    imc     : '0',
    valido  : true
};

let pacientesLista = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientesLista.length; i++ ) {
  paciente.nome    = pacientesLista[i].querySelector(".info-nome").textContent;
  paciente.peso    = pacientesLista[i].querySelector(".info-peso").textContent;
  paciente.altura  = pacientesLista[i].querySelector(".info-altura").textContent;
  paciente.gordura = pacientesLista[i].querySelector(".info-gordura").textContent;

  if (!validaPaciente(paciente)) {
    pacientesLista[i].classList.add("paciente-invalido");
  };

  pacientesLista[i].querySelector(".info-imc").textContent = paciente.imc;
};

function calcularImc(vPeso,vAltura) {
  return (vPeso / Math.pow(vAltura,2)).toFixed(2);
};

function validaPaciente(paciente) {

  if (paciente.peso <= 0 || paciente.altura <= 0) {
    paciente.imc = 'Peso/Altura Inválido!';
    paciente.valido = false;
  } else {
    paciente.valido = true;
    paciente.imc = calcularImc(paciente.peso,paciente.altura);
  };

  return paciente.valido;
}
