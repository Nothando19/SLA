var clientSignaturePad = document.getElementById("sign-client-pad");

function validateSignaturePad() {
    if (this.isEmpty()) {
      alert("Please sign the document before submitting it.");
      return false;
    }
  
    if (!this.validate()) {
      alert("The signature is not valid. Please try again.");
      return false;
    }
  
    return true;
}

function main(){
    clientSignaturePad.addEventListener("focusout", validateSignaturePad);
} 
main();

const canvas = document.querySelector('canvas');
const clearButton = document.querySelector('.clear-button');

const ctx = canvas.getContext('2d');

let writingMode = false;


const handlePointerDown = (event) => {
    writingMode = true;
    ctx.beginPath();
    const [positionX, positionY] = getCursorPosition(event);
    ctx.moveTo(positionX, positionY);
}

const handlePointerUp = () => {
    writingMode = false;
}

const handlePointerMove = (event) => {
    if (!writingMode) return
    const [positionX, positionY] = getCursorPosition(event);
    ctx.lineTo(positionX, positionY);
    ctx.stroke();
}

const getCursorPosition = (event) => {
    positionX = event.clientX - event.target.getBoundingClientRect().x;
    positionY = event.clientY - event.target.getBoundingClientRect().y;
    return [positionX, positionY];
}


canvas.addEventListener('pointerdown', handlePointerDown, {passive: true});
canvas.addEventListener('pointerup', handlePointerUp, {passive: true});
canvas.addEventListener('pointermove', handlePointerMove, {passive: true});



ctx.lineWidth = 2;
ctx.lineJoin = ctx.lineCap = 'round';



const clearPad = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

clearButton.addEventListener('click', (event) => {
    event.preventDefault();
    clearPad();
})
 