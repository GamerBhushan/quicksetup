const fs = require("fs");

const studentsFilePath = "./students.json";

fs.readFile(studentsFilePath, (err, data) => {
    if (err) {
        console.error(`Error : ${err}`);
        return;
    }

    jsonData = JSON.parse(data);
    console.log("\n\nStudents Information : \n")
    jsonData.forEach(student => {
        console.log(student);
        // console.log(student);
    });
});

