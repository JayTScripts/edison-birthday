const openBtn = document.querySelector(".js-card-opener");
let song = new Audio("../media/cody_song.mp3");
let audioPlaying = false;

openBtn.onclick = function () {
  document.body.classList.toggle("open");
  if (!audioPlaying){
    song.play();  
    song.loop = true;
  } else {
    song.pause();
    song.currentTime = 0;
  }
  audioPlaying = !audioPlaying;
};
