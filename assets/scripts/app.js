document.addEventListener("DOMContentLoaded", function () {
  const bodyWrapper = document.querySelector(".page-wrapper");
  const navigationMenu = document.querySelector(".header .menu-nav");
  const mobileNavigation = createMobileNavigation();
  const touchLinks = getTouchLinks();

  touchLinks.forEach((link) => link.addEventListener("click", preventDefault));

  document.body.appendChild(mobileNavigation);

  const menuWrapper = createMenuWrapper();
  mobileNavigation
    .querySelector(".mobile-navigation-menu")
    .appendChild(menuWrapper);

  const dropdowns = document.querySelectorAll(".dropdown");
  const mobileOverlay = createMobileOverlay();
  const menuToggle = document.querySelectorAll(".btn-menu, .mobile-overlay");

  mobileNavigation.appendChild(mobileOverlay);

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", () => toggleDropdown(dropdown));
  });

  if (navigationMenu) {
    const clonedMenu = navigationMenu.cloneNode(true);
    menuWrapper.appendChild(clonedMenu);
  }

  menuToggle.forEach((toggle) => {
    toggle.addEventListener("click", () => toggleMobileNavigation(bodyWrapper));
  });
});

function createMobileNavigation() {
  const mobileNavigation = document.createElement("div");
  mobileNavigation.classList.add("mobile-menu");
  mobileNavigation.innerHTML = '<div class="mobile-navigation-menu"></div>';
  return mobileNavigation;
}

function getTouchLinks() {
  return document.querySelectorAll(
    ".header .mobile-navigation-menu .nav > ul > li > a, .header .mobile-navigation-menu .nav > ul > li.mobile-menu > a"
  );
}

function preventDefault(event) {
  event.preventDefault();
}

function createMenuWrapper() {
  const menuWrapper = document.createElement("div");
  menuWrapper.classList.add("navbar-mobile");
  menuWrapper.innerHTML = `
      <button class="btn-menu" type="button">
      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.41421" y="20" width="26" height="2" rx="1" transform="rotate(-45 1.41421 20)" fill="white" stroke="white" stroke-width="2"/>
      <rect x="3" y="1.41421" width="26" height="2" rx="1" transform="rotate(45 3 1.41421)" fill="white" stroke="white" stroke-width="2"/>
      </svg>
      </button>
      <nav class="nav-links">
        <ul>
          ${getMenuItemsHTML()}
        </ul>
      </nav>
    `;
  return menuWrapper;
}

function getMenuItemsHTML() {
  return `
        <li class="dropdown">
          <a href="#">Kurumsal</a>
          <ul>${getCorporateMenuHTML()}</ul>
        </li>
        <li class="dropdown">
          <a href="#">Ürünlerimiz</a>
          <ul>${getProductsMenuHTML()}</ul>
        </li>
        <li class="dropdown">
          <a href="#">Makarna & Sağlık</a>
          <ul>${getHealthMenuHTML()}</ul>
        </li>
        <li class="dropdown">
          <a href="#">Sosyal Medya</a>
          <ul>${getSocialMediaMenuHTML()}</ul>
        </li>
        <li class="dropdown">
          <a href="#">İhracat</a>
          <ul>${getExportMenuHTML()}</ul>
        </li>
        <li class="dropdown">
          <a href="#">İletişim</a>
          <ul>${getContactMenuHTML()}</ul>
        </li>
      `;
}

function getCorporateMenuHTML() {
  return `
  <li><a href="#">Nuh Hakkında</a></li>
  <li><a href="#">Markalar</a></li>
  <li><a href="#">Nuh’tan Haberler</a></li>
  <li><a href="#">Üretim Tesisi</a></li>
  <li><a href="#">Kalite</a></li>
  <li><a href="#">Sosyal Sorumluluk Projeleri</a></li>
  <li><a href="#">İnsan Kaynakları</a></li>
    `;
}

function getProductsMenuHTML() {
  return `
        <li><a href="#">Klasik</a></li>
        <li><a href="#">Vitaminli</a></li>
        <li><a href="#">Sebzeli</a></li>
        <li><a href="#">Tam Buğday</a></li>
        <li><a href="#">Bulgur</a></li>
        <li><a href="#">Kepek</a></li>
        <li><a href="#">Catering</a></li>
        <li><a href="#">İrmik</a></li>
        <li><a href="#">Glutensiz</a></li>
      `;
}

function getHealthMenuHTML() {
  return `
        <li><a href="#">Makarna Şişmanlatmaz</a></li>
        <li><a href="#">Makarnanın Öyküsü</a></li>
        <li><a href="#">Buğdayın Öyküsü</a></li>
        <li><a href="#">Besin Piramidi</a></li>
        <li><a href="#">Makarnanın Püf Noktaları</a></li>
        <li><a href="#">Sağlıklı Beslenme</a></li>
        <li><a href="#">Faydalı Bilgiler</a></li>
        <li><a href="#">Mevsiminde Yiyelim</a></li>
      `;
}

function getSocialMediaMenuHTML() {
  return `
      <li><a href="#">Instagram</a></li>
      <li><a href="#">Videolar</a></li>
    `;
}

function getExportMenuHTML() {
  return `
        <li><a href="#">İhracat</a></li>
        <li><a href="#">İhracat Formu</a></li>
      `;
}

function getContactMenuHTML() {
  return `
        <li><a href="#">İletişim Bilgileri</a></li>
        <li><a href="#">Bayi Başvuru Formu</a></li>
      `;
}

function createMobileOverlay() {
  const mobileOverlay = document.createElement("div");
  mobileOverlay.classList.add("mobile-overlay");
  return mobileOverlay;
}

function toggleDropdown(dropdown) {
  const submenu = dropdown.querySelector("ul");
  submenu.style.display = submenu.style.display === "block" ? "none" : "block";
}

function toggleMobileNavigation(bodyWrapper) {
  const duration = 400;
  if (!document.documentElement.classList.contains("mobile-nav-animation")) {
    if (document.documentElement.classList.contains("mobile-nav-open")) {
      document.documentElement.classList.add("mobile-nav-animation");
      document.documentElement.classList.remove("mobile-nav-open");
      setTimeout(() => {
        document.documentElement.classList.remove(
          "mobile-animation-ready",
          "mobile-nav-animation"
        );
        bodyWrapper.removeAttribute("style");
      }, duration);
    } else {
      document.documentElement.classList.add(
        "mobile-animation-ready",
        "mobile-nav-animation"
      );
      setTimeout(() => {
        document.documentElement.classList.add("mobile-nav-open");
        setTimeout(() => {
          document.documentElement.classList.remove("mobile-nav-animation");
        }, duration);
      }, 30);
    }
  }
}

const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' custom-bullet"></span>';
    },
  },
});

const mySwiperBlog = new Swiper(".mySwiperBlog", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  },
});

var swiperProduct = new Swiper(".mySwiperProduct", {
  slidesPerView: "auto",
  spaceBetween: 17,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1150: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
