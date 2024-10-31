 // JavaScript to detect scroll position and adjust navbar style
  window.addEventListener("scroll", () => {
    const navmenu = document.querySelector(".nav-menu");
    if (window.scrollY > 0) {
      navmenu.classList.add("scrolled");
    } else {
      navmenu.classList.remove("scrolled");
    }
  });
