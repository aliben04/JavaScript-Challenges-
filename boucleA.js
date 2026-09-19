const prompt = require('prompt-sync')();
// Challenge 2 : Pyramide d'étoiles
/*

let n=Number(prompt("saisi un nomber"));

for (let i =1 ;i<n;i++){
    console.log(" ".repeat(n-i)+"*".repeat((2*i)-1))
}
//Challenge 3 : Affichage des Nombres Premiers
Écrivez un programme JavaScript qui lit un entier n et affiche tous les nombres premiers de 1 à n. Un nombre est considéré premier s'il est divisible uniquement par 1 et lui-même. 

let n=Number(prompt("saisi un nomber"));

for(let i=1;i<n;i++){
    let premier=true;
    for(let j=2;j<i;j++){
        if(i%j===0){
            premier=false
            break
        }
    }
    if(premier){
        console.log(i)
    }
}
    // Challenge 4 : Inversion d'un Entier

    
    
    let n=Number(prompt("saisi un nomber"));
    let invers=0;
    while(n>0){
        invers=invers*10 + (n%10)
        n=Math.floor(n/10)
    }
    console.log(invers)
    




// Challenge 5 : Somme des N Nombres

let n=Number(prompt("saisi un nomber"));
let somme=0
for (let i =0;i<=n;i++){
    somme+=i
}
console.log(somme)


// Challenge 6 : Facteurs d'un Nombre

// let n=Number(prompt("saisi un nomber"));
// let div=""
// for (let i =0;i<=n;i++){
//     if(n%i===0){
//         div+=`${i} `
//     }
// }

Écrivez un programme JavaScript qui calcule la puissance d'un nombre en utilisant une boucle while. Le programme doit demander la base (positive) et l'exposant (non négatif) et afficher la valeur résultante.

*/

let base = Number(prompt("Saisir la base :"));
let exposant = Number(prompt("Saisir l'exposant :"));

let resultat = 1;
let i = 0;

while (i < exposant) {
    resultat = resultat * base;
    i++;
}

console.log("Résultat :", resultat);





