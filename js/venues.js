var isDrawerOpen = false;

function toggleFilters() {
  const filterValueGroups = document.getElementsByClassName("values");
  console.log(filterValueGroups);

  Array.from(filterValueGroups).forEach((el) => {
    if (isDrawerOpen) {
      el.classList.remove("active");
      el.classList.add("collapsed");
      el.style.height = "0px";
    } else {
      const height = el.scrollHeight;
      el.style.height = height + "px";

      el.classList.remove("collapsed");
      el.classList.add("active");
    }
  });

  isDrawerOpen = !isDrawerOpen;
}


// function showFilters() {
//   let filterHeight = document.getElementById("filters");
//   let activeChips = document.querySelectorAll(".head .active-chip");
//   let titles = document.querySelectorAll(".filter-category .head span.title");
//   let searchBar = document.querySelector(".search-bar");
//   Array.from(filterValueGroups).forEach((el) => {
//     const height = el.scrollHeight;

//     el.style.height = height + "px";
//     el.classList.remove("collapsed");
//     el.classList.add("active");
//     clearBtnWrapper[0].style.display = "block";
//     clearBtnWrapper[0].style.marginTop = "28px";

//     if (window.innerWidth > 1024) {
//       titles.forEach((title) => {
//         title.style.display = "block";
//         title.style.marginTop = 15 + "px";
//       });
//       activeChips.forEach((activeChip) => {
//         activeChip.style.display = "none";
//       });
//     } else if (window.innerWidth >= 0 && window.innerWidth <= 1024) {
//       searchBar.style.top = 0 + "px";

//       titles.forEach((title) => {
//         title.style.display = "block";
//       });
//       filterHeight.style.height = "auto";
//     }
//   });
// }

// function hideFilters() {
//   let filterHeight = document.getElementById("filters");
//   let activeChips = document.querySelectorAll(".active-chip");
//   let titles = document.querySelectorAll(".filter-category .head span.title");

//   Array.from(filterValueGroups).forEach((el) => {
//     el.classList.remove("active");
//     el.classList.add("collapsed");
//     el.style.height = "0px";
//     el.style.width = "opx";
//     clearBtnWrapper[0].style.display = "none";
//   });

//   if (window.innerWidth > 1024) {
//     titles.forEach((title) => {
//       title.style.display = "block";
//       title.style.marginTop = 0 + "px";
//     });

//     activeChips.forEach((activeChip) => {
//       activeChip.style.display = "block";
//     });
//   }
//   if (window.innerWidth >= 0 && window.innerWidth <= 1024) {
//     titles.forEach((title) => {
//       title.style.display = "none";
//     });

//     filterHeight.style.height = 0 + "px";
//   }
// }

  

// function toggleFilters() {
//   let searchBtn = jQuery(".search-btn");

//   if (searchBtn.hasClass("opened")) {
//     searchBtn.removeClass("opened");
//     hideFilters();
//   } else {
//     searchBtn.addClass("opened");

//     showFilters();
//   }
// }

// function clearAll() {
//   toggleFilters();

//   jQuery(".head .chip.active-chip").html("Any");
//   jQuery(".values .chip").removeClass("active-chip");

//   jQuery(".search-bar-container input").val("");
//   jQuery(".search-bar-container [name=page]").val(1);
//   openVenuesSearch();
// }