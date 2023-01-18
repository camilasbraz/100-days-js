const scrollBtn = document.querySelector(".top");
const rootEl = document.documentElement;

document.addEventListener("scroll", showBtn);
scrollBtn.addEventListener("click", scrollToTop);

// scrollHeight --> O quanto deu scroll
// cleintHeight --> A altura da página
function showBtn() {
  const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;
  if (rootEl.scrollTop / scrollTotal > 0.3) {
    scrollBtn.classList.add("show-btn");
  } else {
    scrollBtn.classList.remove("show-btn");
  }
}

function scrollToTop() {
  rootEl.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
