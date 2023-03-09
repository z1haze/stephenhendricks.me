import "./style.scss";

const right = document.getElementById(
  "hero-clipping-wrapper"
)! as HTMLDivElement;

const handleMove = (e: MouseEvent) => {
  right.style.width = `${(e.clientX / window.innerWidth) * 100}%`;
};

document.onmousemove = (e) => handleMove(e);
