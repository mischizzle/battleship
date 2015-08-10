

var ship1 = document.getElementById('aircraftCarrier');
var testDropDiv = document.getElementById('testDrop');

var dragShip = null;
var dragShipWidth, dragShipHeight;
var isDraggable = false;
var isInDropzone = false;


// makeClickable(ship1);
ship1.addEventListener('mousedown', clickListener);
document.addEventListener('mousemove', mouseMoveListener);
document.addEventListener('mouseup', mouseUpListener);

// Capturing click event
function clickListener (event){
  var dragShipSizes;

  dragShip = this;
  dragShipSizes = window.getComputedStyle(dragShip);
  dragShipWidth = parseInt(dragShipSizes.width, 10);
  dragShipHeight = parseInt(dragShipSizes.height, 10);
  isDraggable = true;
  event.returnValue = false;
}


//Capturing the mouse movement
function mouseMoveListener (e) {
  var x = e.clientX;
  var y = e.clientY;

  if(isDraggable) {
    dragShip.style.left = x - (dragShipWidth/2);
    dragShip.style.top = y - 145;

    if (hasDroppedInContainer(x, y)) {
      testDropDiv.classList.add("dropZoneEnabled");
      isInDropzone = true;
    } else {
      testDropDiv.classList.remove("dropZoneEnabled");
      isInDropzone = false;
    }
  } 
}

function mouseUpListener (e) {
  console.log("mouse up");
  isDraggable = false;
  testDropDiv.classList.remove("dropZoneEnabled");

  if (isInDropzone) {
    testDropDiv.classList.add("dropZoneSet");
    // centerShip(ship1, testDropDiv);
  }
}

function hasDroppedInContainer (x, y) {
  var boundRect = testDropDiv.getBoundingClientRect();
    return (x <= (boundRect.left + boundRect.width) && x >= boundRect.left) && (y <= (boundRect.top + boundRect.height) && y >= boundRect.top);
}

// function centerShip () {

// }
