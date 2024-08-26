var btn = document.querySelectorAll("button");

for (const button of btn) {
  button.addEventListener("click", function () {
    var buttonpressed = this.textContent;
    check(buttonpressed);
  });
}

function check(input) {
  var Sound1 = new Audio("./sounds/tom-1.mp3");
  var Sound2 = new Audio("./sounds/tom-2.mp3");
  var Sound3 = new Audio("./sounds/tom-3.mp3");
  var Sound4 = new Audio("./sounds/tom-4.mp3");
  var Sound5 = new Audio("./sounds/kick-bass.mp3");
  var Sound6 = new Audio("./sounds/crash.mp3");
  var Sound7 = new Audio("./sounds/snare.mp3");

  switch (input) {
    case "w":
      Sound1.play();
      break;
    case "a":
      Sound2.play();
      break;
    case "s":
      Sound3.play();
      break;
    case "d":
      Sound4.play();
      break;
    case "j":
      Sound6.play();
      break;
    case "k":
      Sound5.play();
      break;
    case "l":
      Sound7.play();
      break;

    default:
      console.log("invalid key");

      break;
  }
}
document.addEventListener("keydown", function (event) {
  var key = event.key;
  check(key);
});
