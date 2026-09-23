const prompt=require("prompt-sync")()

let numbers=[10,9,7,13,7,9,4]
/*

let secMax=numbers[0]

// 1Q
let max=numbers[0]
for(let i of numbers){
    if(i>max){
        secMax=max
        max=i
    }else if(i>secMax && max>i){
        secMax=i
    }
}
console.log(`le max dans ${numbers} est : ${max}`)
console.log(`le 2em max dans ${numbers} est : ${secMax}`)



// q3

let cmp=0
let n=Number(prompt("donneun nomber : "))
for(let i=0;i<numbers.length;i++){
    if(numbers[i]===n){
        cmp+=1
    }
}
console.log(`le nomber ${n} est repeaty ${cmp} fois`)

let t1 = [1, 2, 3, 4];
let t2 = [3, 4, 5, 6];

let t3 = [];

for (let i = 0; i < t1.length; i++) {
    t3.push(t1[i]);
}

for (let i = 0; i < t2.length; i++) {

    let existe = false;

    for (let j = 0; j < t3.length; j++) {
        if (t2[i] === t3[j]) {
            existe = true;
        }
    }

    if (existe === false) {
        t3.push(t2[i]);
    }
}

console.log(t3);




let number =[3,5,8,1,7]
let max =number[0]
let min =number[0]

for(let i of number){
    if(i<min){
        min=i
    }
    if(i>max){
        max=i
    }

}

function somme(num){
    let somme=0
    for(let i of number){
    if(i===num){
        continue
    }
    somme+=i

}
    return somme
}


console.log(`min : ${somme(max)}  max : ${somme(min)}`)
*/


let number =[10,2,5,4,7,0,2,1,88]

// for(let i =0 ;i<number.length-1;i++){
//     let minI=i
//     for(let j= i+1;j<number.length-1;j++){
//         if(number[j]<number[minI]){
//             minI=j
//         }
//     }
//     [number[i],number[minI]]=[number[minI],number[i]]
// }




for(let i=0;i<number.length-1;i++){
    let minI=i
    for (let j =i;j<number.length-1;j++){
        if(number[j]<number[minI]){
            minI=j
        }
    }
    [number[i],number[minI]]=[number[minI],number[i]]
}
    console.log(number)