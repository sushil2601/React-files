const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('promise 1 resolved')
    },1000);
})

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject('promise 2 rejected')
    }, 2000);
})

Promise.all([promise1,promise2])
    .then((values)=>{
        // console.log(values)
        const [ p1Result, p2Result] = values
        console.log('promise1',p1Result)
        console.log('promise2',p2Result)
    })
    .catch((err)=>{
        console.log(err)
    })

// promise1
//     .then((response)=>{
//         console.log(response)
//     })
//     .catch((err)=>{
//         console.log(err.message)
//     })

// promise2
//     .then((response)=>{
//         console.log(response)
//     })
//     .catch((err)=>{
//         console.log(err.message)
//     })