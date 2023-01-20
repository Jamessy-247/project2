const scanner = document.getElementById("scanner");
let startTime;

function scanAnimation(timestamp) {
  if (!startTime) startTime = timestamp;
  const elapsedTime = timestamp - startTime;

  scanner.style.transform = `translateY(${(elapsedTime / 5) % 200 - 100}%)`;
  requestAnimationFrame(scanAnimation);
}

scanAnimation();
