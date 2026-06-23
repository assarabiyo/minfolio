
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
        title: "입맛도 습관이니까!",
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
    }
});

detail.addEventListener("toggle", () => {
    summary.textContent = detail.open ? "▼ 접기" : "▶ 더보기";
});
