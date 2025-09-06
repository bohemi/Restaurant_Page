import "./styles.css";
import "./homePage.js";
import "./menuPage.js";
import { showHomePage, removeHomePage } from "./homePage.js";
import { showMenuPage, removeMenuPage } from "./menuPage.js";

//homeBtn menuBtn aboutBtn
const homeButton = document.getElementById("homeBtn");
const menuButton = document.getElementById("menuBtn");
// default page at the start
showHomePage();
// buttons behaviour
homeButton.addEventListener("click", (event) => {
    showHomePage();
    removeMenuPage();
})
menuButton.addEventListener("click", (event) => {
    showMenuPage();
    removeHomePage();
})