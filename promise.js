const promise=new Promise((resolve,reject)=>
{
    setTimeout(()=>{
        const s=true;
        if(s)
        {
            resolve("Resolved successfully");

        }
        else{
            reject("Failed")
        }
    },2000)
})
console.log("Before promise execution");
promise.then((result)=>
{
    console.log(result)
})
.catch(err=>console.log(err))
.finally(()=>{console.log("Promise completed")})
console.log("After promise execution");

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{return response.json()})
.then((data)=>data.map((user)=>{console.log(user.name)}))
.catch((err)=>console.log(err))