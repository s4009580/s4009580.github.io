const draggableListItems = document.querySelectorAll('container div');

//current pokemon being dragged
let selectedId;

//target generation
let dropTargetID;

addEventListeners();

function dragStart() {
  selectedID = this.id;
}

function dragEnter(){
  this.classList.add('over');
}

function dragLeave() {
  this.classList.remove('over')
}

function dragOver(ev) {
  ev.preventDefault();
}

function dragDrop() {
  dropTargetID = this.id; 

  if (checkForMatch(selectedId, dropTargetID)) {
    document.getElementById(selectedId).style.display = 'none';
  
    matchingCounter++;
  }

  this.classList.remove('over');
}

function checkForMatch(selected, dropTarget) {
  switch (selected) {
    case 'p1':

      return dropTarget === 'g1' ? true : false;
      case 'p2':

      return dropTarget === 'g1' ? true : false;
      case 'p3':

      return dropTarget === 'g2' ? true : false;
      case 'p4':

      return dropTarget === 'g2' ? true : false;
      case 'p5':

      return dropTarget === 'g1' ? true : false;

      default:

  }
}



function addEventListeners() {
draggableListItems.forEach (item => {
  item.addEventListener('dragstart', dragStart)
  item.addEventListener('dragenter', dragEnter)
  item.addEventListener('dragdrop', dragDrop)
  item.addEventListener('dragover', dragOver)
  item.addEventListener('dragleave', dragLeave)
})
}









// let draggedElement = null;

// const colorBox = document.querySelector(".colorbox");
// const dropBox = document.querySelector(".dropbox");

// colorBox.addEventListener("dragstart", startDrag);

// function startDrag() {
//   draggedElement = colorBox;
// }

// dropBox.addEventListener("dragover", endDrag);

// function endDrag(event) {
//   event.preventDefault();
// }

// dropBox.addEventListener("drop", handleDrop);

// function handleDrop() {
//   if (draggedElement) {
//     const color = window
//       .getComputedStyle(draggedElement)
//       .getPropertyValue("background-color");
//     // const color = draggedElement.style.backgroundColor;
//     dropBox.style.backgroundColor = color;
//     dropBox.textContent = "Correct!";
//     draggedElement = null;
//   }
// }