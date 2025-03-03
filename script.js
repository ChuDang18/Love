const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawHeart(x, y, size) {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x - size, y - size, x - 2 * size, y, x, y + size);
    ctx.bezierCurveTo(x + 2 * size, y, x + size, y - size, x, y);
    ctx.fill();
}

function drawText(x, y) {
    ctx.fillStyle = "white";
    ctx.font = "50px Arial";
    ctx.fillText("Chúc em bé của anh một buổi chiều vui vẻ nho!", x, y);
}

function drawConfetti(x, y) {
    for (let i = 0; i < 20; i++) {
        ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
        ctx.fillRect(x + Math.random() * 50 - 25, y + Math.random() * 50 - 25, 5, 5);
    }
}

canvas.addEventListener("click", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    drawHeart(x, y, 20);
    drawText(x - 30, y);
    drawConfetti(x, y);
});

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
