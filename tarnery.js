// tarnery>== three parts//
//const age = 20 ;

// normal if else -----------------
// if(age>18){
//     console.log('tor biar boyos hoice')
// }
// else{
//     console.log('jao baccha gumai thako')
// }

//simple tarnary--------------------
//age>=18 ? console.log('vote dio') : console.log('gumai thako')//
let price = 500 ;
const isLeader = false ;
 
if(isLeader===true){
    price = 0
}
else{
    price = price + 100 ;
}
console.log(price)

// tarnery
price = isLeader === true ? 0 :price + 100;