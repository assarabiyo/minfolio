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

// --------------------- 스와이퍼

var swiper = new Swiper(".mainwork-list", {
    slidesPerView: 3,
    spaceBetween: 20,
    grabCursor: true,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});

//  ----------------- 워크 모달

const modal2 = document.querySelector(".work-modal-bg");
const detail = document.querySelector(".modal-detail");
const summary = detail.querySelector("summary");
const linkBox = document.getElementById("link-box");
const link = document.getElementById("w-link");

const projects = {
    m1: {
        title: "서울 서버 '매우 혼잡' 해결하는 법.shorts",
        video: "https://www.youtube.com/embed/5QuF0EI_Amc",
        info: "2026.04.20~05.13\nAfter Effects · Illustrator",
        purpose: "...",
        process: "스토리보드 제작 → 일러스트 작업 → 애프터이펙트 모션 작업",
        link: "",
    },
    m2: {
        title: "기다려봐 체크체크",
        video: "https://www.youtube.com/embed/5QuF0EI_Amc",
        info: "2025.06\nㄷㄷㄷㄷㄷㄷ",
        purpose: "...",
        process: "스토리보드 제작 → 일러스트 작업 → 애프터이펙트 모션 작업",
        link: "",
    },
};

document.querySelectorAll(".work-card").forEach((card) => {
    card.addEventListener("click", () => {
        const id = card.dataset.project;

        document.getElementById("modal-title").textContent = projects[id].title;
        document.getElementById("modal-video").src = projects[id].video;
        document.getElementById("w-info").innerText = projects[id].info;
        document.getElementById("w-purpose").textContent = projects[id].purpose;
        document.getElementById("w-process").textContent = projects[id].process;
        document.getElementById("w-link").href = projects[id].link;

        if (projects[id].link) {
            linkBox.style.display = "block";

            link.href = projects[id].link;
        } else {
            linkBox.style.display = "none";
        }
        detail.open = false;
        summary.textContent = "▶ 더보기";
        modal2.classList.add("active");
    });
});
document.querySelector(".wmodal-close").addEventListener("click", () => {
    modal2.classList.remove("active");
});

modal2.addEventListener("click", (e) => {
    if (e.target === modal2) {
        modal2.classList.remove("active");
    }
});

detail.addEventListener("toggle", () => {
    summary.textContent = detail.open ? "▼ 접기" : "▶ 더보기";
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
