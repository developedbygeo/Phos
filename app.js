const auth = prompt("Please provide your API key");
const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-input");
const form = document.querySelector(".search-form");
const moreBtn = document.querySelector(".more");
let searchValue;
let pageNr = 1;
let fetchLink;
let currentSearch;

// Event Listeners
searchInput.addEventListener("input", inputUpdate);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  currentSearch = searchValue;
  searchPhotos(searchValue);
});
moreBtn.addEventListener("click", loadMorePhotos);

function inputUpdate(e) {
  searchValue = e.target.value;
}

async function fetchApi(url) {
  const dataFetch = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: auth,
    },
  });
  const data = await dataFetch.json();
  return data;
}

function generateGallery(data) {
  data.photos.forEach((photo) => {
    const imgGallery = document.createElement("div");
    imgGallery.classList.add("img-gallery");
    imgGallery.innerHTML = `
          <div class="gallery-info">
          <p>${photo.photographer}</p>
          <a href=${photo.src.original} target="_blank">Download</a>
          </div>
          <img src=${photo.src.large}> </img>`;
    gallery.appendChild(imgGallery);
  });
}

async function curatedPhotos() {
  fetchLink = "https://api.pexels.com/v1/curated?per_page=15&page=1";
  const data = await fetchApi(fetchLink);
  generateGallery(data);
}

async function searchPhotos(query) {
  clear();
  fetchLink = `https://api.pexels.com/v1/search?query=${query}+query&per_page=15&page=1`;
  const data = await fetchApi(fetchLink);
  generateGallery(data);
}
function clear() {
  gallery.innerHTML = "";
  searchInput.value = "";
}

async function loadMorePhotos() {
  pageNr++;
  if (currentSearch) {
    fetchLink = `https://api.pexels.com/v1/search?query=${currentSearch}+query&per_page=15&page=${pageNr}`;
  } else {
    fetchLink = `https://api.pexels.com/v1/curated?per_page=15&page=${pageNr}`;
  }
  const data = await fetchApi(fetchLink);
  generateGallery(data);
}

curatedPhotos();
