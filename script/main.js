let canvas = document.querySelector('.canvas');
let canvasHeight = 16;
let canvasWidth = 16;


for(let i = 0 ; i <= canvasHeight ; i++) {
  let row = document.createElement('div')
  row.style.display = 'flex';
  row.style.backgroundColor = 'rgb(224, 224, 224)';
  row.style.flex = '1';
  row.style.gap = '1px'
  
  for(let i = 0 ; i <= canvasWidth ; i++) {
    let cell = document.createElement('div');
    cell.style.flex = '1';
    cell.style.backgroundColor = 'white';
    row.appendChild(cell);
  }
  canvas.appendChild(row);
}