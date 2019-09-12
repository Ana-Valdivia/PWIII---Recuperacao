let largura:number =50;
let comprimento:number =30;

let Area = function(comprimento:number, largura:number):number
{
    return(comprimento * largura)
}

console.log(`area : ${Area(comprimento,largura)}`)