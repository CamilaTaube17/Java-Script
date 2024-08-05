let t1 = 1;
let t2 = 1;
document.write("Termo 1 = " + t1 + "<br>");
document.write("Termo 2 = " + t2 + "<br>");
let aureo = t2/t1;
document.write("O n áureo é " + aureo + "<br>")

// Estrutura de repetição FOR
for(let i = 3; i <= 30; i++ ) {
    let novoTermo = t1 + t2;
    aureo = novoTermo/t2;
    document.write("Áureo = " + aureo + "<br>");
    document.write("Termo = " + i + "=" + novoTermo);
    t1 = t2;
    t2 = novoTermo;
}
document.write(" <br> ========== 🤢🫨😈 FIM DE PROGRAMA ============")
/* essa quetão vai cair na prova! */
