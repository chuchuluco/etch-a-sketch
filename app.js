
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

