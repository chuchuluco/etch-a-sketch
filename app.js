
function createGrid(side=16) {
  let bigContainer = document.querySelector('.big-container')
  bigContainer.style.gridTemplateColumns = `repeat(${side}, 1fr)`
  bigContainer.style.gridTemplateRows = `auto`
  for (let i = 0; i < side; i++) { 
    for (let j = 0; j < side; j++) {
    let cell = document.createElement("div");
    cell.style.border = "1px solid black"
    cell.className = "cell";
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = getColor();
    })
    bigContainer.appendChild(cell);
  }}
};
createGrid();

function getColor() {
  color = "black"
  return color
}

let gridMod = document.querySelector('.new-grid');
gridMod.addEventListener("click", newGrid);

let reset = document.querySelector('.reset');
reset.addEventListener('click', resetGrid)

let rgb = document.querySelector('.rgb');
rgb.addEventListener('click', makeRgb)


function newGrid() {
  let side = prompt("What size?\nlimit:100x100 squares");
  let cells = document.getElementsByClassName("cell");
    while(cells.length > 0){
        cells[0].parentNode.removeChild(cells[0]);
    }

  createGrid(side);
}

function resetGrid() {
  let cells = document.querySelectorAll(".cell");
  cells.forEach(cell => cell.style.background = "white")
}

function makeRgb() {
  let cells = document.querySelectorAll(".cell");
  console.log(cells)
  cells.forEach(cell => {
    cell.removeEventListener("mouseover", () => {
      cell.style.backgroundColor = getColor();
    })
    cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = getRandomColor();
    })
  })
}


function getRandomColor() {
  let color = Math.floor(Math.random()*16777215).toString(16);
  return "#" + color
}