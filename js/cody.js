const openBtn = document.querySelector(".js-card-opener");
let song = new Audio("../media/cody_song.mp3");
let audioPlaying = false;
let flipUp = false;
let open = false;

openBtn.onclick = function () {
  if(!flipUp){
    document.body.classList.toggle("flipUp")
    flipUp = !flipUp;
  }
  else{
    document.body.classList.toggle("open");
    open = !open;
    if (!audioPlaying){
      song.play();  
    } else {
      song.pause();
      song.currentTime = 0;
    }
    audioPlaying = !audioPlaying;

    if(!open){
      document.body.classList.toggle("flipUp")
      flipUp = !flipUp;
    }

  }

};