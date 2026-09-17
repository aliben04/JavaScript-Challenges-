const prompt = require('prompt-sync')();

// Challenge 1 : Calculatrice de Base

/*

let valeurA=Number(prompt("donne la valeur de A :"));
let valeurb=Number(prompt("donne la valeur de B :"));

let addition=valeurA+valeurb;
let soustraction=valeurA-valeurb;
let multipl=valeurA*valeurb;
let div=valeurA/valeurb;

console.log(`addition : ${addition}
soustraction : ${soustraction}
multipl :${multipl}
div : ${div}
`)

// Challenge 2 : Échange de Valeurs


let a=Number(prompt("la valeur de a : "));
let b=Number(prompt("la valeur de b : "));

let c =a;
a=b;
b=c;

console.log(`les valeurs avant a: ${b} b : ${a} après a: ${a} b : ${b}`)

Challenge 3 : Opérateurs d'Affectation


let number=10;
console.log(`addition ${number+=10}`);
console.log(`soustraction ${number-=10}`);
console.log(`multipl ${number*=10}`);
console.log(`div ${number/=10}`);



Challenge 4 : Comparaisons Strictes
Écrivez un programme JavaScript qui demande deux valeurs et indique si elles sont strictement égales, différentes, ou si l'une est supérieure à l'autre.


let a = Number(prompt("Entrez la première valeur :"));
let b = Number(prompt("Entrez la deuxième valeur :"));

if (a === b) {
    console.log("Les deux valeurs sont strictement égales.");
} else if (a > b) {
    console.log("La première valeur est supérieure à la deuxième.");
} else {
    console.log("La deuxième valeur est supérieure à la première.");
}

// Challenge 5 : Conversion de Secondes
let nbrS = Number(prompt("donnee un nombre de secondes: "));

let heures=Math.floor(nbrS/3600);
let min=(nbrS%3600)/60;
let s=(nbrS%3600)%60

console.log(`${heures}H:${Math.floor(min)}M:${s}S`)


// Challenge 6 : Vérification de Plage


let nbrS = Number(prompt("donnee un nombre de : "));

if(nbrS>10 && nbrS<100){
    console.log(true);
}else{
    console.log(false);
}


// Challenge 7 : Calcul de Réduction
Écrivez un programme JavaScript qui demande un prix et un pourcentage de réduction, puis affiche le montant de la réduction et le prix final.
*/

let prix=Number(prompt("donne un prix : "));
let pourcentage=Number(prompt("donne un pourcentage : "));

let montantR=prix*(pourcentage/100);

console.log(`le montant de la réduction 1000dh et le prix final : ${montantR}`);



