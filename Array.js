const ages = [1,85,16,79,3,20,45,29,6]
//ES5
for (let i = 0; i < ages.length; i++) {
    ages[i]
}

//ES6
//const affichage= ages.forEach((el,i)=> console.log(i))
//console.log(affichage) 
// forEach ==> we use it when we have a treatment ==> return undefined

const affichage2 = ages.map(el=> el*2)
console.log(affichage2)
console.log(ages) // output : 
//affichage [ 2, 170, 32, 158, 6, 40, 90, 58, 12 ]
//ages [ 1, 85, 16, 79, 3, 20, 45, 29, 6 ]

// map create a copy of array and don't immutate the origin

//ES5
for (let i =0;i<ages.length;i++){
    if(i%2 == 0){
         //console.log(ages[i])
    }
}

//ES6
const pairedIndex = ages.map((el,i)=>{
    if (i%2==0){
       // console.log(el)
    }
})

//filter
const filteredwithPairedInd = ages.filter((el,i)=> i%2==0)
console.log(filteredwithPairedInd)
//output : [ 1, 16, 3, 45, 6 ]
//filter method cretae a copy of the array

//sort array sort()
console.log(ages.sort()) //output : [ 1, 1000, 16, 20, 2350, 29, 3, 6, 85 ]
console.log(ages.sort((a,b)=> a-b)) //tri ascendant
console.log(ages.sort((a,b)=> b-a)) //tri descendant

//Sum using reduce()
console.log(ages.reduce((acc,val)=> acc+ val))
//ouput : 284

// retour boolean using every()
const array1 = [1, 30, 41, 29, 10, 13];
console.log(array1.every(el=> el<40))
//output : false ==> each el have to satisfy the condition (el<40)
console.log(array1.some(el=> el<40))
//output : true ==> one el satisfy the condition (el<40)


//combined methods
const array = [1, 30, 41, 29, 10, 13];

const combined = array.map(el=> el+3)
.sort((a,b)=> a-b )
.reduce((a,b)=> a+b)
console.log(combined);
//ouput : 142

//Exercice 
const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];

  // Affichage des noms de companies
  const nameedComp = companies.map(company=> company.name)

  //Affichage des companies dont la catégorie = 'Retail'
  const filtered = companies.filter(comp=> comp.category == 'Retail')
  
  const sorted = companies.sort(function(c1,c2){
    if(c1.start>c2.start){
        return 1
    }
    else {
        return -1
    }
  })
   
 //Ternary Condition
 const sortedd = companies.sort(function(c1,c2){
    (c1.start>c2.start) ? 1 : -1 

  })

  // ES6
  const sorteed = companies.sort((c1,c2)=> c1.start - c2.start) 

