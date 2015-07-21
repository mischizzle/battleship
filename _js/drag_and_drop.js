

var ship1 = document.getElementById('aircraftCarrier');
var dropDiv = document.getElementById('testDrop')

var dragShip = null;
var isDraggable = false;


// makeClickable(ship1);
ship1.addEventListener('mousedown', clickListener);
document.addEventListener('mousemove', mouseMoveListener);
document.addEventListener('mouseup', mouseUpListener);

// Capturing click event
function clickListener(event){
  console.log("You clicked on ", this);
  dragShip = this;
  isDraggable = true;
  event.returnValue = false;
}


//Capturing the mouse movement
function mouseMoveListener(e) {
  var x = e.pageX;
  var y = e.pageY;
  // console.log(this);
  // console.log(e.pageX)
  
  if(isDraggable) {
    console.log("X: ", x, " Y: ", y);
     
    dragShip.style.left = x - 20; 
    dragShip.style.top = y - 20; 

    hasDroppedInContainer(x, y);
  } 
}

function mouseUpListener(e) {
  console.log("mouse up");
  isDraggable = false;
}

function hasDroppedInContainer(x, y) {
  var boundRect = dropDiv.getBoundingClientRect();
  // var dropX = 
  console.log("bound rect");
  console.log(boundRect);
}





//1
// document.onmousemove = mouseMove;
// function mouseMove(ev){
//   ev           = ev || window.event;
//   var mousePos = mouseCoords(ev);
// }
// function mouseCoords(ev){
//   if(ev.pageX || ev.pageY){
//     return {x:ev.pageX, y:ev.pageY};
//   }
//   return {
//     x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,
//     y:ev.clientY + document.body.scrollTop  - document.body.clientTop
//   };
// }




//2
// document.onmouseup = mouseUp;
// var dragObject     = null;
// function makeClickable(object){
//   object.onmousedown = function(){
//     dragObject = this;
//   }
// }
// function mouseUp(ev){
//   dragObject = null;
// }



//3
// document.onmousemove = mouseMove;
// document.onmouseup   = mouseUp;
// var dragObject  = null;
// var mouseOffset = null;
// function getMouseOffset(target, ev){
//   ev = ev || window.event;
//   var docPos    = getPosition(target);
//   var mousePos  = mouseCoords(ev);
//   return {x:mousePos.x - docPos.x, y:mousePos.y - docPos.y};
// }
// function getPosition(e){
//   var left = 0;
//   var top  = 0;
//   while (e.offsetParent){
//     left += e.offsetLeft;
//     top  += e.offsetTop;
//     e     = e.offsetParent;
//   }
//   left += e.offsetLeft;
//   top  += e.offsetTop;
//   return {x:left, y:top};
// }
// function mouseMove(ev){
//   ev           = ev || window.event;
//   var mousePos = mouseCoords(ev);
//   if(dragObject){
//     dragObject.style.position = 'absolute';
//     dragObject.style.top      = mousePos.y - mouseOffset.y;
//     dragObject.style.left     = mousePos.x - mouseOffset.x;
//     return false;
//   }
// }
// function mouseUp(){
//   dragObject = null;
// }
// function makeDraggable(item){
//   if(!item) return;
//   item.onmousedown = function(ev){
//     dragObject  = this;
//     mouseOffset = getMouseOffset(this, ev);
//     return false;
//   }
// }