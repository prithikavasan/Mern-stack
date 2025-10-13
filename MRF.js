let arr=[1,2,3,4,5,6,7,8,9,10];
let tripleArray=arr.map(n=>n*3);
console.log(tripleArray);

let isEven = tripleArray.filter(n => {
    if(n%2==0){
        return true;
    }
});
console.log(isEven);

let sum = isEven.reduce((n,m)=>{
    return n*m;
},1);
console.log(sum);