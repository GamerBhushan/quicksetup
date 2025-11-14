class Student {
  constructor(name, rollNo, marks) {
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks;
  }
  isPassed() {
    return this.marks > 40;
  }
}

let passedStudentArr = studentArr.filter((s) => {
  return s.isPassed();
});

let studentsOL = document.getElementById("studentsOL");
let inputRoll = document.getElementById("roll");
let inputMarks = document.getElementById("marks");
let inputName = document.getElementById("name");
let btnAdd = document.getElementById("addStudent");

btnAdd.addEventListener("click", addStudents);

function addStudents() {
  
  studentsOL.innerHTML = "";
  studentsOL.innerText = "";
  studentArr.map((s) => {
    let cname = "passed";
    if (!s.isPassed()) {
      cname = "failed";
    }

    studentsOL.innerHTML += `<li class="${cname}">
     Name : ${s.name} 
     Roll No : ${s.rollNo} 
     Marks : ${s.marks}%
     isPassed : ${s.isPassed()} 
     </li>`;
  });
}
