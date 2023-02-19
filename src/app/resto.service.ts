// const promise = new Promise((resolve, reject)=>{

//   const success = true;

//   if (success){
//     resolve('Operation completed successfully')
//   }else{
//     reject("Operation failed")
//   }
// });

// promise.then((result)=>{
//   console.log(result)       //Operation completed successfully
// }).catch((error)=>{
//   console.log(error)        //Operation failed
// })







const promise = new Promise((resolve, reject)=>{

  const success = true;

  if(success){

    resolve("operation succesful")
  }else{
    reject ("operation reject")
  }
})

promise.then((result)=>{

  console.log(result)
}).catch((error)=>{
  console.log(error )
})


























