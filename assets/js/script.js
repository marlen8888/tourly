'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);


/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

/**
 * Book Now Button functionality
 */

const bookNowButton = document.getElementById("book-now-btn");  // Получаем кнопку по ID

if (bookNowButton) {
  bookNowButton.addEventListener("click", function() {
    this.innerText = "Booked";  // Меняем текст на "Booked"
    this.disabled = true;  // Отключаем кнопку
    this.style.backgroundColor = "#aaa";  // Изменяем стиль кнопки (например, серый цвет)
  });
}

/**
 * Inquire Now Button functionality
 */

const inquireNowButton = document.querySelector(".tour-search-form button");  // Находим кнопку в форме

if (inquireNowButton) {
  inquireNowButton.addEventListener("click", function(event) {
    event.preventDefault();  // Предотвращаем отправку формы при нажатии кнопки
    this.innerText = "Inquired";  // Меняем текст на "Inquired"
    this.disabled = true;  // Отключаем кнопку
    this.style.backgroundColor = "#aaa";  // Меняем стиль кнопки (например, серый цвет)
  });
}