function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }



  document.querySelectorAll(".nav-items").forEach((ele) =>
  ele.addEventListener("click", function (event) {
    event.preventDefault();
    document
      .querySelectorAll(".nav-items")
      .forEach((ele) => ele.classList.remove("active"));
    this.classList.add("active")
  })
);


// change navbar style on scroll
    window.addEventListener('scroll', () => {
      document.getElementById('nav').classList.toggle('window-scroll', window.scrollY > 100)
    })


    // swipper
    var swiper = new Swiper(".mySwiper", {
      loop: true,
      slidesPerView: 5,
      spaceBetween: 40,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  