const btns = document.querySelectorAll(".btn");
const messages = document.querySelectorAll(".message");

btns.forEach((btn, index) => {
  btn.addEventListener("mouseover", () => {
    messages[index].style.opacity = "1";
  });

  btn.addEventListener("mouseout", () => {
    messages[index].style.opacity = "0";
  });
});
