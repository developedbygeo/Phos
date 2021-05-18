const auth = config;
const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-input");
const submitBtn = document.querySelector(".submit-btn");
let searchValue;

function curatedPhotos() {
  const dataFetch = await fetch(
    "https://api.pexels.com/v1/curated?per_page=15&page=1",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    }
  );
}
