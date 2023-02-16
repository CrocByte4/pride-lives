// index "find out more" button
// when clicked comes up with prompt with details and asks if user is willing to participate
// if yes, begins survey function
// if no, returns to index page
const fomButton = document.getElementById("fom-button");

fomButton.addEventListener("click", fomClick);

function fomClick() {
  let surveyStart = confirm(
    "Thanks for looking. We are hoping to get a scope on the demographics of out site and have a few questions to ask. Some of your answers will be used for graphical representations, others will affect the content we present to you. We understand that we are asking for sensitive information, and for your peace of mind we will not hold any important identifying information about you and you will be given the option to skip questions. Are you happy to continue?"
  );
  if (surveyStart === true) {
    alert("Thank you, you'll now be redirected to our survey");
    location.href = "survey.html";
  }
}

// survey function
// ask questions, pick from list of cat, pick country, etc
// data is stored in local memory and used to change other pages, e.g user's country will be default in support and rights pages, their identity flag will appear on index page on subsequent visits maybe even a custom page theme (colours, symbols, people{changable person of the day}) etc.
// maybe add user comments to a new page, like a support wall or experiences ...

// trying to get survey answer data into local storage

/*function SurvAnswers(name, clicks) {
  this.name = name;
  this.clicks = clicks;
  SurvAnswers.allSurvAnswers.push(this);
}

SurvAnswers.allSurvAnswers = [];*/

function sxPresentation() {
  if (localStorage.getItem("User Sexuality") === "Gay") {
    document.getElementById(sxFlag).src = "/home-images/gay.png";
  } else if (localStorage.getItem("User Sexuality") === "Asexual") {
    document.getElementById(sxFlag).src = "/home-images/asexual.png";
  }
}

/*const sxOptions = [
  "Heterosexual/straight",
  "Lesbian",
  "Gay",
  "Bisexual",
  "Demisexual",
  "Asexual",
  "Questioning",
];

const gdOptions = [
  "Cis Male",
  "Cis Female",
  "Trans Male",
  "Trans Female",
  "Non-Binary",
  "Unsure",
];

const natOptions = [
  "British",
  "American",
  "Australian",
  "Polish",
  "Brazilian",
  "Afghan",
];

const comOptions = [""];*/

/*if (localStorage.getItem("User Sexuality") === null) {
  for (let i = 0; i < sxOptions.length; i++) {
    new SurvAnswers(allCatChoices[i], 0);
  }
} else {
  const answerData = JSON.parse(localStorage.getItem("answerData"));

  for (let i = 0; i < answerData.length; i++) {
    new Product(answerData[i].name, answerData[i].clicks);
  }
}*/

// maybe add a quiz based on the info in the cat pages to seee what the user learned, and keep track of the attempts and high score
