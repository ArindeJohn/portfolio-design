


const imgText1 = $(".img-text1");
const imgText2 = $(".img-text2");
const imgText3 = $(".img-text3");
const imgText4 = $(".img-text4");


const imgBody1 = $(".img1-Body")
const imgBody2 = $(".img2-Body")
const imgBody3 = $(".img3-Body")
const imgBody4 = $(".img4-Body")

const overlap1 = $(".overlap1")
const overlap2 = $(".overlap2")
const overlap3 = $(".overlap3")
const overlap4 = $(".overlap4")

const original = $(".original");
const backIcon = $(".icon-less");




function handleImgBodyClick(overlap, original) {
  
    original.css("opacity", "10%");
    overlap.removeClass("why");
    backIcon.click(() => {
      original.css("opacity", "100%");
      overlap.addClass("why");
    });

}


$(".img-body").click((event) => {
  var ball = event.currentTarget.classList[0];
  switch (ball) {
    case "img1-Body":
      handleImgBodyClick(overlap1, original);
      
      break;
    case "img2-Body":
      handleImgBodyClick( overlap2, original);
      break;
    case "img3-Body":
      handleImgBodyClick( overlap3, original);
      break;
    case "img4-Body":
      handleImgBodyClick(overlap4, original);
      break;
    default:
      console.log("other");
      break;
  }
});


function handleImgBodyHover(imgText, imgBody) {
  imgText.removeClass("why");
  imgBody.addClass("opaq").css("opacity", "10%");
}

function handleImgBodyHoverOut(imgText, imgBody) {
  imgText.addClass("why");
  imgBody.css("opacity", "100%").removeClass("opaq");
}

$(".img-body").hover(
  (event) => {
    var ball = event.currentTarget.classList[0];
    switch (ball) {
      case "img1-Body":
        handleImgBodyHover(imgText1, imgBody1);
        break;
      case "img2-Body":
        handleImgBodyHover(imgText2, imgBody2);
        break;
      case "img3-Body":
        handleImgBodyHover(imgText3, imgBody3);
        break;
      case "img4-Body":
        handleImgBodyHover(imgText4, imgBody4);
        break;
      default:
        console.log("error from hover on");
        break;
    }
  },
  (event) => {
    var ball = event.currentTarget.classList[0];
    switch (ball) {
      case "img1-Body":
        handleImgBodyHoverOut(imgText1, imgBody1);
        break;
      case "img2-Body":
        handleImgBodyHoverOut(imgText2, imgBody2);
        break;
      case "img3-Body":
        handleImgBodyHoverOut(imgText3, imgBody3);
        break;
      case "img4-Body":
        handleImgBodyHoverOut(imgText4, imgBody4);
        break;
      default:
        console.log("error from hover out");
        break;
    }
  }
);
