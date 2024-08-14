let imageArray = document.querySelectorAll(".sub-img-container img");
let num = 0;
function changeImage(number) {
    document.getElementById("display").src = imageArray[number].currentSrc;
}
setInterval(function () {
    if (num >= 5) {
        num = 0;
    }
    else {
        document.getElementById("display").src = imageArray[num].currentSrc;
        num++;
    }
}, 2000);