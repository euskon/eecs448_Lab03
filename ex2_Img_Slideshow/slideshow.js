let imgIndex = 0;
function img_iterate(){

}
function nextSlide(n){
  let slides = ["https://picsum.photos/200", "https://picsum.photos/201", "https://picsum.photos/202", "https://picsum.photos/203"]
  if ((imgIndex + n) > slides.length){

  }

  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
}
