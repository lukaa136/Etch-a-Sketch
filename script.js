const container = document.querySelector(".container");
const html = document.querySelector("html");

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  container.appendChild(div);
  div.classList.add("hoverEffect");
}

function turnBGBLACK(event) {
  event.target.style.backgroundColor = "black";
}

const hoverEff = document.querySelectorAll(".hoverEffect");

html.addEventListener("mousedown", () => {
  hoverEff.forEach((div) => {
    div.addEventListener("mouseover", turnBGBLACK);
  });
});

html.addEventListener("mouseup", () => {
  hoverEff.forEach((div) => {
    div.removeEventListener("mouseover", turnBGBLACK);
  });
});
