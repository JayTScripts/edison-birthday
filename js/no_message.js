const openBtn = document.querySelector(".js-card-opener");
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
    if(!open){
      document.body.classList.toggle("flipUp")
      flipUp = !flipUp;
    }

  }

};