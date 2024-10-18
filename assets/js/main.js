var swiper = new Swiper('.mySwiper',{
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el:'.swiper-pagination',
    },
    mousewhell: true,
    keyboard:true
  })

// popup
let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add(".open-popup");
  console.log("слово");
}
function closePopup() {
  popup.classList.remove(".open-popup");
}