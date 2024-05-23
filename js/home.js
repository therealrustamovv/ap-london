// light-dark start
let modeBtn = document.getElementById("mode__btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "./asset/images/light.svg";
  } else {
    this.firstElementChild.src = "./asset/images/dark.svg";
  }
  document.body.classList.toggle("dark");
});
// light-dark end

// navbar shrink
window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}
// navbar shrink end

// loading start
const loading = document.getElementById("loading");

const loadingDuration = 2000; // 2s

setTimeout(() => {
  loading.classList.add("loading-none");
}, loadingDuration);

// loading end

// backtop start
window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.classList.add("backtop-show");
  } else {
    backtop.classList.remove("backtop-show");
  }
}
// backtop end

// owl start
$(document).ready(function () {
  $("#team-carousel").owlCarousel({
    margin: 0,
    loop: true,
    nav: true,
    navText: [
      '<img src="../asset/images/prev.svg"/>',
      '<img src="../asset/images/next.svg"/>',
    ],
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      1000: {
        items: 1,
      },
      1150: {
        items: 3,
      },
    },
  });
});
// owl end
