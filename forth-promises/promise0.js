const { readFile } = require("fs");



const readText = (path) =>  {
    return new Promise((resolve, reject) => {
        readFile(path, "utf8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}


const main = async () => {
    try {
        const firstLine = await readText("first.txt");
        const secondLine = await readText("second.txt");
        console.log(`${firstLine} & ${secondLine}`);
    } catch(err) {
        console.error(err)
    }
}

main();

