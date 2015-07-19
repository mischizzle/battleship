
document.onmousemove = mouseMove;
document.onmouseup = mouseUp;

var mouseOffset = null;
var dragObject = null;

//Capturing the mouse movement
function mouseMove(event){
  event = event || window.eventent;
  var mousePos = mouseCoords(event);
  // console.log(mousePos);
}

function mouseCoords(event){
  if(event.pageX || event.pageY){
    return {x:event.pageX, y:event.pageY};
  }
  return {
    x:event.clientX + document.body.scrollLeft - document.body.clientLeft,
    y:event.clientY + document.body.scrollTop  - document.body.clientTop
  };
}


// Capturing click event
function makeClickable(object){
  object.onmousedown = function(){
    dragObject = this;
  }
}
function mouseUp(ev){
  dragObject = null;
}



function getMouseOffset(target, ev){
  ev = ev || window.event;
  var docPos    = getPosition(target);
  var mousePos  = mouseCoords(ev);
  return {x:mousePos.x - docPos.x, y:mousePos.y - docPos.y};
}

function getPosition(e){
  var left = 0;
  var top  = 0;
  while (e.offsetParent){
    left += e.offsetLeft;
    top  += e.offsetTop;
    e     = e.offsetParent;
  }
  left += e.offsetLeft;
  top  += e.offsetTop;
  return {x:left, y:top};
}

function mouseMove(ev){
  ev = ev || window.event;
  var mousePos = mouseCoords(ev);
  if(dragObject){
    dragObject.style.position = 'absolute';
    dragObject.style.top      = mousePos.y - mouseOffset.y;
    dragObject.style.left     = mousePos.x - mouseOffset.x;
    return false;
  }
}

function mouseUp(){
  dragObject = null;
}

function makeDraggable(item){
  if(!item) return;
  item.onmousedown = function(ev){
    dragObject  = this;
    mouseOffset = getMouseOffset(this, ev);
    return false;
  }
}