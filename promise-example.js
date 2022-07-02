//producing code
const promiseObj = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const someTask = false
        if(someTask){
            // resolve('the promise was resolved, successful operation completed')
            const data = [{ id: 1,name: 'john'}, { id: 2, name: 'jack'}]
            resolve(data)
        }else{
            // reject('the promise was rejected, unsuccessful operation')
            reject(new Error('something went wrong'))
        }
    },3000)
})

//consuming code
promiseObj
    .then((response) => { console.log(response)})
    .catch((err)=>{ console.log(err.message)})


console.log(promiseObj)

// A promise cannot be resolved and rejected at the same time.