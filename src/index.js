import homeHTML from "./pages/home";
import aboutHTML from "./pages/about";
import menuHTML from "./pages/menu";
import navBarHTML from "./pages/navbar";

document.body.insertAdjacentHTML("beforebegin", navBarHTML);
document.body.insertAdjacentHTML("afterbegin", homeHTML);
if (document.getElementById("heroSlider") != null) {
console.log("lol");
}

let navBar = document.querySelectorAll(".nav-item");
console.log(navBar);
navBar.forEach((page) =>
page.addEventListener("click", function () {
    console.log(page.textContent);
    switch (page.textContent.trim()) {
    case "Home":
        console.log(page.textContent);
        document.getElementById("about") === null
        ? document.getElementById("menu").remove()
        : document.getElementById("about").remove();
        document.body.insertAdjacentHTML("afterbegin", homeHTML);
        break;
    case "Menu":
        console.log(page.textContent);
        document.getElementById("about") === null
        ? document.getElementById("heroSlider").remove()
        : document.getElementById("about").remove();
        document.body.insertAdjacentHTML("afterbegin", menuHTML);
        break;
    case "About":
        console.log(page.textContent);
        document.getElementById("menu") === null
        ? document.getElementById("heroSlider").remove()
        : document.getElementById("menu").remove();
        document.body.insertAdjacentHTML("afterbegin", aboutHTML);
        break;
    default:
        console.log("yo");
        break;
    }
})
);
