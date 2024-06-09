document.addEventListener("DOMContentLoaded", function() {
    const hamburgerContainer = document.querySelector(".hamburger-container");
    const overlayMenu = document.querySelector(".overlay-menu");
    const closeBtn = document.querySelector(".close-btn");

    hamburgerContainer.addEventListener("click", function() {
        overlayMenu.classList.add("active");
    });

    closeBtn.addEventListener("click", function() {
        overlayMenu.classList.remove("active");
    });

    const overlayMenuItems = overlayMenu.querySelectorAll(".overlay-buttons button");
    overlayMenuItems.forEach((item, index) => {
        if (index !== overlayMenuItems.length - 1) { 
            item.addEventListener("mouseover", function() {
                item.style.color = "#FF5555";
            });
            item.addEventListener("mouseout", function() {
                item.style.color = "";
            });
        }
    });
});
