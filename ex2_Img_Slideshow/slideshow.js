let imgIndex = 0;
let slides = ["https://picsum.photos/200",
              "https://picsum.photos/201",
              "https://picsum.photos/202",
              "https://picsum.photos/203"];
function img_iterate(){

}
function nextSlide(n){

  if ((imgIndex + n)> slides.length){
    imgIndex = 0;
  } else{
    imgIndex += n;
  }
  //if (n < 0) {slideIndex = slides.length}
  document.getElementById("myImg").src = slides[imgIndex];

}
