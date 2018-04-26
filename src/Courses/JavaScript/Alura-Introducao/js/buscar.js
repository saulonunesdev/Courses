var botaoBuscar = document.querySelector("#buscar-pacientes");
botaoBuscar.addEventListener("click", function(){

  var xhr = new XMLHttpRequest();
  let baseUrl = "http://api-pacientes.herokuapp.com/pacientes";
  xhr.open("GET",baseUrl);

  xhr.addEventListener("load", function(){
    let errorAjax = document.querySelector("#erro-ajax");

    if(xhr.status == 200) {
      errorAjax.classList.add("invisivel");
      var pacientesListaAjax = JSON.parse(xhr.responseText);
      pacientesListaAjax.forEach(function(paciente){
        AddPacienteTable(paciente);
      });
    }else{
      console.log("Error: ",xhr.status,"-",xhr.responseText);
      errorAjax.classList.remove("invisivel");
    };
  });

  xhr.send();
});
