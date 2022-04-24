// smooth scroll top button

function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

// showing and hiding top-scroll button

window.onscroll = function () {
  let scrollLimit = 200;
  if (window.scrollY >= scrollLimit) {
    document.querySelector(".to-top").classList.add("to-top-visible");
  } else {
    document.querySelector(".to-top").classList.remove("to-top-visible");
  }
};

setTimeout(() => {
  fetch("../json/nav.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => populateNavigationBar(data));
}, 100);

populateNavigationBar = (navBarData) => {
  document.querySelectorAll("#navbar .sub-menu").forEach((ulElement) => {
    let hasPagesUrl = ulElement.baseURI.split("/").includes("pages");
    let countryName = ulElement.getAttribute("id");
    for (let i = 0; i < 6; i++) {
      ulElement.appendChild(document.createElement("li"));
      ulElement.children[i].innerHTML = `<a href=${
        hasPagesUrl
          ? navBarData[countryName][i].link
          : "pages/" + navBarData[countryName][i].link
      }>${navBarData[countryName][i].linkName}</a>`;
    }
  });
};
