
const prompt = require('prompt-sync')();
// Challenge 1

/**
 

let nom =prompt("votre nom : ");
let prénom =prompt("votre prenom : ");
let age =Number(prompt("votre age : "));
let sexe =prompt("votre sexe : ");
let email =prompt("votre email : ");

console.log(`**************************\nle nom est ${nom}\nprenom est ${prénom}\nage est : ${age}\nsexe est : ${sexe} email est : ${email}`)

Écrivez un programme qui demande la température en Celsius et la transforme en Kelvin. Formule :
K = C + 273.15


// Challenge 2
let temperature =Number(prompt("température : "));

let k=temperature*273.15;
console.log(k);

// Challenge 3 : Conversion de la distance


let km=Number(prompt("la distance en kilomètres : "));
let yarsd=km*1093.61;

console.log(yarsd);

// Challenge 4 : Conversion de la vitesse




let km_h=Number(prompt("la vitesse en kilomètres par heure (km/h)"))

let m_s=km_h*0.27778;
console.log(`${m_s} (m/s)`);


// Challenge 5 : Affichage Température
let temperature=Number(prompt("la température en Celsius : "));

if(temperature < 0){commit -m "Variables exercice Js"
    console.log("Solide");
}else if(temperature >= 0 && temperature <100){
    console.log("Liquide");
}else{
    console.log("Gaz")
}



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


// Challenge 7 : Moyenne pondérée de trois nombres
Écrivez un programme JavaScript pour calculer la moyenne pondérée de trois nombres donnés par l'utilisateur avec les pondérations suivantes :
1er nombre : pondération 2
2ème nombre : pondération 3
3ème nombre : pondération 5
let valeur1=Number(prompt("la valeur de 1er nombre"));
let valeur2=Number(prompt("la valeur de 2eme nombre"));
let valeur3=Number(prompt("la valeur de 3eme nombre"));
let somme=valeur1+valeur2+valeur3
let moyenne=somme/3;

console.log(`la moyeen est : ${moyenne}`)

Challenge 8 : Calcul de la moyenne géométrique
Écrivez un programme JavaScript pour trouver la moyenne géométrique de trois nombres saisis par l'utilisateur. Formule :
Moyenne géométrique = (a * b * c)^(1/3)


let valeurA=Number(prompt("donne la valeur de A :"));
let valeurb=Number(prompt("donne la valeur de B :"));
let valeurc=Number(prompt("donne la valeur de C :"));


let moyenneGéométrique = (valeurA*valeurb*valeurc)**(1/3)

console.log(`Moyenne géométrique : ${moyenneGéométrique}`)

// Challenge 9 : Calcul de la distance entre deux points dans un espace 3D

let valeurX1=Number(prompt("donne la valeur de X1 :"));
let valeurX2=Number(prompt("donne la valeur de X2 :"));

let valeurY1=Number(prompt("donne la valeur de Y1 :"));
let valeury2=Number(prompt("donne la valeur de Y2 :"));

let valeurZ1=Number(prompt("donne la valeur de Z1 :"));
let valeurZ2=Number(prompt("donne la valeur de Z2 :"));

let distance = Math.sqrt(((valeurX2-valeurX1)**2+(valeury2-valeurY1)**2+(valeurZ2-valeurZ1)**2))

console.log(`la distance entre deux points est : ${distance}`)

// Challenge 10 : Volume d'une sphère


let rayon=Number(prompt("rayon : "));
const p=3.14;

let volume=(4/3)*p*rayon;

console.log(`le volume est : ${volume}`);

//Challenge 11 : Surface d'un rectangle




let longueur=Number(prompt("longueur : "));
let largeur=Number(prompt("largeur : "));

let surface=longueur*largeur;

console.log(`la surface est : ${surface}`);


Challenge 12 : Nombre entier à quatre chiffres en ordre inverse
Écrivez un programme JavaScript pour afficher un nombre entier à quatre chiffres dans l'ordre inverse sans utiliser de boucle. Par exemple, si le nombre entier est 1234, son inverse est 4321.

let number=Number(prompt("number : "));

let number1=number%10;
let number2=Math.floor(number/10)%10;
let number3=Math.floor(number/100)%10;
let number4=Math.floor(number/1000);
let invers=number1*1000 + number2*100+number3*10+number4
console.log(invers)
Challenge 13 : Affichage des valeurs binaire et hexadécimale équivalentes

*/

let nombre = Number(prompt("Entrez un nombre entier :"));
let binaire = nombre.toString(2); 
let hexadecimal = nombre.toString(16); 
console.log(`Binaire : ${binaire}\n Hexadécimal : ${hexadecimal}`); 



