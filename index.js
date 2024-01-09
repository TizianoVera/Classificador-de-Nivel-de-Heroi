let nome = prompt("inserte seu nome de heroi");
let nivel = Number(prompt("inserte seu nivel"));

if (nivel <= 1000) {
  alert(`O Herói de nome ${nome} está no nível de Ferro`);
} else if (nivel > 1001 && nivel <= 2000) {
  alert(`O Herói de nome ${nome} está no nível de Bronze`);
} else if (nivel >= 2001 && nivel <= 5000) {
  alert(`O Herói de nome ${nome} está no nível de Prata`);
} else if (nivel >= 5001 && nivel <= 7000) {
  alert(`O Herói de nome ${nome} está no nível de Ouro`);
} else if (nivel >= 7001 && nivel <= 8000) {
  alert(`O Herói de nome ${nome} está no nível de Platina`);
} else if (nivel >= 8001 && nivel <= 9000) {
  alert(`O Herói de nome ${nome} está no nível de Ascendente`);
} else if (nivel >= 9001 && nivel <= 10000) {
  alert(`O Herói de nome ${nome} está no nível de Imortal`);
} else if (nivel >= 10001) {
  alert(`O Herói de nome ${nome} está no nível de Radiente`);
}