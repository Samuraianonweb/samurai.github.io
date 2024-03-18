const correctAnswer = "Paris";

// Функция для проверки ответа
function checkAnswer(answer) {
  if (answer === correctAnswer) {
    Correct();
  } else {
  	NotCorrect();
  }
}

// Обработчики событий для кнопок
document.getElementById("option1").addEventListener("click", function() {
  checkAnswer("Paris");
});
document.getElementById("option2").addEventListener("click", function() {
  checkAnswer("London");
});
document.getElementById("option3").addEventListener("click", function() {
  checkAnswer("Berlin");
});
document.getElementById("option4").addEventListener("click", function() {
  checkAnswer("Madrid");
});

function NotCorrect() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
function Correct() {
  // Get the snackbar DIV
  var x = document.getElementById("corect");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}