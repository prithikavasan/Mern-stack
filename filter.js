function oddOrEven(num){
    if(num%2!=0){
        return true;
    }
    else{
        return false;
    }
}
let arr=[1,2,3,4,5,6,7,8,9];
let answer = arr.filter(oddOrEven);
console.log(answer);

let array=[13,15,20,35,27];
let result = array.filter((n)=>{
    if(n%5===0)return true;
})

console.log(result);