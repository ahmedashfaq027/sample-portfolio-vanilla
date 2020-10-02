function parallax(element, distance, speed) {
  const item = document.querySelector(element);
  item.style.transform = `translateY(${distance * speed}px)`;
}

const header = document.querySelector("header");
const firstLayerName = document.querySelector(".firstLayer h1");
const navLinks = document.querySelectorAll(".nav-links li");

const firstSection = document.querySelector(".firstLayer");
const secondSection = document.querySelector(".secondLayer");
const thirdSection = document.querySelector(".thirdLayer");
const fourthSection = document.querySelector(".fourthLayer");
const fifthSection = document.querySelector(".fifthLayer");
const sixthSection = document.querySelector(".sixthLayer");
const seventhSection = document.querySelector(".seventhLayer");

const projects = document.querySelectorAll(".project");

// Scotty Text
const scotty = document.querySelector(".goToPageTop img");
scotty.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

scotty.addEventListener("mouseover", () => {
  const scottyText = document.querySelector(".goToPageTop > p");
  scottyText.classList.add("scottyText-active");
});

scotty.addEventListener("mouseout", () => {
  const scottyText = document.querySelector(".goToPageTop > p");
  scottyText.classList.remove("scottyText-active");
});
// Scotty Text

projects.forEach((project) => {
  project.addEventListener("mouseover", () => {
    const icon = project.querySelector(".project-open");
    const info = project.querySelector(".projectTitle");

    icon.classList.add("project-active");
    info.classList.add("projectTitle-active");
  });
  project.addEventListener("mouseout", () => {
    const icon = project.querySelector(".project-open");
    const info = project.querySelector(".projectTitle");

    icon.classList.remove("project-active");
    info.classList.remove("projectTitle-active");
  });
});

window.addEventListener("scroll", () => {
  if (this.scrollY > 50) {
    header.classList.add("headerScroll");
  } else {
    header.classList.remove("headerScroll");
  }
});

window.addEventListener("load", () => {
  // firstLayerName.classList.add("animateH");
});

// Scroll to respective sections using nav buttons
navLinks[0].addEventListener("click", () => {
  secondSection.scrollIntoView(true);
});

navLinks[1].addEventListener("click", () => {
  thirdSection.scrollIntoView(true);
});

navLinks[2].addEventListener("click", () => {
  fourthSection.scrollIntoView(true);
});

navLinks[3].addEventListener("click", () => {
  sixthSection.scrollIntoView(true);
});

navLinks[4].addEventListener("click", () => {
  seventhSection.scrollIntoView(true);
});

function smoothScroll(target, duration) {
  // var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;

  var startPosition = window.pageYOffset;
  var dist = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime == null) startTime = currentTime;

    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, dist, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
    console.log("Time elapsed:" + timeElapsed + " Duration:" + duration);
  }

  function ease(t, b, c, d) {
    t /= d;
    return -c * t * (t - 2) + b;
  }

  requestAnimationFrame(animation);
}
