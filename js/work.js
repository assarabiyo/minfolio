const modal2 = document.querySelector(".work-modal-bg");
const detail = document.querySelector(".modal-detail");
const summary = detail.querySelector("summary");
const linkBox = document.getElementById("link-box");
const link = document.getElementById("w-link");

// 작품 정보

const projects = {
    // 영상
    m1: {
        type: "video",
        title: "서울 서버 '매우 혼잡' 해결하는 법.shorts",
        media: "https://www.youtube.com/embed/5QuF0EI_Amc",
        info: "2026.04.20~05.13\nAfter Effects · Illustrator",
        purpose: "...",
        process: "스토리보드 제작 → 일러스트 작업 → 애프터이펙트 모션 작업",
        link: "",
    },
    m2: {
        type: "video",
        title: "입맛도 습관이니까!",
        media: "https://www.youtube.com/embed/yAwgfy5g0Ww",
        info: "2025.06\nㄷㄷㄷㄷㄷㄷ",
        purpose: "...",
        process: "스토리보드 제작 → 일러스트 작업 → 애프터이펙트 모션 작업",
        link: "",
    },

    // 디자인 등등
    d1: {
        type: "design",
        title: "루피시아 사쿠란보 상세페이지(가상)",
        media: "images/media_d1.jpg",
        info: "2026.03\nPhotoshop",
        purpose: "...",
        process: "스토리보드 제작 → 일러스트 작업 → 애프터이펙트 모션 작업",
        link: "",
        extraImage: "images/extra_d1.jpg",
    },
    d2: {
        type: "design",
        title: "카드형 미니 홈페이지",
        media: "images/media_d2.jpg",
        info: "2026.05\nHTML · CSS · JavaScript",
        purpose: "카드형 미니 홈페이지를",
        process: "스토리보드 제작 → 일러스트 작업 → 애프터이펙트 모션 작업",
        link: "https://assarabiyo.github.io/ex_miniprofile/",
    },
};

document.querySelectorAll(".work-card").forEach((card) => {
    card.addEventListener("click", () => {
        const id = card.dataset.project;

        document.getElementById("modal-title").textContent = projects[id].title;

        const mediaWrap = document.getElementById("modal-media");
        mediaWrap.innerHTML = "";
        if (projects[id].type === "video") {
            mediaWrap.innerHTML = `
        <iframe
            src="${projects[id].media}"
            width="100%"
            height="100%"
            frameborder="0"
            allowfullscreen>
        </iframe>
    `;
        } else {
            mediaWrap.innerHTML = `
        <img
            src="${projects[id].media}"
            alt="${projects[id].title}">
    `;
        }

        document.getElementById("w-info").innerText = projects[id].info;
        document.getElementById("w-purpose").textContent = projects[id].purpose;
        document.getElementById("w-process").textContent = projects[id].process;
        document.getElementById("w-link").href = projects[id].link;
        const extraImage = document.getElementById("w-extra-image");
        const extraWrap = document.querySelector(".extra-image-wrap");
        if (projects[id].extraImage) {
            extraWrap.style.display = "block";
            extraImage.src = projects[id].extraImage;
        } else {
            extraWrap.style.display = "none";
        }

        if (projects[id].link) {
            linkBox.style.display = "block";

            link.href = projects[id].link;
        } else {
            linkBox.style.display = "none";
        }
        detail.open = false;
        summary.textContent = "▶ 더보기";
        modal2.classList.add("active");

        console.log("클릭");
        modal2.classList.add("active");
        console.log(modal2.classList);
    });
});
document.querySelector(".wmodal-close").addEventListener("click", () => {
    modal2.classList.remove("active");
});

modal2.addEventListener("click", (e) => {
    if (e.target === modal2) {
        modal2.classList.remove("active");
        document.getElementById("modal-media").innerHTML = "";
    }
});

detail.addEventListener("toggle", () => {
    summary.textContent = detail.open ? "▼ 접기" : "▶ 더보기";
});
