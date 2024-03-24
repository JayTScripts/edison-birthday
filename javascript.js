const openBtn = document.querySelector(".js-card-opener");
let song = new Audio("birthday_song.mp3");
let audioPlaying = false;

openBtn.onclick = function () {
  document.body.classList.toggle("open");
  if (!audioPlaying){
    song.play();  
  } else {
    song.pause();
    song.currentTime = 0;
  }
  audioPlaying = !audioPlaying;
};
