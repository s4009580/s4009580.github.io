//console.log("hello")
//let city = prompt("what is this city called?")
//console.log("this city is", city);

//let assignment1 = "20"
//let assignment2 = "30" 
//let assignment3 = "30"

//let total = 
//parseInt(assignment1) + parseInt(assignment2) + parseInt(assignment3);
//console.log("my total score is", total);



let body = document.querySelector("body");
function checkWeather() {
//let temperature = prompt("what is the outside temperature?");
let temp = document.querySelector("#temperature");
let temperature = temp.value;


if(temperature>=10 && temperature<20)
{
    console.log("it feels cold");
    body.style.backgroundColor = "lightblue";

}
else if (temperature >=20 && temperature<30)
{
    console.log("it feels warm and sunny");
    body.style.backgroundColor = "orange";

}
else if (temperature>30)
{
    console.log("it is boiling")
    body.style.backgroundColor = "red";
}
else if (temperature<10)
{
    console.log("it is freezing")
    body.style.backgroundColor = "gray";
}
}