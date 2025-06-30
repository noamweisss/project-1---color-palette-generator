function randomBetween(min = 0, max = 256) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
  // The maximum is exclusive and the minimum is inclusive
}

function randomHexColor() {
  const toHex = n => n.toString(16).padStart(2, '0');
  const r = randomBetween();
  const g = randomBetween();
  const b = randomBetween();
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

const squares = document.querySelectorAll(".colorSquare");

function generateColors() {
  squares.forEach(function (square) {
    const color = randomHexColor();
    square.style.backgroundColor = color;
    square.innerText = color;
  });
}
