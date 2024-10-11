function createMobileNavigation(){let e=document.createElement("div");return e.classList.add("mobile-menu"),e.innerHTML='<div class="mobile-navigation-menu"></div>',e}function getTouchLinks(){return document.querySelectorAll(".header .mobile-navigation-menu .nav > ul > li > a, .header .mobile-navigation-menu .nav > ul > li.mobile-menu > a")}function preventDefault(e){e.preventDefault()}function createMenuWrapper(){let e=document.createElement("div");return e.classList.add("navbar-mobile"),e.innerHTML=`
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
    `,e}function getMenuItemsHTML(){return`
        <li class="dropdown">
          <a href="#" class="langchange" data-key="corporate">Kurumsal</a>
          <ul>${getCorporateMenuHTML()}</ul>
        </li>
        <li class="dropdown">
          <a href="#" class="langchange" data-key="ourProducts">\xdcr\xfcnlerimiz</a>
          <ul>${getProductsMenuHTML()}</ul>
        </li>
        <li class="dropdown">
          <a aria-expanded="false" class="langchange" data-key="pastaHealth" role="menu">Makarna & Sağlık</a>
          <ul>${getHealthMenuHTML()}</ul>
        </li>
        <li class="dropdown">
          <a aria-expanded="false" class="langchange" data-key="socialMedia" role="menu">Sosyal Medya</a>
          <ul>${getSocialMediaMenuHTML()}</ul>
        </li>
        <li class="dropdown">
          <a aria-expanded="false" class="langchange" data-key="export" role="menu">İhracat</a>
          <ul>${getExportMenuHTML()}</ul>
        </li>
        <li class="dropdown">
          <a aria-expanded="false" class="langchange" data-key="contact" role="menu">İletişim</a>
          <ul>${getContactMenuHTML()}</ul>
        </li>
      `}function getCorporateMenuHTML(){return`
  <li><a href="#">Nuh Hakkında</a></li>
  <li><a href="#">Markalar</a></li>
  <li><a href="#">Nuh’tan Haberler</a></li>
  <li><a href="#">\xdcretim Tesisi</a></li>
  <li><a href="#">Kalite</a></li>
  <li><a href="#">Sosyal Sorumluluk Projeleri</a></li>
  <li><a href="#">İnsan Kaynakları</a></li>
    `}function getProductsMenuHTML(){return`
        <li><a href="#">Klasik</a></li>
        <li><a href="#">Vitaminli</a></li>
        <li><a href="#">Sebzeli</a></li>
        <li><a href="#">Tam Buğday</a></li>
        <li><a href="#">Bulgur</a></li>
        <li><a href="#">Kepek</a></li>
        <li><a href="#">Catering</a></li>
        <li><a href="#">İrmik</a></li>
        <li><a href="#">Glutensiz</a></li>
      `}function getHealthMenuHTML(){return`
        <li><a href="#">Makarna Şişmanlatmaz</a></li>
        <li><a href="#">Makarnanın \xd6yk\xfcs\xfc</a></li>
        <li><a href="#">Buğdayın \xd6yk\xfcs\xfc</a></li>
        <li><a href="#">Besin Piramidi</a></li>
        <li><a href="#">Makarnanın P\xfcf Noktaları</a></li>
        <li><a href="#">Sağlıklı Beslenme</a></li>
        <li><a href="#">Faydalı Bilgiler</a></li>
        <li><a href="#">Mevsiminde Yiyelim</a></li>
      `}function getSocialMediaMenuHTML(){return`
      <li><a href="#">Instagram</a></li>
      <li><a href="#">Videolar</a></li>
    `}function getExportMenuHTML(){return`
        <li><a href="#">İhracat</a></li>
        <li><a href="#">İhracat Formu</a></li>
      `}function getContactMenuHTML(){return`
        <li><a href="#">İletişim Bilgileri</a></li>
        <li><a href="#">Bayi Başvuru Formu</a></li>
      `}function createMobileOverlay(){let e=document.createElement("div");return e.classList.add("mobile-overlay"),e}function toggleDropdown(e){let a=e.querySelector("ul");a.style.display="block"===a.style.display?"none":"block"}function toggleMobileNavigation(e){document.documentElement.classList.contains("mobile-nav-animation")||(document.documentElement.classList.contains("mobile-nav-open")?(document.documentElement.classList.add("mobile-nav-animation"),document.documentElement.classList.remove("mobile-nav-open"),setTimeout(()=>{document.documentElement.classList.remove("mobile-animation-ready","mobile-nav-animation"),e.removeAttribute("style")},400)):(document.documentElement.classList.add("mobile-animation-ready","mobile-nav-animation"),setTimeout(()=>{document.documentElement.classList.add("mobile-nav-open"),setTimeout(()=>{document.documentElement.classList.remove("mobile-nav-animation")},400)},30)))}document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".page-wrapper"),a=document.querySelector(".header .menu-nav"),l=createMobileNavigation(),t=getTouchLinks();t.forEach(e=>e.addEventListener("click",preventDefault)),document.body.appendChild(l);let i=createMenuWrapper();l.querySelector(".mobile-navigation-menu").appendChild(i);let n=document.querySelectorAll(".dropdown"),r=createMobileOverlay(),o=document.querySelectorAll(".btn-menu, .mobile-overlay");if(l.appendChild(r),n.forEach(e=>{e.addEventListener("click",()=>toggleDropdown(e))}),a){let s=a.cloneNode(!0);i.appendChild(s)}o.forEach(a=>{a.addEventListener("click",()=>toggleMobileNavigation(e))})});const swiper=new Swiper(".mySwiper",{pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,a){return'<span class="'+a+' custom-bullet"></span>'}}}),mySwiperBlog=new Swiper(".mySwiperBlog",{pagination:{el:".swiper-pagination",clickable:!0,pagination:{el:".swiper-pagination",clickable:!0}}});var swiperProduct=new Swiper(".mySwiperProduct",{slidesPerView:"auto",spaceBetween:17,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{640:{slidesPerView:2,spaceBetween:20},900:{slidesPerView:3,spaceBetween:0},1150:{slidesPerView:4,spaceBetween:30}}}),langJSON={en:{corporate:"CORPORATE",ourProducts:"OUR PRODUCTS",pastaHealth:"PASTA & HEALTH",socialMedia:"SOCIAL MEDIA",export:"EXPORT",contact:"CONTACT"},tr:{corporate:"KURUMSAL",ourProducts:"\xdcR\xdcNLERİMİZ",pastaHealth:"MAKARNA & SAĞLIK",socialMedia:"SOSYAL MEDYA",export:"İHRACAT",contact:"İLETİŞİM"},zh:{corporate:"公司",ourProducts:"我们的产品",pastaHealth:"意大利面与健康",socialMedia:"社交媒体",export:"出口",contact:"联系"}};function initializeContent(){var e=localStorage.getItem("lang");null===e?contentUpdate(e="tr"):contentUpdate(e),document.getElementById("selectedLanguageSpan").innerHTML=e.toLocaleUpperCase(),document.getElementById("language-select").value=e}function changeLang(e){document.getElementById("selectedLanguageSpan").innerHTML=e.toLocaleUpperCase(),localStorage.setItem("lang",e),contentUpdate(e)}function contentUpdate(e){var a=langJSON[e];document.querySelectorAll(".langchange").forEach(function(e){var l=e.getAttribute("data-key");a[l]&&(e.innerHTML=a[l])}),updateActiveClass(e),document.body.style.visibility="visible"}function updateActiveClass(e){let a=document.querySelectorAll(".languagesSelect ul li a");a.forEach(a=>{a.textContent===e?a.classList.add("active"):a.classList.remove("active")})}initializeContent();