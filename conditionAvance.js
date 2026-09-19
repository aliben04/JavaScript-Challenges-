
const prompt = require('prompt-sync')();
/*
// Challenge 1 : Évaluation d'un Prêt

let revenu = parseFloat(prompt("Quel est votre revenu annuel ?"));
let score = parseInt(prompt("Quel est votre score de crédit (sur 1000) ?"));
let duree = parseInt(prompt("Quelle est la durée du prêt (en années) ?"));

if (revenu >= 30000 && score >= 700 && duree <= 10) {
    console.log("Statut : Éligible");
} 
else if (revenu >= 30000 && score >= 650 && duree <= 15) {
    console.log("Statut : Éligible avec conditions");
} 
else {
    
    console.log("Statut : Non éligible");
}
// Challenge 3 : Gestion des Congés
let nbrJrsAccor=Number(prompt("Nombre total de jours de congés accordés :"));
let jours_utilisés=Number(prompt("Nombre de jours de congés utilisés : "));
let status=Number(prompt(`Statut de l'employé (0 pour temps partiel, 1 pour temps plein) : `));
let jours_restants;
if(nbrJrsAccor<jours_utilisés){
    console.log(`les jours utilisés dépassent les jours accordés !`)
}

if(status === 1){
    jours_restants=nbrJrsAccor-jours_utilisés;
    console.log(jours_restants)
}else if(status===0){
    jours_restants=(nbrJrsAccor/2)-jours_utilisés;
    console.log(jours_restants)
}else{
    console.log("somthing wrong with status ! ")
}
// Challenge 4 : Évaluation de Performance d'Employé

let score = Number(prompt("Entrez le score de performance :"));
let anciennete = Number(prompt("Entrez l'ancienneté en années :"));
let recompenses = Number(prompt("Entrez le nombre de récompenses :"));

let evaluation;
let bonus = 0;

if (score >= 90 && anciennete >= 5) {
    evaluation = "Excellente";
} else if (score >= 75 && anciennete >= 3) {
    evaluation = "Bonne";
} else if (score >= 50 && anciennete < 3) {
    evaluation = "Satisfaisante";
} else {
    evaluation = "Insuffisante";
}

if (recompenses === 1) {
    bonus = 10;
} else if (recompenses >= 2) {
    bonus = 20;
}

console.log(`Évaluation : ${evaluation} `) ;
console.log(` Bonus : ${bonus} %`);


*/

let age = Number(prompt("Entrez votre âge :"));
let cotisation = Number(prompt("Entrez les années de cotisation :"));
let epargne = Number(prompt("Entrez le montant total épargné :"));

let plan;
let bonus = 0;


if (age >= 65 && cotisation >= 30 && epargne >= 100000) {
    plan = "Plan complet avec pension élevée";
} else if (age >= 65 && cotisation >= 20 && epargne >= 50000) {
    plan = "Plan partiel avec pension moyenne";
} else if (age < 65) {
    plan = "Plan épargne non encore disponible";
} else {
    plan = "Conditions non remplies";
}

if (epargne > 50000) {
    let tranches = Math.floor((epargne - 50000) / 10000);
    bonus = tranches * 5;
}

console.log("Plan : " + plan);
console.log("Bonus : " + bonus + "%");
