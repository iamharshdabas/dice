function randomImage() {
  return Math.floor(Math.random() * 6 + 1)
}

var dice1 = randomImage()
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + dice1 + ".png")
var dice2 = randomImage()
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + dice2 + ".png")

if (dice1 > dice2) {
  document.getElementsByTagName("h1")[0].innerText = "Player 1 Wins"
} else if (dice1 < dice2) {
  document.getElementsByTagName("h1")[0].innerText = "Player 2 Wins"
} else {
  document.getElementsByTagName("h1")[0].innerText = "Draw"
}
