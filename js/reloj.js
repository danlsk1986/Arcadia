function relojJS(){

  let reloj = new Date();
  let dia = reloj.getDate();
  let mes = reloj.getMonth()+1;
  let anio = reloj.getFullYear();
  let hora = reloj.getHours();
  let minutos = reloj.getMinutes();
  let segundos = reloj.getSeconds();

  str_segundo = new String(segundos)
  if(str_segundo.length == 1){
    segundos = "0" + segundos
  }

  str_minutos = new String(minutos)
  if(str_minutos.length == 1){
    minutos = "0" + minutos
  }

  str_horas = new String(hora)
  if(str_horas.length == 1){
    hora = "0" + hora
  }


  document.getElementById('dia').innerHTML = dia;
  document.getElementById('mes').innerHTML = mes;
  document.getElementById('anio').innerHTML = anio;
  
  document.getElementById('horas').innerHTML = hora;
  document.getElementById('minutos').innerHTML = minutos;
  document.getElementById('segundos').innerHTML = segundos;

  
  setTimeout('relojJS()',1000)
}