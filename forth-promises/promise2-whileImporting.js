// converting the readfile function in promise
const { readFile } = require("fs").promises; 

const main = async () => {
    try {
        const firstLine = await readFile("first.txt");
        const secondLine = await readFile("second.txt");
        console.log(`${firstLine} & ${secondLine}`);
    } catch(err) {
        console.error(err)
    }
}

main();