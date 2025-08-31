document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".theme-btn");
  const themeImage = document.getElementById("theme-image");

  // Vite 提供的專案 base，例如本地是 "/"，Pages 上會是 "/AAPDCREWUP/"
  const base = import.meta.env.BASE_URL;

  // 初始化修正預設圖片
  if (themeImage && themeImage.getAttribute("src")) {
    const originalSrc = themeImage.getAttribute("src");
    themeImage.src = base + originalSrc.replace(/^(\.\/|\/)/, "");
  }

  // 點擊切換功能
  if (buttons.length && themeImage) {
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const imgPath = btn.dataset.image;
        if (imgPath) {
          themeImage.src = base + imgPath.replace(/^(\.\/|\/)/, "");
        }
      });
    });
  }
});

// ✅ 預設觸發第一個主題（自我提升）
document.addEventListener("DOMContentLoaded", () => {
  const firstBtn = document.querySelector(".theme-btn"); // 抓第一個主題按鈕
  if (firstBtn) {
    firstBtn.click(); // 模擬點擊，會自動更新 #theme-image
  }
});
