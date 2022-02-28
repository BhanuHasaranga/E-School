function load() {
    const toggleButton = document.getElementById("menu-toggle");
    const menu = document.getElementById("nav-menu");
  
    toggleButton.addEventListener("click", () => {
      menu.classList.toggle("active");
      toggleButton.classList.toggle("active");
    });
  }
  