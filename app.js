
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

let reset = document.querySelector('button')


