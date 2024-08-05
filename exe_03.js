/* document.write('Tabuada do 7 <br>');  */

let num = window.prompt("Digite a Tabuada que quer", "digite um número inteiro");
            
document.write("Tabuada do" + num + "<br>");
for(cont = 1; cont <= 10; cont++) {
    document.write( num + "x" + cont + " = "  );
    document.write( num*cont + "<br>");
}

document.write("======FIM DE PROGRAMA=====");