import { writeFile, readFile, writeFileSync, readFileSync } from 'fs';

const filePath = "MyFiles/data.json";

const obj = {
    name: "<YOUR-NAME-HERE>",
    div: "",
    rollNo: 0,
    class: "SYMCA",
    languages: ["JavaScript", "Java", "Python", "C", "C++"],
}

// Synchronouse Way
console.log("Synchronous Way\n");
try {
    writeFileSync(filePath, JSON.stringify(obj));
    console.log("File Written Successfully.")
    let data = readFileSync(filePath).toString()
    console.log("\nFile Data : \n")
    console.log(data);
} catch (error) {
    console.log(`Error : ${error}`);

}


// Asynchronous Way
console.log("\n\nAsynchronouse Way\n\n")
writeFile(filePath, JSON.stringify(obj), "utf-8", (err) => {
    if (err) {
        console.log(`Error While Writting File : ${err}`);
    }
    console.log("\nData Written Successfully In File.\n")
});

readFile(filePath, (err, data) => {
    if (err) {
        return console.log(`Error While Reading File : ${err.message}`);
    }
    console.log(`\nReading Data From File : \n${data}\n`);
});

