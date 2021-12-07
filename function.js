var myImage = document.getElementById("getImage");
var picArray = [
  "rabbit.jpg",
  "pic1.jfif",
  "pic2.jfif",
  "pic3.jfif",
  "pic4.jfif",
];
var picIndex = 1;

function changeImage() {
  console.log(1);
  console.log(picIndex);
  myImage.setAttribute("src", picArray[picIndex]);
  picIndex++;
  if (picIndex >= picArray.length) {
    picIndex = 0;
  }
}

function showAuthor() {
  var element = document.getElementById("author");
  if (element.style.visibility == "hidden") {
    element.style.visibility = "visible";
  } else {
    element.style.visibility = "hidden";
  }
}