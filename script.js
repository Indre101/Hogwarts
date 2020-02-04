const studentTemplate = document.querySelector(".studentTemplate").textContent
const students = document.querySelector(".students");

window.addEventListener("load", init)

function init() {
  fetch("students1991.json").then(res => res.json()).then(data => {
    data.forEach(student => {
      createStudentCards(student)
    });
  })
}

function createStudentCards(student) {
  const clnStudent = studentTemplate.clone

  students.appendChild(clnStudent);


}