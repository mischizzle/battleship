
var isInDropzone = false;
var dragTarget;
var dropTarget;
var isDraggable = false;

function initDragDropTargets(dragEl, dropEl) {
  dragEl.addEventListener('mousedown', clickListener);
  dragTarget = dragEl;
  dropTarget = dropEl;
}

// Capturing click event
function clickListener (e){

  dragEl.addEventListener('mousemove', mouseMoveListener);
  dragEl.addEventListener('mouseup', cancelDrag);
  //dragEl.addEventListener('mouseout', cancelDrag);

  dragTarget = this;
  dragTarget.computedStyles = window.getComputedStyle(dragTarget);
  dragTarget.width = parseInt(dragTarget.computedStyles.width, 10);
  dragTarget.height = parseInt(dragTarget.computedStyles.height, 10);
  isDraggable = true;
  e.returnValue = false;
}


//Capturing the mouse movement
function mouseMoveListener (e) {
  var x = e.clientX;
  var y = e.clientY;
  var computedThis, computedThisTop, computedThisLeft;
  var newTop, newLeft;
  var newCoords;
  var parentOffsetTop, parentOffsetLeft;

  if(isDraggable) {

    computedThis = window.getComputedStyle(dragTarget);
    console.log(computedThis);

    newCoords = getNodePosition(this);
    console.log("get node position:", newCoords);
    console.log("x:", x, "y:", y);

    //console.log("testX:", computedThisLeft - x);
    //console.log("testY:", computedThisTop - y);
    //console.log("newLeft:", newLeft, "newTop:", newTop);

    console.log(x - newCoords.left);
    console.log(y - newCoords.top);

    dragTarget.style.left = x - (parseInt(computedThis.width, 10)/2) + "px";
    dragTarget.style.top = y - (parseInt(computedThis.height, 10)/2) + "px";

    //dragTarget.style.left = x - parentOffsetTop - (dragTarget.width/2) - parseInt(computedThis.top, 10) + "px";
    //dragTarget.style.top = y - parentOffsetLeft - (dragTarget.height/2) - parseInt(computedThis.left, 10) + "px";

    if (hasDroppedInTarget(x, y, dropTarget)) {
      console.log("in drop zone", dropTarget);
      dropTarget.classList.add("dropZoneEnabled");
      isInDropzone = true;
    } else {
      console.log("not in drop zone", dropTarget);
      dropTarget.classList.remove("dropZoneEnabled");
      isInDropzone = false;
    }
  }
    //for(var i=0; i<battleship.dropTargets.length; i++) {
    //  container = battleship.dropTargets[i];
    //  if (hasDroppedInTarget(x, y, container)) {
    //    console.log(container);
    //    container.classList.add("dropZoneEnabled");
    //    isInDropzone = true;
    //  } else {
    //    console.log("not in drop zone", container);
    //    container.classList.remove("dropZoneEnabled");
    //    isInDropzone = false;
    //  }
    //}
}

function getNodePosition(node) {
  var top = left = 0;
  while (node) {
    if (node.tagName) {
      top = top + node.offsetTop;
      left = left + node.offsetLeft;
      node = node.offsetParent;
    } else {
      node = node.parentNode;
    }
  }
  return {
    top: top,
    left: left
  }
}

function cancelDrag (e) {
  isDraggable = false;
  dropTarget.classList.remove("dropZoneEnabled");

  if (isInDropzone) {
    dropTarget.classList.add("dropZoneSet");
  }
}

function hasDroppedInTarget (x, y, dropTarget) {
  var boundRect = dropTarget.getBoundingClientRect();
  return (x <= (boundRect.left + boundRect.width) && x >= boundRect.left) && (y <= (boundRect.top + boundRect.height) && y >= boundRect.top);
}
