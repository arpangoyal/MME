var slideImg = document.getElementById("slideImg");
var images = new Array(
  "images/cover660_012319124503.jpg",
  "images/gettyimages-1012190542-640x640.jpg",
  "images/gyan-shahane-eSoyrx3YIwk-unsplash.jpg",
  "images/indian-farmer-with-agronomist-cotton-field-showing-some-information-tab_54391-2370.jpg",
  "images/istockphoto-1284379612-170667a.jpg"
);

var len = images.length;
var i = 0;
function slider() {
  if (i > len - 1) {
    i = 0;
  }
  slideImg.src = images[i];
  i++;
  setTimeout("slider()", 3000);
}
