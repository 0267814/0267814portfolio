function drawClock() {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
   
    var grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius);
    grad.addColorStop(0, "#ffcc00");
    grad.addColorStop(1, "#333");
    ctx.fillStyle = grad;
    ctx.fill();

   
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
}

function drawNumbers(ctx, radius) {
    var ang;
    var num;
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#333";
    ctx.textAlign = "center";

    for (num = 1; num <= 12; num++) {
        ang = (num * Math.PI) / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
    }
}

function drawTime(ctx, radius) {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    
    hour = hour % 12;
    hour = (hour + minute / 60) * (Math.PI / 6); 
    drawHand(ctx, hour, radius * 0.5, radius * 0.07); //horas

    minute = (minute + second / 60) * (Math.PI / 30); 
    drawHand(ctx, minute, radius * 0.8, radius * 0.07); //minutos

    second = (second * Math.PI) / 30; 
    drawHand(ctx, second, radius * 0.9, radius * 0.02); //segundos
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}
