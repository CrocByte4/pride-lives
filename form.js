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

  localStorage.setItem("User Sexuality", sexuality);

  localStorage.setItem("User Gender", gender);

  localStorage.setItem("User Nationality", nationality);

  localStorage.setItem("User Comment", comment);

  dataForm.reset();
});
