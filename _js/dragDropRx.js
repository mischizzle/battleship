/** Capturing click event, then mousemoves events - terminated by mouse up **/

function dragAndDrop(dragTarget, dropTargets) {

  //console.log("inisialize targets", dragTarget);


  // Get the three major events
  var mouseup = Rx.Observable.fromEvent(dragTarget, 'mouseup', dropEl),
      mousemove = Rx.Observable.fromEvent(document, 'mousemove'),
      mousedown = Rx.Observable.fromEvent(dragTarget, 'mousedown'),
      subscription,
      coordinates = [];

  var mousedrag = mousedown.flatMap(function (md) {

    // calculate offsets when mouse down
    var startX = md.offsetX, startY = md.offsetY;

    //calculate delta with mousemove until mouseup
    return mousemove.map(function (mm) {

      var mm_x = mm.clientX - startX,
          mm_y = mm.clientY - startY,
          dropCoords = dragTarget.getBoundingClientRect();

      mm.preventDefault();

      detectHover(dropCoords.left, dropCoords.top, dropCoords.right, dropCoords.bottom);

      return {
        left: mm_x,
        top: mm_y
      };
    }).takeUntil(mouseup);
  });

  // Update position
  subscription =  mousedrag.subscribe(function (pos) {
    dragTarget.style.top = pos.top + 'px';
    dragTarget.style.left = pos.left + 'px';
  });


  function detectHover(left, top, right, bottom) {

    //empty again to reset
    coordinates = [];

    for (var i = 0; i < dropTargets.length; i++) {
      cellCoords = dropTargets[i].getBoundingClientRect();

      if (right >= Math.floor(cellCoords.left) && left <= Math.floor(cellCoords.right) && top >= Math.floor(cellCoords.top) && bottom <= Math.floor(cellCoords.bottom)) {
        dropTargets[i].classList.add("dropZoneEnabled");
        //dropTargets[i].shipId = dragTarget.srcElement.id;
        //console.log(dropTargets[i].firstElementChild.cell);
        coordinates.push(dropTargets[i].firstElementChild.cell.coordinates);
      } else {
        dropTargets[i].classList.remove("dropZoneEnabled");
        dropTargets[i].shipId = "";
      }
    }
  }

  function dropEl(dragTarget) {

    var cellWidth = dropTargets[0].clientWidth;
    var cellDropTotal = Math.ceil(dragTarget.srcElement.clientWidth / cellWidth);

    console.log(typeof coordinates.length);
    console.log(typeof cellDropTotal);

    if(coordinates.length === cellDropTotal){
      console.log("placed", dragTarget.srcElement.id);
      subscription.dispose();
    } else {
      console.log("please place ship correctly");
    }
  }

  function snapIntoPosition() {
    //function used to center placed ship into place
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


}