var dragShip = null;
var dragShipWidth, dragShipHeight;
var isDraggable = false;
var isInDropzone = false;

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
function mouseMoveListener (e, contaierArr) {
  var x = e.clientX;
  var y = e.clientY;

  if(isDraggable) {
    dragShip.style.left = x - (dragShipWidth/2);
    dragShip.style.top = y - 145;

    if (hasDroppedInContainer(x, y, contaierArr)) {
      testDropDiv.classList.add("dropZoneEnabled");
      isInDropzone = true;
    } else {
      testDropDiv.classList.remove("dropZoneEnabled");
      isInDropzone = false;
    }
  } 
}

function mouseUpListener (e, containerArr) {
  console.log("mouse up");
  isDraggable = false;
  containerArr.classList.remove("dropZoneEnabled");

  if (isInDropzone) {
    containerArr.classList.add("dropZoneSet");
    // centerShip(ship1, containerArr);
  }
}

function hasDroppedInContainer (x, y, containerArr) {
  var boundRect = containerArr.getBoundingClientRect();
    return (x <= (boundRect.left + boundRect.width) && x >= boundRect.left) && (y <= (boundRect.top + boundRect.height) && y >= boundRect.top);
}

// function centerShip () {

// }


