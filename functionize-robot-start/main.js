// DRAW ROBOT FACE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// ===FUNCTIONS===
// Circle Function
function circle(fill, cirCenX, cirCenY, cirWid) {
  ctx.beginPath();
  ctx.arc(cirCenX, cirCenY, cirWid, 0, 2 * Math.PI);
  // 1 is Fill, 2 is Stroke
  if (fill == 1) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
  console.log(
    `Circle Width: ${cirWid} | Circle Centre: ${cirCenX}, ${cirCenY} | Fill Type: ${fill}`
  );
}

// Rectangle Function
function rect(rec1, rec2, rec3, rec4) {
  ctx.fillRect(rec1, rec2, rec3, rec4);
  console.log(`rectangles: ${rec1}, ${rec2}, ${rec3}, ${rec4}`);
}

// Line Function
function line(thick, FirX, FirY, EndX, EndY) {
  if (thick == 2) {
    ctx.lineWidth = 2;
  }
  ctx.beginPath();
  ctx.moveTo(FirX, FirY);
  ctx.lineTo(EndX, EndY);
  ctx.stroke();
}

// Triangle Function
function triangle(fillTri, triX1, triY1, triX2, triY2, triX3) {
  ctx.beginPath();
  ctx.moveTo(triX1, triY1);
  ctx.lineTo(triX2, triY2);
  ctx.lineTo(triX3, triY2);
  if (fillTri == 1) {
    ctx.fill();
  } else {
    ctx.closePath();
    ctx.stroke();
  }
  console.log(
    `Triangle Side 1: ${triX1}, ${triY1} | Triangle Side 2: ${triX2}, ${triY2} | Triangle Side 3: ${triX3}, ${triY2} | Fill Type: ${fillTri}`
  );
}

// COLOR "rgb(100, 100, 100)"
ctx.fillStyle = "rgb(100, 100, 100)";

// Rectangle Behind Head for Ears
rect(80, 260, 460, 80);

// Filled Triangle for Hair
triangle(1, 180, 80, 140, 100, 220);

// Filled Triangle for Hair
triangle(1, 340, 80, 300, 100, 380);

// Outlined Triangle for Hair
triangle(2, 260, 80, 220, 100, 300);

// Outlined Triangle for Hair
triangle(2, 420, 80, 380, 100, 460);
// Filled Triangle for Neck
triangle(1, 300, 200, 220, 600, 380);

// Rectangle Head
ctx.fillStyle = "rgb(180, 180, 180)";
rect(100, 100, 400, 400);

// Filled Circle for Left Eye Socket
ctx.fillStyle = "rgb(235, 235, 235)";
circle(1, 200, 250, 50);

// Filled Circle for Right Eye Socket
circle(1, 400, 250, 50);

// Rectangle for Mouth
rect(200, 350, 200, 60);

// Horizontal Line for Teeth
ctx.strokeStyle = "rgb(180, 180, 180)";
line(200, 380, 400, 380);

// First Vertical Line for Teeth
line(1, 250, 350, 250, 410);

// Second Vertical Line for Teeth
line(1, 300, 350, 300, 410);

// Third Vertical Line for Teeth
line(1, 350, 350, 350, 410);

// Filled Circle for Left Eye
ctx.fillStyle = "rgb(100, 100, 100)";
circle(1, 200, 250, 30);

// Filled Circle for Right Eye
circle(1, 400, 250, 10);

// Outlined Circle for Left Eye Socket
ctx.strokeStyle = "rgb(100, 100, 100)";
circle(2, 200, 250, 50);

// Outlined Circle for Right Eye Socket
circle(2, 400, 250, 50);

// Line for Left Eyebrow ***** LINE WIDTH BROKEN
line(2, 150, 180, 250, 180);

// Line for Right Eyebrow
line(2, 350, 160, 450, 180);

// Outlined Triangle for Nose
triangle(2, 300, 280, 320, 320, 280);

// Sunglasses
ctx.strokeStyle = "rgb(0, 0, 0)";
ctx.fillStyle = "rgb(0, 0, 139)";
circle(1, 200, 250, 50);
circle(1, 400, 250, 50);
rect(150, 200, 100, 50);
rect(350, 200, 100, 50);
line(2, 250, 205, 350, 205);
line(2, 250, 230, 350, 230);
// Hat and Tie
ctx.fillStyle = "rgb(0, 0, 0)";
rect(230, 0, 150, 100);
rect(50, 79, 500, 25);
