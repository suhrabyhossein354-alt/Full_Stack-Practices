let curent_index = 1;
const button = document.querySelector(".button");
const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");
const image3 = document.querySelector(".img3");
const image4 = document.querySelector(".img4");
const arrow1 = document.querySelector(".arrow1");
const arrow2 = document.querySelector(".arrow2");
const arrow3 = document.querySelector(".arrow3");
const arrow4 = document.querySelector(".arrow4");

function buttonC(button) {
  button.addEventListener("click", () => {
    if (curent_index === 1) {
      image1.classList.remove("black");
      image2.classList.add("black");
      image3.classList.add("black");
      image4.classList.add("black");
      arrow1.classList.remove("hide");
      arrow2.classList.add("hide");
      arrow3.classList.add("hide");
      arrow4.classList.add("hide");
    } else if (curent_index === 2) {
      image1.classList.add("black");
      image2.classList.remove("black");
      image3.classList.add("black");
      image4.classList.add("black");
      arrow1.classList.add("hide");
      arrow2.classList.remove("hide");
      arrow3.classList.add("hide");
      arrow4.classList.add("hide");
    } else if (curent_index === 3) {
      image1.classList.add("black");
      image2.classList.add("black");
      image3.classList.add("black");
      image4.classList.remove("black");
      arrow1.classList.add("hide");
      arrow2.classList.add("hide");
      arrow3.classList.remove("hide");
      arrow4.classList.add("hide");
    } else if (curent_index === 4) {
      image1.classList.add("black");
      image2.classList.add("black");
      image3.classList.remove("black");
      image4.classList.add("black");
      arrow1.classList.add("hide");
      arrow2.classList.add("hide");
      arrow3.classList.add("hide");
      arrow4.classList.remove("hide");
    }
    curent_index++;
    if(curent_index === 5){
        curent_index = 1
    }
  });
}

buttonC(button);
