
function createGrid(width=16, height=16) {
  let bigContainer = document.querySelector('.big-container')
  bigContainer.style.gridTemplateColumns = `repeat(${width}, 1fr)`
  bigContainer.style.gridTemplateRows = `auto`
  for (let i = 0; i < width; i++) { 
    for (let j = 0; j < height; j++) {
    let cell = document.createElement("div");
    cell.style.border = "1px solid black"
    cell.className = "cell";
    bigContainer.appendChild(cell);
  }}
  
};