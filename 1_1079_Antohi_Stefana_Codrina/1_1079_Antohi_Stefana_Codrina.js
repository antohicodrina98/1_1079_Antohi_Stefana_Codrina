// When true, moving the mouse draws on the canvas
let isDrawing = false;
let x = 0;
let y = 0;



function MouseDown(e) {
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
}

function MouseMove(e) {
    if (isDrawing === true) {
        deseneazaLinie(context, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
    }
}


function MouseUp(e) {
    if (isDrawing === true) {
        deseneazaLinie(context, x, y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;
        isDrawing = false;
    }
}


function deseneazaLinie(context, x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 1;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
}

function salveazaPNG(e){
    let link = document.createElement('a');
    link.download = 'tema1Canvas.png';
    link.href = canvas.toDataURL('image/png');
    //Atributul href definește un link către o resursă ca URL de referință. Sensul exact al acelui link depinde de contextul fiecărui element care îl folosește.
    link.click();
}
function stergere(e) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

}

//DOMContentLoaded este executat odata ce documentul HTML de baza este incarcat si a avut loc verificarea acestuia
//nu asteapta finalizarea incarcarii imaginilor, cadrelor etc
function proiect() {
    canvas = document.getElementById('canvasDesen');
    context = canvas.getContext("2d");


    document.getElementById('export').addEventListener('click', salveazaPNG);
    document.getElementById('stergere').addEventListener('click', stergere);
    
    document.addEventListener('mousedown', MouseDown);
    document.addEventListener('mousemove', MouseMove);
    document.addEventListener('mouseup', MouseUp);

}
document.addEventListener("DOMContentLoaded", proiect);