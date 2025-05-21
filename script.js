// 表单提交提示
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("感谢提交！我们会尽快回复您。");
  this.reset();
});

// 移动端菜单切换
const navLinks = document.querySelector(".nav-links");

document.addEventListener("DOMContentLoaded", () => {
  const toggleMenu = () => {
    navLinks.classList.toggle("active");
  };

  // 模拟移动端菜单按钮（可根据需要添加）
  const menuButton = document.createElement("div");
  menuButton.innerHTML = "☰";
  menuButton.style.cursor = "pointer";
  menuButton.addEventListener("click", toggleMenu);
  document.querySelector("nav").appendChild(menuButton);
});