const prompt=require("prompt-sync")()

let x=Number(prompt("donne un number :"))
let y=Number(prompt("donne un number :"))


const dic={x:x,y:y}

console.log(dic)
let c =dic.y
dic.y=dic.x
dic.x=c

console.log(dic)