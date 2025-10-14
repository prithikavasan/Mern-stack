console.log('first');
Promise.resolve().then(console.log('From promises'))
setTimeout(()=>{
    console.log('Inside Timeout');
},2000)
console.log('last');