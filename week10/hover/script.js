const catImg = document.querySelector("#cat-img");
console.log(catImg);

const moreInfo = document.querySelector("#more-info");
console.log(moreInfo);

catImg.addEventListener("mouseover", showInfo);
catImg.addEventListener("mouseout", hideInfo);

moreInfo.innerHTML = "<p> ur stinky </p>";

function showInfo()
{
 moreInfo.classList.add("show");
//  moreInfo.stylebackground whatever
}

function hideInfo()
{
moreInfo.classList.remove("show")
}