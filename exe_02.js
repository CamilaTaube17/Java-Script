/* let dia = 5;
switch(dia){ */

let dia = window.prompt("digite o dia", "em numeros inteiros de 1 a 7")
switch(dia){

case '1':
document.write("Dia da semana = domingo");
break;

case '2':
document.write("Dia da semana = segunda");
break;

case '3':
document.write("Dia da semana = terça");
break;

case '4':
document.write("Dia da semana = quarta");
break;

case '5':
document.write("Dia da semana = quinta");
break;

case '6':
document.write("Dia da semana = sexta");
break;

case '7':
document.write("Dia da semana = sabado");
break;

default :
document.write("Dia da semana fora do intervalo");

}