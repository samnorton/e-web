/*********************************************/
/*           RESPONSIVE NAVIGATION           "/
/*********************************************/

const toggleButton = document.getElementsByClassName("navbar__toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar__navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

/*********************************************/
/*                  SLIDER                   "/
/*********************************************/

const swiper = new Swiper(".swiper-container", {
  autoplay: {
    slidesPerView: 1,
    delay: 4500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      // swiper.removeSlide([1, 2, 3, 4])
    },
    480: {
      // swiper.removeSlide([3, 4])
    },
  },
});

/*********************************************/
/*               SCROLL TO TOP               "/
/*********************************************/

window.addEventListener("scroll", function () {
  const btnScrollToTop = document.querySelector("#btnScrollToTop");
  btnScrollToTop.classList.toggle("active", window.scrollY > window.innerHeight / 2);
});

btnScrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
