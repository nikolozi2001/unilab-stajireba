// TRENDING SLIDER

document.addEventListener("DOMContentLoaded", function () {
    const section = document.getElementById("trending-section");
    // section.id = "trending-section";
  
    const trendingContainer = document.createElement("div");
    trendingContainer.className = "trending-container";
  
    const sectionHeader = document.createElement("div");
    sectionHeader.className = "section-header";
  
    const h2 = document.createElement("h2");
    h2.textContent = "TRENDING";
  
    const arrowWrap = document.createElement("div");
    arrowWrap.className = "arrow-wrap";
  
    const leftArrow = document.createElement("i");
    leftArrow.className = "fas fa-chevron-left";
    const rightArrow = document.createElement("i");
    rightArrow.className = "fas fa-chevron-right";
  
    sectionHeader.appendChild(h2);
    arrowWrap.appendChild(leftArrow);
    arrowWrap.appendChild(rightArrow);
    sectionHeader.appendChild(arrowWrap);
  
    trendingContainer.appendChild(sectionHeader);
  
    const cardsDiv = document.createElement("div");
    cardsDiv.className = "cards";
  
    // Create an array of card data
    const cardData = [
      {
        imageSrc: "images/Image1.png",
        headerText: "Dolore magna aliqua",
        contentText:
          "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.",
        timeAgoText: "2m ago",
      },
      {
        imageSrc: "images/Image2.png",
        headerText: "Morbi eleifend a libero",
        contentText:
          "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.",
        timeAgoText: "1h ago",
      },
      {
        imageSrc: "images/Image3.png",
        headerText: "Morbi eleifend a libero",
        contentText:
          "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.",
        timeAgoText: "3h ago",
      },
    ];
  
    // Create an initial index to track the current card data
    let currentIndex = 0;
  
    // Function to create a card using the provided data
    function createCard(cardData) {
      const card = document.createElement("div");
      card.className = "card";
  
      const image = document.createElement("img");
      image.src = cardData.imageSrc;
      image.alt = "card image";
  
      const cardInfo = document.createElement("div");
      cardInfo.className = "card-info";
  
      const header = document.createElement("h4");
      header.className = "card-header";
      header.textContent = cardData.headerText;
  
      const content = document.createElement("p");
      content.textContent = cardData.contentText;
  
      const timeAgo = document.createElement("div");
      timeAgo.className = "time-ago";
  
      const clockIcon = document.createElement("i");
      clockIcon.className = "far fa-clock";
  
      const timeSpan = document.createElement("span");
      timeSpan.textContent = cardData.timeAgoText;
  
      timeAgo.appendChild(clockIcon);
      timeAgo.appendChild(timeSpan);
  
      cardInfo.appendChild(header);
      cardInfo.appendChild(content);
      cardInfo.appendChild(timeAgo);
  
      card.appendChild(image);
      card.appendChild(cardInfo);
  
      return card;
    }
  
    // Function to update card content
    function updateCardData(index) {
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const newData = cardData[(i + index) % cardData.length];
        const image = card.querySelector("img");
        const header = card.querySelector(".card-header");
        const content = card.querySelector("p");
        const timeAgo = card.querySelector(".time-ago span");
  
        image.src = newData.imageSrc;
        header.textContent = newData.headerText;
        content.textContent = newData.contentText;
        timeAgo.textContent = newData.timeAgoText;
      }
    }
  
    // Create and append cards
    const cards = [];
    for (let i = 0; i < cardData.length; i++) {
      const card = createCard(cardData[i]);
      cards.push(card);
      cardsDiv.appendChild(card);
    }
  
    // Add click event listeners to the left and right arrows
    leftArrow.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + cardData.length) % cardData.length;
      updateCardData(currentIndex);
    });
  
    rightArrow.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % cardData.length;
      updateCardData(currentIndex);
    });
  
    trendingContainer.appendChild(cardsDiv);
    section.appendChild(trendingContainer);
    // document.body.appendChild(section);
  
    // Function to add new photo and text
    function addNewPhotoAndText(
      newPhotoSrc,
      newHeaderText,
      newContentText,
      newTimeAgoText
    ) {
      const newData = {
        imageSrc: newPhotoSrc,
        headerText: newHeaderText,
        contentText: newContentText,
        timeAgoText: newTimeAgoText,
      };
  
      // Add the new data to the cardData array
      cardData.push(newData);
  
      // Call updateCardData to update the cards with the new data
      updateCardData(currentIndex);
    }
  
    // Example of adding new photo and text
    addNewPhotoAndText(
      "images/Article1.png",
      "Article one title",
      "City is an ever-changing landscape that never ceases to captivate.",
      "5h ago"
    );
  });
  