let canvas = document.querySelector('.canvas');
let rowsInCanvas = 16;
let columnsInCanvas = 16;

//stop the page from adding anything to canvas if there is something on the canvas
if (canvas.childNodes.length == 0){
setCanvas();
}

function setCanvas(){
  for(let i = 0 ; i < rowsInCanvas ; i++){
    let row = document.createElement('div')
    row.className = 'row';
    row.style.display = 'flex';
    row.style.backgroundColor = 'rgb(224, 224, 224)';
    row.style.flex = '1';
    
    for(let i = 0 ; i < columnsInCanvas ; i++){
      let cell = document.createElement('div');
      cell.style.flex = '1';
      cell.style.backgroundColor = 'white';
      row.appendChild(cell);
    }
    canvas.appendChild(row);
  }
}

let mouseDown = 0;

let currentColor = 'rgb(102,102,102)'

canvas.addEventListener('mousemove', (e)=>{
  if (currentTool == 'pencil' && e.target.parentNode.className == 'row' && mouseDown){
  e.target.style.backgroundColor = currentColor;
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
let eraser = document.querySelector('.eraser');
let currentTool;
let toolBox = document.querySelector('.tools')
let allBtns = document.querySelectorAll('.btn')

toolBox.addEventListener('click', (e) =>{
  clearToolBox();
  if (currentTool == e.target.classList[1]){
    currentTool = '';
  } else {
  highlightTool(e.target);
  currentTool = e.target.classList[1];
  }
});

function clearToolBox(){
  allBtns.forEach(element => {
    element.style.backgroundColor = 'white';
    element.style.boxShadow = 'none';
    element.style.border = 'none'
  });
}

function highlightTool(tool){
  tool.style.backgroundColor = 'rgb(255, 185, 176)';
  tool.style.boxShadow = 'inset 0px 0px 34px 10px white';
  tool.style.border = '2px dotted silver';
}

window.addEventListener('dragstart', (e)=>{
  e.preventDefault();
  return false;
})

resolutionBtn = document.querySelector('.resolution');
function setResolution(){
  let dimension = prompt('please enter a number between 16 and 100.');
  if (dimension < 16 || dimension > 100){
    alert('minimum:16, maximum:100');
    return;
  } else {
    rowsInCanvas = dimension;
    columnsInCanvas = rowsInCanvas;
  }
}

resolutionBtn.addEventListener('click', ()=>{
  clearCanvas();
  setResolution();
  setCanvas();
  canvas.style.gap = '0';
  gridStatus = 0;
})

function clearCanvas(){
  for(let i = 0 ; i < rowsInCanvas ; i++){
    canvas.firstChild.remove();
  }
}

canvas.addEventListener('mousedown', (e)=>{
  if (currentTool == 'pencil' && e.target.parentNode.className == 'row'){
  e.target.style.backgroundColor = currentColor;
  }
});

canvas.addEventListener('mousedown', (e)=>{
  if (currentTool == 'eraser' && e.target.parentNode.className == 'row'){
  e.target.style.backgroundColor = 'white';
  }
});

colorPalette = document.querySelector('.palette');

for (let i = 0; i < 12; i++){
  let paletteCell = document.createElement('div');
  paletteCell.classList.add('palette-color');
  colorPalette.appendChild(paletteCell);
}

const paletteRYB = [
  '#FEFE33',
  '#FCCC1A',
  '#FB9902',
  '#FC600A',
  '#FE2712',
  '#C21460',
  '#8601AF',
  '#4424D6',
  '#0247FE',
  '#347C98',
  '#66B032',
  '#B2D732'
];

for (let i = 0; i < 12; i++){
  colorPalette.childNodes[i].style.backgroundColor = paletteRYB[i];
}

let allPaletteColors = document.querySelectorAll('.palette-color');

colorPalette.addEventListener('click', (e)=>{
  clearToolBox();
  highlightTool(pencil);
  if (currentTool != 'pencil' && currentColor == e.target.style.backgroundColor){
    currentTool = 'pencil';
    return;
  }
  currentTool = 'pencil';
  allPaletteColors.forEach(element => {
    element.style.boxShadow = 'none';
  });
  if (e.target.className != 'palette' && currentColor != e.target.style.backgroundColor){
  currentColor = e.target.style.backgroundColor;
  e.target.style.boxShadow = 'inset 0 0 3px 3px beige';
  } else {
    currentColor = 'rgb(102,102,102)';
  }
});

let gridStatus = 0;
canvas.style.gap = '0';

let grid = document.querySelector('#grid');

grid.addEventListener('click', (e)=>{
  let allRowsInCanvas = canvas.querySelectorAll('.row');
  if(gridStatus){
    canvas.style.gap = '0'
    allRowsInCanvas.forEach(element => {
      element.style.gap = '0';
      gridStatus = 0;
    });
  }else {
    canvas.style.gap = '1px'
    allRowsInCanvas.forEach(element => {
      element.style.gap = '1px';
      gridStatus = 1;
    });
  }
});
