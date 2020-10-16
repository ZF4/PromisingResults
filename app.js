//Promise chain
// let add = slowMath.add(6, 2)
//     .then((value) => {
//         console.log(value);
//         return slowMath.multiply(value, 2);
//     }).then((value) => {
//         console.log(value);
//         return slowMath.divide(value, 4)
//     }).then((value) => {
//         console.log(value);
//         return slowMath.subtract(value, 3)
//     }).then((value)=>{
//         console.log(value);
//         return slowMath.add(value, 98)
//     }).then((value)=>{
//         console.log(value);
//         return slowMath.remainder(value, 2)
//     }).then((value)=>{
//         console.log(value);
//         return slowMath.multiply(value, 50)
//     }).then((value)=>{
//         console.log(value);
//         return slowMath.remainder(value, 40)
//     }).then((value)=>{
//         console.log(value);
//         return slowMath.add(value, 32)
//     }).then((value)=> {
//         console.log(`The final result is ${value}!`)
//     }).catch((e)=> {
//         console.log(e)
//     })


    async function doMath(){
       try{
          let value = await slowMath.add(6,2)
          console.log(value);
          value = await slowMath.multiply(value,2)
          console.log(value);
          value = await slowMath.divide(value,4)
          console.log(value);
          value = await slowMath.subtract(value,3)
          console.log(value);
          value = await slowMath.add(value,98)
          console.log(value);
          value = await slowMath.remainder(value,2)
          console.log(value);
          value = await slowMath.multiply(value,50)
          console.log(value);
          value = await slowMath.remainder(value,40)
          console.log(value);
          value = await slowMath.add(value,32)
          let message = document.createElement('p')
          console.log(value);
          message.innerText = `The final result is ${value}`
          document.body.appendChild(message);       
       } catch (e) {
         console.log(e);
       }
    }
    doMath();