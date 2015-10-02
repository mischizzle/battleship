/** Capturing click event, then mousemoves events - terminated by mouse up **/

function dragAndDrop(dragTarget, dropTargets) {


// Get the three major events
  var mouseup = Rx.Observable.fromEvent(dragTarget, 'mouseup', dropEl);
  var mousemove = Rx.Observable.fromEvent(document, 'mousemove');
  var mousedown = Rx.Observable.fromEvent(dragTarget, 'mousedown');

//var mouseover = Rx.Observable.fromEvent(dropTarget, 'mouseover');

  var mousedrag = mousedown.flatMap(function (md) {

    // calculate offsets when mouse down
    var startX = md.offsetX, startY = md.offsetY;

    //calculate delta with mousemove until mouseup
    return mousemove.map(function (mm) {

      var mm_x = mm.clientX - startX;
      var mm_y = mm.clientY - startY;
      var dropCoords = dragTarget.getBoundingClientRect();

      mm.preventDefault();

      detectHover(dropCoords.left, dropCoords.top, dropCoords.right, dropCoords.bottom);

      return {
        left: mm_x,
        top: mm_y
      };
    }).takeUntil(mouseup);
  });

// Update position
  mousedrag.subscribe(function (pos) {
    dragTarget.style.top = pos.top + 'px';
    dragTarget.style.left = pos.left + 'px';
  });


  function detectHover(left, top, right, bottom) {

    var cellCoords;

    for (var i = 0; i < dropTargets.length; i++) {
      cellCoords = dropTargets[i].getBoundingClientRect();

      //if(left > c0.left && right > c0.right) {
      if (right >= Math.floor(cellCoords.left) && left <= Math.floor(cellCoords.right) && top >= Math.floor(cellCoords.top) && bottom <= Math.floor(cellCoords.bottom)) {
        //if(right >= Math.floor(cellCoords.left) && left <= Math.floor(cellCoords.right) && top <= Math.floor(cellCoords.bottom) && bottom >= Math.floor(cellCoords.top)) {

        dropTargets[i].classList.add("dropZoneEnabled");
      } else {
        dropTargets[i].classList.remove("dropZoneEnabled");
      }
    }
  }

  function dropEl(dragTarget) {

    //if(inDropZone(dragTarget.x, dragTarget.y, dropTarget)) {
    //  //placeShip();
    //} else {
    //  //resetToStartingPosition(dragTarget);
    //}
  }

//function inDropZone (x, y, dropTarget) {
//  var boundRect = dropTarget.getBoundingClientRect();
//  console.log(boundRect.left + boundRect.width);
//  return (x <= (boundRect.left + boundRect.width) && x >= boundRect.left) && (y <= (boundRect.top + boundRect.height) && y >= boundRect.top);
//}
//
//function resetToStartingPosition(el) {
//  el.style.top = 0;
//  el.style.left = 0;
//}
//
//function snapIntoPosition() {
//  //function used to center placed ship into place
//}

}