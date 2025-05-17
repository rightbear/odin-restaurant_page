import "./styles.css";
import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadAbout } from "./about";

//Remove all children in div #element
const content = document.querySelector("#content");
const navButtons = document.querySelectorAll("nav > button");

//Add different EventListener to specific button on Top Navigation Bar
navButtons.forEach((navButton) => {
    //Load Home page when clicked
    if(navButton.id == "home"){
        navButton.addEventListener("click", (e) => {
            clearParent(content);
            loadHome(content);
        });
    }
    //Load Menu page when clicked
    else if(navButton.id == "menu"){
        navButton.addEventListener("click", (e) => {
            clearParent(content);
            loadMenu(content);
        });
    }
    //Load About page when clicked
    else{
        navButton.addEventListener("click", (e) => {
            clearParent(content);
            loadAbout(content);
        });
    }
});

//The default front page is Home page
loadHome(content);

//Remove all children node in one parent node
const clearParent = function(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}