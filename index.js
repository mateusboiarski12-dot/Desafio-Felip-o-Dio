let Ojogador = "DKS" 
let Nivel = ""
let ListaDeXp = [1000, 2001, 5001, 7001, 8001, 9001, 10001]

for (let XpColetado of ListaDeXp){

if (XpColetado <= 1000) { Nivel = "Ferro"; }

else if (XpColetado >= 1001 && XpColetado <= 2000) { Nivel = "Bronze"; }

else if (XpColetado >= 2001 && XpColetado <=5000) { Nivel = "Prata";}

else if (XpColetado >= 5001 && XpColetado <= 7000) { Nivel = "Ouro";}

else if (XpColetado >= 7001 && XpColetado <= 8000) { Nivel = "Platina";}

else if (XpColetado >= 8001 && XpColetado <= 9000) { Nivel = "Ascendente";}

else if (XpColetado >= 9001 && XpColetado <= 10000) {Nivel = "Imortal";}

else if (XpColetado >= 10001) { Nivel = "Radiante";}

console.log(" O jogador " + Ojogador + " Esta no Nivel " + Nivel)
}