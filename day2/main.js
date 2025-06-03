const fs =require('fs')

console.log(fs) 
console.log("starting")
// fs.writeFileSync("pratima.txt", "pratima is a good girl")
fs.writeFile("pratima2.txt", "pratima is a good girl",()=>{
    console.log("done")
    fs.readFile("pratima2.txt", (error, data) => {
        console.log(error,data.toString())
})
})
console.log("ending")

