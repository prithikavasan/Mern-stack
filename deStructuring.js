let b=[1,2,3,4,5];
const[one,,,two]=b;
console.log(two);
//list
let a=[1,2,3,4,5];
const[o,...t]=a;
console.log(t);

let num=[0,...a,6,7];
console.log(num);

let obj1={x:3,y:5}
let obj2={y:6,z:7}
const spread={...obj1, ...obj2};
console.log(spread);