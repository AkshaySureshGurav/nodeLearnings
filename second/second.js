const file = require("fs"); // importing the required module

console.log("code started running");

// readFile from fs module is async function
file.readFile("sample.txt", "utf8", (err, result) => {
    if (err){ // Handling error
        console.error(`err occured while reading file\n${err}`);
        return;
    }
    const firstSentence = result; // storing the first sentence
    file.readFile("sample1.txt", "utf8", (err, result) => {
        if (err){ // Handling error
            console.error(`err occured while reading file\n${err}`)
            return;
        }
        const secondSentence = result; // storing the second sentence
        file.writeFile("result.txt", `${firstSentence}\n${secondSentence}`, (err) => {
            if (err){ // Handling error
                console.error(`err occured while writing file\n${err}`)
                return;
            }
            console.log("Writing to a new .txt file has been sucessfully completed")
        })
    })
})

console.log("code has been executed");