function double(num){
    return num*2;
}
let arr=[1,2,3,4,5,6,7,8];
let doubledArr=arr.map(double);
console.log(doubledArr);

const tripleArr = arr.map((n)=>n*3);
console.log(tripleArr);