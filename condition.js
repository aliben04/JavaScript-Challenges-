
const prompt = require('prompt-sync')();

// Challenge 1 : Paire ou Impaire
/*
let number=Number(prompt("donne un nomber : "));

if(number%2==0){
    console.log("le nomber est paire ")
}else{
    console.log("lo nomber inpair")
}
// Challenge 2 : Voyelle ou Non
let caracter=prompt("saisi caractère  : ");

switch(caracter){
    case "e": console.log(true);break;
    case "a": console.log(true);break;
    case "y": console.log(true);break;
    case "u": console.log(true);break;
    case "i": console.log(true);break;
    case "o": console.log(true);break;
    default : console.log(false)
    
}
Challenge 4 : Equation du Deuxième Degré

let a = Number(prompt("Entrez a :"));
let b = Number(prompt("Entrez b :"));
let c = Number(prompt("Entrez c :"));
let leta=b**2-4*a*c;
if (leta > 0) {
     let x1 = (-b - Math.sqrt(leta)) / (2 * a); 
     let x2 = (-b + Math.sqrt(leta)) / (2 * a); 
     console.log("Deux solutions :"); 
     console.log("x1 = " + x1); console.log("x2 = " + x2); 
} else if (leta === 0) {
     let x = -b / (2 * a); 
     console.log("Une seule solution :"); 
     console.log("x = " + x);
} else { 
    console.log("Aucune solution réelle."); 
}


Challenge 5 : Conversion d'Année
let anne=Number(prompt("Entrez un annee :"));
let mois;
let jours;
let heures
let minutes;
let secondes;

if(anne>0){
    mois=Math.floor(365*anne/30);
    jours=anne*365;
    heures=jours*24;
    minutes=heures*60
    secondes=minutes*60
    
}
console.log(`Mois : ${mois}
Jours : ${jours}
Heures : ${heures}
Minutes : ${minutes}
Secondes : ${secondes}`)

// Challenge 7 : Alphabet Majuscule


let caractere = prompt("Entrez un caractère :");

let ascii = caractere.charCodeAt(0);

if (ascii >= 65 && ascii <= 90) {
    console.log("C'est une lettre majuscule.");
} else {
    console.log("Ce n'est pas une lettre majuscule.");
}
// Challenge 10 : Formatage de la Date
let jour = Number(prompt("Entrez le jour :"));
let mois =Number(prompt("Entrez le mois :")) ; 
let nomMois;

let annee=Number(prompt("Entrez l'annne :"));

switch (mois) {
    case 1:
        nomMois = "Janvier";
        break;
        case 2:
            nomMois = "Février";
            break;
    case 3:
        nomMois = "Mars";
        break;
        case 4:
            nomMois = "Avril";
            break;
            case 5:
            nomMois = "Mai";
            break;
    case 6:
                nomMois = "Juin";
                break;
    case 7:
                    nomMois = "Juillet";
                    break;
    case 8:
                        nomMois = "Août";
                        break;
    case 9:
                            nomMois = "Septembre";
                            break;
    case 10:
                                nomMois = "Octobre";
                                break;
    case 11:
                                    nomMois = "Novembre";
                                    break;
    case 12:
        nomMois = "Décembre";
        break;
}
console.log(jour + "-" + nomMois + "-" + annee);
        

// Challenge 12 : Comparaison d'Instants
*/    

let instant1 = prompt("Entrez le premier instant (HH:MM:SS) :");
let instant2 = prompt("Entrez le deuxième instant (HH:MM:SS) :");

let p1 = instant1.split(":");
let p2 = instant2.split(":");

let heures1 = Number(p1[0]);
let minutes1 = Number(p1[1]);
let secondes1 = Number(p1[2]);

let heures2 = Number(p2[0]);
let minutes2 = Number(p2[1]);
let secondes2 = Number(p2[2]);

let total1 = heures1 * 3600 + minutes1 * 60 + secondes1;
let total2 = heures2 * 3600 + minutes2 * 60 + secondes2;

if (total1 < total2) {
    console.log("Le premier instant vient avant le deuxième.");
} else if (total2 < total1) {
    console.log("Le deuxième instant vient avant le premier.");
} else {
    console.log("Il s'agit du même instant.");
}

