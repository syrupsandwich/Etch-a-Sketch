let canvas = document.querySelector('.canvas');
let rowsInCanvas = 16;
let columnsInCanvas = 16;

for(let i = 0 ; i <= rowsInCanvas ; i++){
  let row = document.createElement('div')
  row.className = 'row';
  row.style.display = 'flex';
  row.style.backgroundColor = 'rgb(224, 224, 224)';
  row.style.flex = '1';
  row.style.gap = '1px'
  
  for(let i = 0 ; i <= columnsInCanvas ; i++){
    let cell = document.createElement('div');
    cell.style.flex = '1';
    cell.style.backgroundColor = 'white';
    row.appendChild(cell);
  }
  canvas.appendChild(row);
}

let mouseDown = 0;

canvas.addEventListener('mousemove', (e)=>{
  if (currentTool == 'pencil' && e.target.parentNode.className == 'row' && mouseDown){
  e.target.style.backgroundColor = 'silver';
  } else if (currentTool == 'eraser' && e.target.parentNode.className == 'row' && mouseDown){
    e.target.style.backgroundColor = 'white';
    }
});

document.addEventListener('mousedown', (e)=>{
  ++mouseDown;
});

document.addEventListener('mouseup', (e)=>{
  --mouseDown;
});

let pencil = document.querySelector('.pencil');
let eraser = document.querySelector('eraser');
let currentTool;
let toolBox = document.querySelector('.tools')

toolBox.addEventListener('click', (e) =>{
  currentTool = e.target.classList[1];
})

canvas.addEventListener('dragstart', (e)=>{
  e.preventDefault();
  e.target.preventDefault();
  return false;
})