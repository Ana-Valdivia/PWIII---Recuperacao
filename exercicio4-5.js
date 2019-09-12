//*let  parimpar:number =11
//if(parimpar %2==0)
// {
// console.log('O numero e par')
// }
//else
//{
// console.log('o numero e impar')
//}
var num = 17;
var parImpar = function (num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
};
console.log("" + parImpar(num));
