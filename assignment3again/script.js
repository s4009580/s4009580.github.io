// https://www.youtube.com/watch?v=twq9WHgUhQc&t=94s I had followed this tutorial and repository for this script 
const draggableListItems = document.querySelectorAll('.draggable-list li');
const endMessage = document.getElementById('endMessage');

// current Pokemon being dragged
let selectedId;

// target generation
let dropTargetId;

// counter for correct 
let matchingCounter = 0;

addEventListeners();

function dragStart() {
  selectedId = this.id;
}

function dragEnter() {
  this.classList.add('over');
}

function dragLeave() {
  this.classList.remove('over');
}

function dragOver(ev) {
  ev.preventDefault();
}

function dragDrop() {
  dropTargetId = this.id;

  if (checkForMatch(selectedId, dropTargetId)) {
    document.getElementById(selectedId).style.display = 'none';
    // document.getElementById(dropTargetId).style.display = 'none';
    matchingCounter++;
  } else if (checkForMatch2(selectedId, dropTargetId)) {
    document.getElementById(selectedId).style.display = 'none';
    // document.getElementById(dropTargetId).style.display = 'none';
    // ^^ This code means the 'gen' boxes will disappear once the Pokemon are dragged in but that would mean new pokemon won't be able to go into the same gen.
    matchingCounter++;
  }

  if (matchingCounter === 18) {
    endMessage.style.display = 'block';
  }

  this.classList.remove('over');
}
// Allows for the pokemon to 'hide' once they're placed in the correct box.
function checkForMatch(selected, dropTarget) {
  switch (selected) {
    case 'e1':
      return dropTarget === 's1' ? true : false;

    case 'e2':
      return dropTarget === 's1' ? true : false;

    case 'e3':
      return dropTarget === 's5' ? true : false;

    case 'e4':
      return dropTarget === 's2' ? true : false;

    case 'e5':
      return dropTarget === 's4' ? true : false;

      case 'e6':
      return dropTarget === 's2' ? true : false;

      case 'e7':
      return dropTarget === 's5' ? true : false;

      case 'e8':
      return dropTarget === 's5' ? true : false;

      case 'e9':
      return dropTarget === 's3' ? true : false;

      case 'e10':
      return dropTarget === 's5' ? true : false;

      case 'e11':
      return dropTarget === 's4' ? true : false;

      case 'e12':
      return dropTarget === 's5' ? true : false;

      case 'e13':
      return dropTarget === 's1' ? true : false;

      case 'e14':
      return dropTarget === 's5' ? true : false;

      case 'e15':
      return dropTarget === 's3' ? true : false;

      case 'e16':
      return dropTarget === 's2' ? true : false;

      case 'e17':
      return dropTarget === 's3' ? true : false;

      case 'e18':
      return dropTarget === 's4' ? true : false;


    default:
      return false;
  }
}

function checkForMatch2(selected, dropTarget) {
  switch (selected) {
    case 's1':
      return dropTarget === 'e1' ? true : false;

    case 's1':
      return dropTarget === 'e2' ? true : false;

    case 's6':
      return dropTarget === 'e3' ? true : false;

    case 's2':
      return dropTarget === 'e4' ? true : false;

    case 's4':
      return dropTarget === 'e5' ? true : false;

      case 's2':
        return dropTarget === 'e6' ? true : false;
  
      case 's6':
        return dropTarget === 'e7' ? true : false;
  
      case 's6':
        return dropTarget === 'e8' ? true : false;
  
      case 's3':
        return dropTarget === 'e9' ? true : false;
  
      case 's5':
        return dropTarget === 'e10' ? true : false;

        case 's4':
            return dropTarget === 'e11' ? true : false;
      
          case 's5':
            return dropTarget === 'e12' ? true : false;

            case 's1':
            return dropTarget === 'e13' ? true : false;

            case 's5':
            return dropTarget === 'e14' ? true : false;

            case 's3':
            return dropTarget === 'e15' ? true : false;

            case 's2':
            return dropTarget === 'e16' ? true : false;

            case 's3':
            return dropTarget === 'e17' ? true : false;

            case 's4':
            return dropTarget === 'e18' ? true : false;

   


    default:
      return false;
  }
}

function playAgain() {
  matchingCounter = 0;
  endMessage.style.display = 'none';
  draggableListItems.forEach(item => {
    document.getElementById(item.id).style.display = 'block';
  })
}

function addEventListeners() {
  draggableListItems.forEach (item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragover', dragOver);
    item.addEventListener('dragleave', dragLeave);
  })
}



// This was the script from Rohit's drag and drop site but I realised there wasn't much to work with here. We didn't run it through class very much so I don't understand most of it. 
// Running into this problem, I decided to look for guidance elsewhere, be it a page source of another site or a tutorial online. 

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