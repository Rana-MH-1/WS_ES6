// ES5
//1
function sum(a,b){
    return a+b
}

//2
const sum = function (a,b){
    return a+b
}

//ES6 ==> ARROW FUNCTION
const sum = (a,b)=> {
    return a+b
}
sum(2,6)
// 1 seule instruction => On peut enlever {return}
const sum = (a,b)=> a+b
//1 seul paramètre ==> on peut enlever les ()
const affichage = a => a
console.log(affichage('this is a ws of ES6'))


