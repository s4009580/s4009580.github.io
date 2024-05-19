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
        playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
        myVideo.play();
    }
    else
    {
        playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
        myVideo.pause();
    }
}

// The following code will play the song 'Cocktail Hour' in the song queue

const cocktailAudio = document.querySelector("#cocktail-audio")
console.log(cocktailAudio);

const playBtn = document.querySelector("#play-btn");
console.log(playBtn);

playBtn.addEventListener("click", playCocktailAudio);

function playCocktailAudio() {
    cocktailAudio.play();
}

// This code will allow users to pause the track 'violet spirit' in the preview
const pauseBtn = document.querySelector("#pause-btn");
console.log(pauseBtn);

pauseBtn.addEventListener("click", pauseCocktailAudio);

function pauseCocktailAudio() {
    cocktailAudio.pause();
}


// The following code will play the song 'violet spirit' in the song queue

const violetAudio = document.querySelector("#violet-audio")
console.log(violetAudio);

const playButton = document.querySelector("#play-button");
console.log(playButton);

playButton.addEventListener("click", playVioletAudio);

function playVioletAudio() {
    violetAudio.play();
}

// This code will allow users to pause the track 'violet spirit' in the preview
const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

pauseButton.addEventListener("click", pauseVioletAudio);

function pauseVioletAudio() {
    violetAudio.pause();
}
// The following code allows me to mute and unmute a video on click of a button

const muteUnmuteButton = document.querySelector("#mute-unmute-btn");
console.log(muteUnmuteButton);

muteUnmuteButton.addEventListener("click", toggleSound);

myVideo.addEventListener("click", toggleSound);
function toggleSound()
{
    if(myVideo.muted)
    {

    muteUnmuteButton.style.backgroundColor = "#ac875e"
        myVideo.muted = false;

    }
    else
    {
        muteUnmuteButton.style.backgroundColor = "#755837"
        myVideo.muted = true;
    }
}

// ----------------------------------------------------------
// The following code will show the progress of the video //
myVideo.addEventListener("timeupdate", updateProgressBar);

const progressBarFill = document.querySelector("#progress-bar-fill");
console.log(progressBarFill);

function updateProgressBar()
{
const progress = (myVideo.currentTime / myVideo.duration) * 100;
progressBarFill.style.width = progress + "%";
console.log(progress);
}

// This is a start stop timer code from https://stackoverflow.com/questions/63798545/how-to-stop-timer-count-and-start-with-saved-time //
// there is a minor delay at the start but I don't want to touch anything and ruin it...
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


// This code will make a 'click' sound when pressing the start and stop on the timer. The feedback of the buttons are mirroring that of pomodoro.io
// const startButton = document.querySelector("#start-timer");
// console.log(startButton)

// const clickSound = document.querySelector("#click-sound")

// startButton.addEventListener("click", playClickSound);

// function playClickSound()
// {
// clickSound.play()
// } -- hmm I was hoping this would work but it must be because the functionality of the button affected too much by the fact it's a pre-typed code it didn't have priority? please help :,)

// // This code will play song preview 1

// const playPauseButton = document.querySelector("#play-pause-bttn");
// console.log(playPauseButton);

// const playPauseImg= document.querySelector("#play-pause-imgg");
// console.log(playPauseImg);

// playPauseButton.addEventListener("click", toggleVideoPlayback);

// function toggleVideoPlayback()
// {
//     if(myVideo.paused || myVideo.ended)
//     {
//         playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
//         myVideo.play();
//     }
//     else
//     {
//         playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
//         myVideo.pause();
//     }
// }

// I wanted a play/pause function within the song previews but I wanted the picture to be interactive to play the song instead, clicking on the picture plays the audio of the song!