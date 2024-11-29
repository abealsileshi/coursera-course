
/* 
refactored code to make six second message appear first then 
three second message is sent

originally in this example the 3 second would print first then
the 6 second timeout would print
let myPromise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise 1 resolved")
    },6000)})
let myPromise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise 2 resolved")
    },3000)})
  myPromise1.then((successMessage) => {
    console.log("From Callback " + successMessage)
    myPromise2.then((successMessage) => {
      console.log("From Callback " + successMessage)
    })
  })

  */

let sixsecPromise = new Promise((resolve, reject) => {
    setTimeout(function message(){
       

        let threesecPromise = new Promise((resolve, reject) => {
            setTimeout(function message(){
                console.log('three second message')
            }, 3000)
            resolve()
        })
        sixsecPromise.then(() =>{
            console.log('Everything finished (six sec)')
        })
        threesecPromise.then(() =>{
            console.log('Everything finished (three sec)')
        })


        console.log('six second message')
    }, 6000)
    resolve()
})






