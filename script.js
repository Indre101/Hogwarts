const studentTemplate = document.querySelector(".studentTemplate").content;
const students = document.querySelector(".students");

window.addEventListener("load", init);

function init() {
  fetch("students1991.json")
    .then(res => res.json())
    .then(data => {
      data.forEach(student => {
        createStudentCards(student);
      });
    });
}

function createStudentCards(student) {
  const clnStudent = studentTemplate.cloneNode(true);
  console.log(student.fullname);
  clnStudent.querySelector(".nameOftheStudent").textContent = student.fullname;
  clnStudent.querySelector(".house").textContent = student.house;

  students.appendChild(clnStudent);
}
