// When the user scrolls the page, execute myFunction
window.onscroll = () => {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
};

// Get the navbar
var footer = document.getElementsByTagName("footer");

// Get the offset position of the footer
var sticky = footer.offsetTop;