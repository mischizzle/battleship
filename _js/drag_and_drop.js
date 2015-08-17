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
function mouseMoveListener (e) {
  var x = e.clientX;
  var y = e.clientY;
  var container;

  if(isDraggable) {
    dragShip.style.left = x - (dragShipWidth/2);
    dragShip.style.top = y - (dragShipHeight/2);


    for(var i=0; i<battleship.dropTargets.length; i++) {
      container = battleship.dropTargets[i];
      if (hasDroppedInContainer(x, y, container)) {
        console.log(container);
        container.classList.add("dropZoneEnabled");
        isInDropzone = true;
      } else {
        console.log("not in drop zone", container);
        container.classList.remove("dropZoneEnabled");
        isInDropzone = false;
      }
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

function hasDroppedInContainer (x, y, container) {
  var boundRect = container.getBoundingClientRect();
  return (x <= (boundRect.left + boundRect.width) && x >= boundRect.left) && (y <= (boundRect.top + boundRect.height) && y >= boundRect.top);
}

// function centerShip () {

// }


