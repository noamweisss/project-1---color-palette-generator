let red, green, blue;
let RGB = red + green + blue;

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function getRGB() {
  red = getRandomInt(0, 256).toString(16).padStart(2, '0');
  green = getRandomInt(0, 256).toString(16).padStart(2, '0');
  blue = getRandomInt(0, 256).toString(16).padStart(2, '0');
  RGB = red + green + blue;

  console.log("Generated HEX: #" + RGB);

}

const squares = document.querySelectorAll(".colorSquare");

function generatePalette() {
  squares.forEach(function (square) {
    getRGB();
    console.log(RGB);
    square.style.backgroundColor = "#" + RGB;
  });
}
