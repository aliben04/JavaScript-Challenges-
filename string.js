const prompt=require("prompt-sync")()



// Challenge 1 : Affichage d'une Chaîne
/*

let uName=prompt("Saisi votre nom : ")

console.log(`Vous avez tapé : ${uName}`);

// Challenge 2 : Longueur de la Chaîne

let text=prompt("Saisi votre chaine : ")

let cmp=0
for(let i of text){
    cmp+=1
}
console.log(`La longueur de "${text}" est de ${cmp} caractères.`);

// Challenge 3 : Concaténation de Chaînes

let premierChaine=prompt("saisi la 1er chaine :")
let deuxEmeChaine=prompt("saisi la 2eme chaine :")

let newChaine=`${premierChaine} ${deuxEmeChaine}`

console.log(newChaine)
// Challenge 4 : Comparaison de Chaînes

let premierChaine=prompt("saisi la 1er chaine :")
let deuxEmeChaine=prompt("saisi la 2eme chaine :")
let estEg;
for (let i=0;i<=premierChaine.length;i++){
    if(premierChaine[i]===deuxEmeChaine[i]){
        estEg=true
    }else{
        estEg=false
    break;
}
}

console.log(estEg)
// Challenge 5 : Inversion de Chaîne

let chaine=prompt("saisi une chaine : ")
let inverse=[]

for(let i=0;i<=chaine.length;i++){
    inverse.unshift(chaine[i])
}
console.log(inverse.join(""))

// Challenge 6 : Compte des Occurrences d'un Caractère


let chaine=prompt("saisi une chaine : ")
let caractere=prompt("saisi une Caractère : ")
let cmp=0

for(let i of chaine){
    if(caractere===i){
        cmp+=1
    }
}

console.log(`le nombre de ${caractere} dans ${chaine} est : ${cmp}`)
// Challenge 7 : Conversion en Majuscules

let chaine=prompt("saisi une chaine : ")

let newChaine="";
for(let i of chaine){
    newChaine+=i.toUpperCase()
}

console.log(`${chaine} || ${newChaine}`)

let chaine=prompt("saisi une chaine : ")

let newChaine="";
for(let i of chaine){
    newChaine+=i.toLowerCase()
}

console.log(`${chaine} || ${newChaine}`)

// Challenge 9 : Suppression des Espaces
let chaine=prompt("saisi une chaine : ")

let newChaine="";
for(let i =0;i<chaine.length;i++){
    
if(!(chaine[i]===" ")){
    newChaine+=chaine[i]
}
}
console.log(newChaine)
// b e n e t t o u m i
*/
// let chaine =prompt("saisi une chaine : ")
let sous_chaîne=prompt("saisi une sous-chaîne")
let spliteC=chaine.split(" ")

let est_presente ;

for(let i of spliteC){
    if(i===sous_chaîne){
        est_presente=true
    }else{
        est_presente=false
    }
}
console.log(est_presente)


