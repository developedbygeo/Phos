const auth = config;
const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-input");
const form = document.querySelector(".search-form");
let searchValue;

// Event Listeners
searchInput.addEventListener("input", inputUpdate);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  searchPhotos(searchValue);
});

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
          <p>Pexels - ${photo.photographer}</p>
          <a href=${photo.src.original} target="_blank">Download</a>
          </div>
          <img src=${photo.src.large}> </img>`;
    gallery.appendChild(imgGallery);
  });
}

async function curatedPhotos() {
  const data = await fetchApi(
    "https://api.pexels.com/v1/curated?per_page=15&page=1"
  );
  generateGallery(data);
}

async function searchPhotos(query) {
  clear();
  const data = await fetchApi(
    `https://api.pexels.com/v1/search?query=${query}+query&per_page=15&page=1`
  );
  generateGallery(data);
}
function clear() {
  gallery.innerHTML = "";
  searchInput.value = "";
}

curatedPhotos();
