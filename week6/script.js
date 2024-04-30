// const myHeading = document.querySelectorAll("p");
// console.log(myHeading);
// // console.log(myHeading.textContent);
// // myHeading.textContent = "Seventeen right here";
// // myHeading.style.backgroundColor="aqua"
// // for (let i =0; i<3; i++)
// // {
// //     myHeading[i].textContent = "yippee" + i;
// //     myHeading [i].style.backgroundColor = "pink";
// // }
// myHeading.forEach(changeMe);

// function changeMe(item) {
//     // item.style.backgroundColor = "purple"
//     item.classList.add("purple-box")
// }



// const myImage = document.querySelector("#my-image");
// console.log(myImage);
// myImage.classList.add("round");

const myButton = document.querySelector("#my-button");
console.log (myButton)


myButton.addEventListener("click", chooseTopic); 

function toggleMe()
{
    const myImage = document.querySelector("#my-image");
    // console.log(myImage);
    console.log(myImage.dataset.catname); 
    myImage.classList.toggle("round");
    myButton.textContent = myImage.dataset.catname;
}

function chooseTopic () {
    const mnyPara = document.querySelectorAll("p");
    mnyPara.forEach(displayTopic);
    function displayTopic(item)
    { 
        if (item.dataset.topic ==="game")
        {
            item.classList.add("purple-box");
        }
       else if (item.dataset.topic==="web")
       {
           item.classList.add("coral-box");
       }

    }

}

const myTitle = document.querySelector("h1");
myTitle.textContent = "I am now a new heading";
let course = "yippee";
const myImage = document.querySelector("#my-image");
myTitle.innerHTML = `I am a <span class="coral-box">new ${myImage.dataset.catname}</span>`

myImage.addEventListener("mouseover", makeItRound);
myImage.addEventListener("mouseout", makeItSqaure);

function makeItRound (){
    myImage.classList.add("round");
}

function makeItSqaure() {
    myImage.classList.remove("round");
}