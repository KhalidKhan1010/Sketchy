function drawCanvas(canvasSize){
    let canvas = document.getElementById('container-one-canvas');
    let flexboxesArray = [];

    let canvasBlockDivWidth = Number(canvas.style.width.slice(0, -2)) / canvasSize;
    let canvasBlockDivHeight = Number(canvas.style.height.slice(0, -2)) / canvasSize;

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
        }

        canvas.append(flexboxesArray[i]);
    }
}

drawCanvas(16);