const dataForm = document.getElementById("user-survey");
dataForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const sexualityInput = document.getElementById("sexuality");
  const genderInput = document.getElementById("gender");
  const nationalityInput = document.getElementById("nationality");
  const commentInput = document.getElementById("comment");

  console.log(sexualityInput);
  console.log(genderInput);
  console.log(nationalityInput);
  console.log(commentInput);
});
