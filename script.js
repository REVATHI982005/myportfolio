const hamburger = document.querySelector(".hamburger");
        const menu_bar = document.querySelector(".navbar-mobile .menu-bar");

        hamburger.addEventListener("click", () => (
          menu_bar.classList.toggle("show")  
        ));
        