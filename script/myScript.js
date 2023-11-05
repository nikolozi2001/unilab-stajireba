const navSlide = () => {
  const burger = document.querySelector(".burger-bar");
  const nav = document.querySelector(".navigation");
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

navSlide();

// slider

document.addEventListener("DOMContentLoaded", function () {
  const sliderData = [
    {
      title: "Amazing places in America to visit.",
      text: "For some reason — this country, this city, this neighborhood, this particular street — is the place you are living a majority of your life in.",
      background: "url('images/Mountain.png')",
    },
    {
      title: "The charming villages of Vermont",
      text: "Tucked away in the heart of picturesque Vermont, these charming villages offer a truly delightful escape from the hustle and bustle of city life.",
      background: "url('images/Vermont.png')",
    },
    {
      title: "Discovering the natural wonders of California",
      text: "California, often referred to as the Golden State, is a land of remarkable natural beauty, with breathtaking landscapes, picturesque coastlines, and thriving ecosystems awaiting exploration.",
      background: "url('images/California.jpg')",
    },
  ];

  const sliderTitle = document.getElementById("sliderTitle");
  const sliderText = document.getElementById("sliderText");
  const worldContainer = document.querySelector(".world-container");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentSlide = 0;

  function updateSlider() {
    sliderTitle.innerText = sliderData[currentSlide].title;
    sliderText.innerText = sliderData[currentSlide].text;
    worldContainer.style.backgroundImage = sliderData[currentSlide].background;
  }

  nextBtn.addEventListener("click", function () {
    currentSlide = (currentSlide + 1) % sliderData.length;
    updateSlider();
  });

  prevBtn.addEventListener("click", function () {
    currentSlide = (currentSlide - 1 + sliderData.length) % sliderData.length;
    updateSlider();
  });

  updateSlider();
});

