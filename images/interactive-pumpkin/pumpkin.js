function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(89, 62, 99);
    noStroke();
  
    if (mouseIsPressed) {
      //Floor
      fill(117, 82, 130);
      rect(0, 170, 1000, 200);
  
      //Shadow
      let yellow = color("yellow");
      fill(yellow);
      rect(88, 200, 220, 200);
  
      //Stem
      let green = color("green");
      fill(green);
      ellipse(200, 140, 170, 100);
      rect(185, 60, 30, 50, 30);
  
      //Flesh
      let orange = color("orange");
      fill(orange);
      //Center pumpkin slice
      ellipse(200, 200, 120, 210);
      //Left pumpkin slices
      ellipse(150, 200, 100, 200);
      ellipse(120, 200, 80, 180);
      //Right pumpkin slices
      ellipse(250, 200, 100, 200);
      ellipse(280, 200, 80, 180);
  
      //Eyes
      fill(yellow);
      ellipse(150, 220, 50, 50);
      ellipse(250, 220, 50, 50);
  
      //Mouth
      fill(yellow);
      triangle(180, 248, 220, 248, 200, 270);
  
      //Lightning
      fill(999);
      quad(29, 0, 70, 0, 49, 64, 11, 55);
      triangle(39, 41, 75, 56, 17, 119);
  
      quad(339, 25, 375, 33, 361, 87, 325, 77);
      triangle(349, 66, 380, 75, 343, 133);
    } else {
      background("black");
      noStroke();
  
      //Floor
      fill(50);
      rect(0, 170, 1000, 200);
  
      //Shadow
      fill(0);
      rect(88, 10, 220, 400);
  
      //Stem
      let green = color("green");
      fill(green);
      ellipse(200, 140, 170, 100);
      rect(185, 60, 30, 50, 30);
  
      //Flesh
      let orange = color("orange");
      fill(orange);
      //Center pumpkin slice
      ellipse(200, 200, 120, 210);
      //Left pumpkin slice
      ellipse(150, 200, 100, 200);
      ellipse(120, 200, 80, 180);
      //Right pumpkin slice
      ellipse(250, 200, 100, 200);
      ellipse(280, 200, 80, 180);
  
      //Eyes
      let black = color("black");
      fill(black);
      ellipse(150, 220, 50, 50);
      ellipse(250, 220, 50, 50);
  
      //Mouth
      fill(black);
      triangle(180, 248, 220, 248, 200, 270);
    }
  
    //Show Coordinates
    // let x = mouseX;
    // let y = mouseY;
    // textSize(12);
    // fill("orange");
    // let s = x + ", " + y;
    // text(s, 20, 20);
  }
  