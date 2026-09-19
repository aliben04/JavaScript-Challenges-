const prompt = require('prompt-sync')();

/*

let number =Number(prompt("saisi un nomber :"));


for (let i=1;i<11;i++){
    console.log(`${number} x ${i} = ${i*number}`);
}
// Challenge 2 : Factorielle d'un Nombre
let number =Number(prompt("saisi un nomber :"));
let facto=1;
for(let i=1;i<number+1;i++){
    facto*=i
}
console.log(facto)

// Challenge 3 : Somme des N Nombres

let number =Number(prompt("saisi un nomber :"));
let somme=0;
for(let i=1;i<number+1;i++){
    somme+=i
}
console.log(somme);

// Challenge 4 : Affichage des N Premiers Nombres Impairs



let number =Number(prompt("saisi un nomber :"));

for(let i=0;i<number+1;i++){
    if(i%2!=0){
        console.log(i)
        
    }
    
}

// Challenge 5 : Calcul de la Puissance
let base = Number(prompt("Entrez la base :")); 
let exposant = Number(prompt("Entrez l'exposant :"));
let p=1
for(let i=1;i<=exposant;i++){
    p=p*base
    
}
console.log(p)


// Challenge 6 : Affichage des N Premiers Nombres Pair
let number =Number(prompt("saisi un nomber :"));

for(let i=0;i<number+1;i++){
    if(i%2==0){
        console.log(i)
        
    }
    
}
//Challenge 7 : Inversion d'un Entier
Écrivez un programme JavaScript qui lit un entier à plusieurs chiffres et l'affiche en ordre inverse sans utiliser de tableaux. Par exemple, si l'entrée est 12345, affichez 54321. 

let number =Number(prompt("saisi un entier : "));

let invers=0;
while(number>0){
    invers=invers*10 +(number%10);
    number=Math.floor(number/10);
}

console.log(invers);
// Challenge 8 : Affichage de la Suite de Fibonacci
Écrivez un programme JavaScript qui génère les n premiers termes de la suite de Fibonacci, où n est entré par l’utilisateur. La suite de Fibonacci est définie comme suit : F(0) = 0, F(1) = 1, et F(n) = F(n-1) + F(n-2).

// Challenge 9 : Compteur de Chiffres
Écrivez un programme JavaScript qui demande à l’utilisateur un entier positif et compte le nombre de chiffres dans cet entier. Par exemple, pour n = 12345, affichez : Nombre de chiffres = 5.
*/

let number =Number(prompt("saisi un entier : "));

let invers=0;
let cmp=0
while(number>0){
    invers=invers*10 +(number%10);
    number=Math.floor(number/10);
    cmp++
}
console.log(cmp)
