// toggle menu

var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menuToggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

//script for product gallery

const productImg = document.getElementById("productImg");
const smallImg = document.getElementsByClassName("small-img");
console.log(smallImg);

smallImg[0].onclick = function () {
  productImg.src = smallImg[0].src;
};
smallImg[1].onclick = function () {
  productImg.src = smallImg[1].src;
};
smallImg[2].onclick = function () {
  productImg.src = smallImg[2].src;
};
smallImg[3].onclick = function () {
  productImg.src = smallImg[3].src;
};
