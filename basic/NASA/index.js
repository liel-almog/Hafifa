const nasaPosts = [];

const createCard = () => {
  const card = document.createElement("section");
  card.classList.add("card");

};

const createCardImage = (imageUrl) => {
  const anchorOpen = `
  <a class="image-container"
    title="Full Screen"
    href=${imageUrl}
    target="_blank"
    rel="noopener noreferrer">`;

  const image = `
  <img
  class="image"
  src=${imageUrl}
  alt="space image"
  />`;
  const anchorClose = "</a>";
  const cardImageHTML = anchorOpen + image + anchorClose;
  return cardImageHTML;
};

const createCardBody = (title, postText, date, owner) => {
  const title = `<h2>${title}</h2>`
  const postText = `<p>${postText}</p>`
  const postFooter = `<p> <b> ${date} </b> ${owner} </p>`
};

const getNumPosts = async (articleNumber = 1) => {
  const api_key = "DEMO_KEY";
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=${articleNumber}`;
  const res = await axios.get(apiUrl);
  const posts = res.data;
  console.log(posts);
};

const saveFavorite = () => {
  console.log("Hello");
};

getNumPosts(10);
