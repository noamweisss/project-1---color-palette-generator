const generateButton = document.getElementById("generateButton");

function randomBetween(min = 0, max = 256) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  // The maximum is exclusive and the minimum is inclusive
}

function randomHexColor() {
  const toHex = (n) => n.toString(16).padStart(2, "0");
  const r = randomBetween();
  const g = randomBetween();
  const b = randomBetween();
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

const squares = document.querySelectorAll(".colorSquare");

function generateColors() {
  console.clear();
  squares.forEach(function (square, i) {
    const hex = randomHexColor();
    let r, g, b;
    r = parseInt(hex.substring(1, 3), 16);
    g = parseInt(hex.substring(3, 5), 16);
    b = parseInt(hex.substring(5, 7), 16);
    //simplified perceptual brightness coefficients, according to Gemini. should probably be improved
    const brightness = 0.299 * r + 0.587 * g + 0.114 * b; 
     console.log(`brightness of square ${i+1} is ${Math.round(brightness)}`);
    if (brightness > 128) {
      square.style.color = "#000";
    } else {
      square.style.color = "#fff";
    }
    //console.log(`red value of square ${i+1} is ${r}`);
    //console.log(`green value of square ${i+1} is ${g}`);
    //console.log(`blue value of square ${i+1} is ${b}`);
    square.style.backgroundColor = hex;
    square.innerText = hex;
  });
}

generateButton.addEventListener("click", generateColors);
generateColors();
