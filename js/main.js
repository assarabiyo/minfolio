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
const modal = document.querySelector(".success-modal");
const modalClose = document.querySelector(".modal-close");
const submitBtn = form.querySelector("button");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (document.getElementById("website").value) {
        return;
    }

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    try {
        const res = await fetch(
            "https://script.google.com/macros/s/AKfycbxxE_C2XjpDzHMCLl3uWgWl2LJZBWp5nKxxicHsSPVAAgPp87zLJkxhL8o8QTx4bNUH/exec",
            {
                method: "POST",
                body: JSON.stringify(data),
            },
        );

        console.log(res);
        modal.classList.add("active");
        form.reset();
    } catch (err) {
        console.error(err);
        alert("메시지를 보내는 데 실패했어요😥");
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "SEND MESSAGE →";
    }
});
modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
});


const modal2 = document.querySelector(".work-modal-bg");

document.querySelector(".work-card").addEventListener("click",()=>{
    modal2.classList.add("active");
});

document.querySelector(".wmodal-close").addEventListener("click",()=>{
    modal2.classList.remove("active");
});