let logo = document.getElementById("logo");
let menuLinks = document.getElementById("myLinks");
let hamburger = document.getElementById("hamburger");
let hamOptions = menuLinks.querySelectorAll("a");

const handleEvent = (element) => {
  // open/close nav menu
  console.log("Handle event");

  // if logo is clicked on
  if (element === "logo") {
    if (menuLinks.style.display === "block") {
      menuLinks.style.display = "none";
    }
    return;
  }

  // all other scenarios
  if (menuLinks.style.display === "block") {
    menuLinks.style.display = "none";
  } else {
    menuLinks.style.display = "block";
  }
};

// Event Listeners
hamburger.addEventListener("click", () => {
  console.log("Hamburger was clicked");
  handleEvent();
});

menuLinks.addEventListener("click", () => {
  console.log("Menu item clicked");
  handleEvent();
});

logo.addEventListener("click", () => {
  console.log("Logo clicked");
  handleEvent("logo");
});
