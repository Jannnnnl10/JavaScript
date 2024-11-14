
var alle = document.getElementsByTagName("a");
for (var i = 0; i < alle.length; i++) {
    alle[i].addEventListener("mouseover", hoverAn);
    alle[i].addEventListener("mouseout", hoverAb);
}

function hoverAn(e) {
    console.log("an");
    e.target.parentElement.classList.add("hover");
}

function hoverAb(e) {
    console.log("ab");
    e.target.parentElement.classList.remove("hover");

}