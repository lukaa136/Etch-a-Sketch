const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  container.appendChild(div);
  div.classList.add("hoverEffect");
}

const hoverEff = document.querySelectorAll(".hoverEffect");
hoverEff.forEach((div) => {
  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "black";
  });
});
