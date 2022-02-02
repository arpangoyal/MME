var slideImg = document.getElementById("slideImg");
var images = new Array(
  "images/cover660_012319124503.jpg",
  "images/gettyimages-1012190542-640x640.jpg",
  "images/gyan-shahane-eSoyrx3YIwk-unsplash.jpg",
  "images/indian-farmer-with-agronomist-cotton-field-showing-some-information-tab_54391-2370.jpg",
  "images/istockphoto-1284379612-170667a.jpg"
);

var mobileimages=new Array(
  "images/mobile1.jpg",
  "images/mobile2.jpg",
  "images/mobile3.jpg"
)

var len = images.length;
var lenmobile = mobileimages.length;
var i = 0,j=0;
function slider() {
  if (i > len - 1) {
    i = 0;
  }
  slideImg.src = images[i];
  i++;
  if (window.outerWidth < 900) {
    return;
  }
  
  setTimeout("slider()", 3000);
}
let initialload = false;
if (initialload == false) {
  slider();
  initialload = true;
}
console.log(window);

if (window.outerWidth > 900) {
  slider();
}
if (window.outerWidth <480) {
  mobileimages();
}


function sliderphone() {
  if (j > lenmobile - 1) {
    j = 0;
  }
  slideImg.src = mobileimages[i];
  i++;
  if (window.outerWidth > 900) {
    return;
  }
  
  setTimeout("sliderphone()", 3000);
}