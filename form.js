const dataForm = document.getElementById("user-survey");
dataForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const sexuality = event.target.sexuality.value;
  const gender = event.target.gender.value;
  const nationality = event.target.nationality.value;
  const comment = event.target.comment.value;

  console.log(sexuality);
  console.log(gender);
  console.log(nationality);
  console.log(comment);

  const userSxStr = JSON.stringify(sexuality);
  localStorage.setItem("User Sexuality", userSxStr);

  const userGdStr = JSON.stringify(gender);
  localStorage.setItem("User Gender", userGdStr);

  const userNatStr = JSON.stringify(nationality);
  localStorage.setItem("User Nationality", userNatStr);

  const userComStr = JSON.stringify(comment);
  localStorage.setItem("User Comment", userComStr);

  dataForm.reset();
});
