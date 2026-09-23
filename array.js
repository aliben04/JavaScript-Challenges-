const prompt = require('prompt-sync')();

/*

// Challenge 3 : Somme des Éléments
let table=[1,2,3,4,5,6]
let somme=0;
for(let i of table){
    somme+=i
}
console.log(somme)

// Challenge 4 : Trouver le Maximum

let table=[1,2,3,4,5,6]
let max=table[0]
for(let i of table){
    if(i>max){
        max=i
    }
}
console.log(max )

// Challenge 5 : Trouver le Minimum

let table=[1,2,3,4,5,6]
let min=table[0]
for(let i of table){
    if(i<min){
        min=i
    }
}
console.log(min )

Challenge 6 : Multiplication des Éléments
let n=Number(prompt("Saisir le nombre d'éléments :"))

let lisst=[]

for (let i = 0;i<n;i++){
    let number=Number(prompt("donne un number :"))
    lisst.push(number)
}
let f=Number(prompt("donne un number f :"))
for(let i = 0;i<n;i++){
    lisst[i]*=f
}
console.log(lisst)

//Challenge 7 : Tableau en Ordre Croissant


let n=Number(prompt("Saisir le nombre d'éléments :"))

let lisst=[]

for (let i = 0;i<n;i++){
    let number=Number(prompt(`donne un number ${i+1} :`))
    lisst.push(number)
}
console.log(lisst)
for(let i =0;i<n;i++){
    for(let j =0;j<n;j++){
        if(lisst[j]>lisst[j+1]){
            [lisst[j],lisst[j+1]]=[lisst[j+1],lisst[j]]
        }
    }
}
console.log(lisst)

// Challenge 9 : Inversion d'un Tableau
// Écrivez un programme JavaScript qui inverse les éléments d'un tableau d'entiers. Par exemple, si le tableau est [1, 2, 3, 4, 5], il doit devenir [5, 4, 3, 2, 1]. Affichez le tableau inversé.



let n=Number(prompt("Saisir le nombre d'éléments :"))

let lisst=[]

for (let i = 0;i<n;i++){
    let number=Number(prompt(`donne un number ${i+1} :`))
    lisst.push(number)
}
for (let i = 0;i<n;i++){
    for (let j = 0;j<n;j++){
        if(lisst[j]<lisst[j+1]){
            [lisst[j],lisst[j+1]]=[lisst[j+1],lisst[j]]
        }
    }
}
console.log(lisst)

// Challenge 10 : Rechercher un Élémen

let n=Number(prompt("Saisir le nombre d'éléments :"))

let lisst=[]

for (let i = 0;i<n;i++){
    let number=Number(prompt(`donne un number ${i+1} :`))
    lisst.push(number)
}
let nbrRech=Number(prompt("Saisir le numiro pour rechercher :"))
let inList=false
for (let i = 0;i<n;i++){
    if(lisst[i]===nbrRech){
        inList=true
    }
}

console.log(inList);
// Challenge 11 : Remplacer un Élément
let n=Number(prompt("Saisir le nombre d'éléments :"))

let lisst=[]

for (let i = 0;i<n;i++){
    let number=Number(prompt(`donne un number ${i+1} :`))
    lisst.push(number)
}
let nbrRempl=Number(prompt("Saisir le numiro pour remplacer :"))
let nouvel=Number(prompt("nouvelle number :"))
for (let i = 0;i<n;i++){
    if(lisst[i]===nbrRempl){
        lisst[i]=nouvel
    }
}
console.log(lisst)
let max=lisst[0]
let min=lisst[0]

for (let i = 0;i<n;i++){
    if(lisst[i]<min){
        min=lisst[i]
    }
}
for (let i = 0;i<n;i++){
    if(lisst[i]>max){
        max=lisst[i]
    }
}
console.log(`max : ${max} || min : ${min}`)

// Challenge 14 : Calculer la Moyenne

let n=Number(prompt("Saisir le nombre d'éléments :"))

let lisst=[]

for (let i = 0;i<n;i++){
    let number=Number(prompt(`donne un number ${i+1} :`))
    lisst.push(number)
}
let somme =0
for (let i = 0;i<n;i++){
    somme+=lisst[i]
}
console.log(`la moyenne est : ${somme/lisst.length}`)
// Challenge 15 : Fusion de Deux Tableaux
Écrivez un programme JavaScript qui fusionne deux tableaux d'entiers en un seul tableau. Le programme doit demander à l'utilisateur le nombre d'éléments pour chaque tableau, puis les éléments des deux tableaux, et afficher le tableau fusionné.
*/
// for (let i =10;i>=1;i--){
//     console.log(" ".repeat(10-i)+"*".repeat((i*2)-1))
// }

// for(let i=10;i>=1;i--){
//     console.log(" ".repeat(10-i)+"*"+" ".repeat(i*2)+"*")
// }


let n =Number(prompt("saisi un nomber :"));

for(let i=n;i>=1;i--){

  console.log(" ".repeat(n-i)+"*".repeat(2*i-1))

}

for(let i=n;i>=1;i--){

  console.log(" ".repeat(n-i)+"*"+" ".repeat(i*2)+"*")

}
