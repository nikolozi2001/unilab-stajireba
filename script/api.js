const cardContainer = document.getElementById("card-container");

// Fetch data from the API
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    posts.forEach((post) => {
      const card = createCard(post);
      cardContainer.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error fetching data: ", error);
  });

function createCard(post) {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("h3");
  title.textContent = post.title;

  const body = document.createElement("p");
  body.textContent = post.body;

  card.appendChild(title);
  card.appendChild(body);

  return card;
}
