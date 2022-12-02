function classToggle() {
    const mobileSidebar = document.querySelector(".mobile-sidebar");

    if (mobileSidebar.classList.contains("open")) {
      mobileSidebar.classList.remove("open");
    } else {
      mobileSidebar.classList.add("open");
    }
  }

  document
    .querySelector(".checkbtn")
    .addEventListener("click", classToggle);

  function close_sidebar() {
    let o = document.querySelector(".mobile-sidebar");

    if (o.classList.contains("open")) {
      o.classList.remove("open");
    } else {
      o.className.add("open");
    }
  }

  let allSections = document.querySelectorAll("section");

  let containers = document.querySelectorAll(".container");
  let fadeUp = "fade-up";

  containers.forEach((container) => {
    container.setAttribute("data-aos", fadeUp);
  });

  
  let contents = document.querySelectorAll(".content");
  contents.forEach((content) => {
    content.setAttribute("data-aos", fadeUp);
  });

  AOS.init({
    duration: 3000,
  });