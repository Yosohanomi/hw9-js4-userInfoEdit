const userDataForm = document.getElementById("user-data-form");
const userDataDisplay = document.getElementById("user-data");

const deleteFormBtn = document.getElementById("delete-form-btn");
const editFormBtn = document.getElementById("edit-form-btn");
const cancelFormBtn = document.getElementById("cancel-form-btn");
const showFormBtn = document.getElementById("show-form-btn");

const userNameDisplay = document.getElementById("display-name");
const userEmailDisplay = document.getElementById("display-email");
const userAgeDisplay = document.getElementById("display-age");

const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const userAge = document.getElementById("user-age");

function loadUserData() {
  const userData = JSON.parse(localStorage.getItem("user-data"));
  if (userData) {
    userNameDisplay.textContent = userData.name;
    userAgeDisplay.textContent = userData.age;
    userEmailDisplay.textContent = userData.email;
    userDataDisplay.style.display = "block";
    userDataForm.style.display = "none";
    showFormBtn.style.display = "none";
  } else {
    userDataDisplay.style.display = "none";
    showFormBtn.style.display = "block";
  }
}

function showUserForm() {
  userDataForm.style.display = "block";
  showFormBtn.style.display = "none";

  const userData = JSON.parse(localStorage.getItem("user-data"));
  if (userData) {
    userName.value = userData.name;
    userAge.value = userData.age;
    userEmail.value = userData.email;
  }
}

function cancelEdit() {
  userDataForm.style.display = "none";
  loadUserData();
}

function editUserData() {
  showUserForm();
  userDataDisplay.style.display = "none";
}

function deleteUserData() {
  if (confirm("Delete your info?")) {
    localStorage.removeItem("user-data");
    loadUserData();
    userDataForm.style.display = "none";
    showFormBtn.style.display = "block";
  }
}

userDataForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const userData = {
    name: document.getElementById("user-name").value,
    age: document.getElementById("user-age").value,
    email: document.getElementById("user-email").value,
  };

  localStorage.setItem("user-data", JSON.stringify(userData));
  loadUserData();
});

deleteFormBtn.addEventListener("click", () => deleteUserData());
editFormBtn.addEventListener("click", () => editUserData());
cancelFormBtn.addEventListener("click", () => deleteUserData());
showFormBtn.addEventListener("click", () => showUserForm());
