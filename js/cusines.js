const countryName = document
  .querySelector("main > div:first-of-type")
  .getAttribute("id");

fetch("../json/cusines.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => setImages(data));

//sets images and captions dynamically for all the pages based on country name
setImages = (countryCuisines) => {
  for (let i = 0; i < 6; i++) {
    document
      .querySelectorAll(".food-items img")
      [i].setAttribute("src", countryCuisines[countryName][i].src);
    document.querySelectorAll(".food-items figcaption")[i].innerHTML =
      countryCuisines[countryName][i].name;
    document.querySelectorAll(".food-items  p")[i].innerHTML =
      countryCuisines[countryName][i].info;
  }
};
