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

// --------------------- 인트로 - 자동플레이

const intro = document.getElementById("intro");
const introVideo = document.getElementById("intro-video");
const skipBtn = document.querySelector(".skip");

// 처음 들어오면 재생
introVideo.play();
document.body.classList.add("intro-open");

function closeIntro() {
    intro.style.display = "none";
    document.body.classList.remove("intro-open");
    window.scrollTo(0, 0);
}

// 영상 끝
introVideo.addEventListener("ended", () => {
    closeIntro();
});

// 스킵 버튼
skipBtn.addEventListener("click", () => {
    introVideo.pause();
    closeIntro();
});

// --------------------- 비쥬얼 - 리플레이

const visualVideo = document.getElementById("visual-video");
const replayBtn = document.querySelector(".replay");

if (visualVideo && replayBtn) {
    visualVideo.addEventListener("ended", () => {
        console.log("영상 끝!");
        replayBtn.classList.add("active");
    });

    replayBtn.addEventListener("click", () => {
        visualVideo.currentTime = 0;
        visualVideo.play();
        replayBtn.classList.remove("active");
    });
}

// --------------------- 스와이퍼

var swiper = new Swiper(".mainwork-list", {
    slidesPerView: 2.5,
    spaceBetween: 20,
    grabCursor: true,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});

// ------------------------- 메일주소 복사버튼

const copyBtn = document.querySelector(".copy");
const copyText = copyBtn.querySelector("span");

copyBtn.addEventListener("click", async () => {
    await navigator.clipboard.writeText(document.getElementById("mailAddress").textContent);

    copyText.textContent = "완료!";

    setTimeout(() => {
        copyText.textContent = "복사";
    }, 1200);
});

// ------------------------- 컨택 폼

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

document.querySelectorAll(".work-card").forEach((card) => {
    card.addEventListener("click", () => {
        console.log("클릭됨!");

        modal2.classList.add("active");
    });
});
