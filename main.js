let canvasSizePixels = document.getElementById('container-one-canvas').style.width;

function createCanvasContainer(){
    const container = document.createElement('div');
    container.setAttribute('id', 'container-two-canvas');
    container.style.width = canvasSizePixels;
    container.style.height = canvasSizePixels;
    document.getElementById('container-one-canvas').append(container);
    //container.style.border = '0.5px solid black';
}

function drawCanvas(canvasSize){
    let canvas = document.getElementById('container-two-canvas');
    let flexboxesArray = [];

    let canvasBlockDivWidth = canvas.offsetWidth / canvasSize;
    let canvasBlockDivHeight = canvas.offsetHeight / canvasSize;

    /* let canvasBlockDivWidth = Number(canvas.style.width.slice(0, -2)) / canvasSize;
    let canvasBlockDivHeight = Number(canvas.style.height.slice(0, -2)) / canvasSize; */

    for(let i = 0; i < canvasSize; ++i)
    {
        flexboxesArray[i] = document.createElement('div');
        flexboxesArray[i].style.display = 'flex';

        for(let j = 0; j < canvasSize; ++j)
        {
            let canvasBlockDiv = document.createElement('div');
            canvasBlockDiv.style.width = canvasBlockDivWidth.toString() + 'px';
            canvasBlockDiv.style.height = canvasBlockDivHeight.toString() + 'px';
            canvasBlockDiv.style.border = 'solid black 0.5px';
            canvasBlockDiv.style.flexShrink = 0;
            flexboxesArray[i].append(canvasBlockDiv);
            canvasBlockDiv.addEventListener('mouseover', changeDivColor);
        }

        canvas.append(flexboxesArray[i]);
    }
}

function eraseCanvas(){
    document.getElementById('container-two-canvas').remove();
}

createCanvasContainer();
drawCanvas(Number(document.getElementById('canvas-size').value));

document.getElementById('draw-canvas').addEventListener('click', function(){
    eraseCanvas();
    createCanvasContainer();
    drawCanvas(Number(document.getElementById('canvas-size').value));
});

function changeDivColor(e){
    if(document.getElementById('optionRed').checked)
        e.target.style.backgroundColor = 'red';
    else
        e.target.style.backgroundColor = `rgb(${generateRandomInt(0, 256)} ${generateRandomInt(0, 256)} ${generateRandomInt(0, 256)})`; // 0 inclusive, 256 exclusive
}

function generateRandomInt(min, max){
   return Math.floor(Math.random() * (max - min)) + min;
   // min inclusive, max exclusive
}