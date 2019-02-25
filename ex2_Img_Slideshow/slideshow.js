let imgIndex = 0;
let slides = ["https://picsum.photos/200",
              "https://picsum.photos/201",
              "https://picsum.photos/202",
              "https://ae01.alicdn.com/kf/HTB1HDKwSFXXXXb1XpXXq6xXFXXXs.jpg?size=110782&height=800&width=800&hash=d0f3c74ddb1ad6f68d90143dc1376c08"];
function iterateSlide(n){
  let nextIndex = imgIndex + n
  if (nextIndex > (slides.length - 1)){
    imgIndex = 0;
  } else if(nextIndex < 0){
    imgIndex = slides.length - 1;
  } else{
    imgIndex = nextIndex;
  }
  //if (n < 0) {slideIndex = slides.length}
  console.log(imgIndex);
  document.getElementById("myImg").src = slides[imgIndex];

}
