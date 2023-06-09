const { readFile } = require("fs");
const util = require("util")

const fileReader = util.promisify(readFile);

const main = async () => {
    try {
        const firstLine = await fileReader("first.txt");
        const secondLine = await fileReader("second.txt");
        console.log(`${firstLine} & ${secondLine}`);
    } catch(err) {
        console.error(err)
    }
}

main();


