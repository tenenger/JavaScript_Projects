const colors = ["green", "tomato", "rgba(133, 122, 200)", "#f15025"];const btn = document.querySelector(".btn-dark");
const color = document.querySelector(".color");
const container_h2_span = document.querySelector(".container > h2 > span");

btn.addEventListener("click", () => {
  console.log("asd");
  const randomNumber = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomNumber];
  container_h2_span.textContent = colors[randomNumber];
});
