document.querySelectorAll(".gnb a").forEach((link) => {
    link.addEventListener("click", (e) => {
        const target = document.querySelector(link.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
            });
        }
    });
});

var swiper = new Swiper(".mainwork-list", {
    slidesPerView: 3,
    spaceBetween: 20,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: -15,
        stretch: 0,
        scale: 0.8,
        depth: 30,
        modifier: 1,
        slideShadows: false,
    },
    fadeEffect: {
        crossFade: true,
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});


const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try {

        const res = await fetch(
            "https://script.google.com/macros/s/AKfycbxxE_C2XjpDzHMCLl3uWgWl2LJZBWp5nKxxicHsSPVAAgPp87zLJkxhL8o8QTx4bNUH/exec",
            {
                method: "POST",
                body: JSON.stringify(data)
            }
        );

        console.log(res);
        alert("전송 완료!");

    } catch(err){

        console.error(err);
        alert("전송 실패!");

    }

});