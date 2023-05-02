const file = require("fs");

console.log()

file.readFile("samplde.txt", "utf8", (err, result) => {
    if (err){
        console.error(`err occured while running\n${err}`)
    }
    console.log(result)
})