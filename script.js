const studentTemplate = document.querySelector(".studentTemplate").content;
const students = document.querySelector(".students");

window.addEventListener("load", init);

function init() {
  fetch("students1991.json")
    .then(res => res.json())
    .then(data => {
      data.forEach(student => {
        createStudentCards(student, data);
      });
    });
}

function createStudentCards(student, data) {
  const clnStudent = studentTemplate.cloneNode(true);
  console.log(student.fullname);
  clnStudent.querySelector(".nameOftheStudent").textContent = student.fullname;
  clnStudent.querySelector(".house").textContent = student.house;
  clnStudent.querySelector(".number").textContent = data.indexOf(student) + 1;
  const moodal = clnStudent.querySelector(".modal");

  clnStudent.querySelector(".mainStudentInfo").onclick = function() {
    showModal(moodal);
  };

  students.appendChild(clnStudent);
}

function showModal(modal) {
  modal.classList.add("d-flex");
  modal.classList.remove("d-none");
}
