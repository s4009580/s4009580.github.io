// scripting the video

const myVideo = document.querySelector("#my-video");
console.log(myVideo);

// The following code allows me to play and pause a video on click of a button

const playPauseButton = document.querySelector("#play-pause-btn");
console.log(playPauseButton);

const playPauseImg= document.querySelector("#play-pause-img");
console.log(playPauseImg);

playPauseButton.addEventListener("click", toggleVideoPlayback);

function toggleVideoPlayback()
{
    if(myVideo.paused || myVideo.ended)
    {
        playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
        myVideo.play();
    }
    else
    {
        playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
        myVideo.pause();
    }
}

// This is a start stop timer code from https://stackoverflow.com/questions/63798545/how-to-stop-timer-count-and-start-with-saved-time //

const ret = document.getElementById("timer");
const startBtn = document.querySelector("#start-timer");

let counter = 0;
let interval;

function stop() {
  clearInterval(interval);
  startBtn.disabled = false;
}

function convertSec(cnt) {
  let sec = cnt % 60;
  let min = Math.floor(cnt / 60);
  if (sec < 10) {
    if (min < 10) {
      return "0" + min + ":0" + sec;
    } else {
      return min + ":0" + sec;
    }
  } else if ((min < 10) && (sec >= 10)) {
    return "0" + min + ":" + sec;
  } else {
    return min + ":" + sec;
  }
}

function start() {
  startBtn.disabled = true;
  interval = setInterval(function() {
    ret.innerHTML = convertSec(counter++); // timer start counting here...
  }, 1000);
}