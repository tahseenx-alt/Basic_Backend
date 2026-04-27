// let p = new Promise((resolve, reject) => {
//     let a = 1 + 7;
//     if (a > 2) {
//         resolve("Success");
//     } else {
//         reject("Failed")
//     }
// })

// p.then((message) => {
//     console.log("This is in the then " + message);
// }).catch((message) => {
//     console.log("This is in the catch " + message);
// })


// async && await

async function wheather() {
    let DelhiWheather = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("38 Degree");
        },3000)

    })
    let BangloreWheather = new Promise((resolve, reject) => {
        setTimeout(()=>{
         resolve("33 degree")
        },7000)
        
    })

    console.log("Fetching Delhi Weather ......");
    let delhiW = await DelhiWheather;
    console.log("Delhi weather is fethed " + delhiW);
    console.log("Fetching Banglore Weather ......");
    let BangloreW = await BangloreWheather;
    console.log("Banglore weather is fethed" + BangloreW);
}

wheather();