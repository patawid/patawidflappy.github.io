function setup() {
    createCanvas(400, 400);
  }

  function draw() {
    background(8, 9, 56);

    //thickness of the stars
    strokeWeight(2);
    //color of the stars
    stroke(255, 255, 255);
    //stars using circles
    circle(55,20,0.1);
    circle(26,7,0.1);
    circle(52,49,0.1);
    circle(11,50,0.1);
    circle(74,28,0.1);
    circle(6,7,0.1);
    circle(31,67,0.1);
    circle(61,90,0.1);
    circle(10,98,0.1);
    circle(38,112,0.1);
    circle(68,2,0.1);
    circle(100,13,0.1);
    circle(79,59,0.1);
    circle(94,34,0.1);
    circle(129,23,0.1);
    circle(15,118,0.1);
    circle(183,57,0.1);
    circle(173,36,0.1);
    circle(7,204,0.1);
    circle(27,139,0.1);
    circle(55,135,0.1);
    circle(9,171,0.1);
    circle(29,190,0.1);
    circle(40,165,0.1);
    circle(62,208,0.1);
    circle(141,6,0.1);
    circle(142,48,0.1);
    circle(24,216,0.1);
    circle(53,239,0.1);
    circle(12,243,0.1);
    circle(81,232,0.1);
    circle(75,262,0.1);
    circle(30,253,0.1);
    circle(174,12,0.1);
    circle(202,4,0.1);
    circle(227,10,0.1);
    circle(256,6,0.1);
    circle(244,19,0.1);
    circle(271,29,0.1);
    circle(283,10,0.1);
    circle(293,24,0.1);
    circle(297,45,0.1);
    circle(311,8,0.1);
    circle(320,37,0.1);
    circle(318,65,0.1);
    circle(328,20,0.1);
    circle(337,52,0.1);
    circle(349,6,0.1);
    circle(360,19,0.1);
    circle(365,51,0.1);
    circle(317,91,0.1);
    circle(346,346,0.1);
    circle(350,76,0.1);
    circle(386,77,0.1);
    circle(386,34,0.1);
    circle(382,5,0.1);
    circle(343,104,0.1);
    circle(384,113,0.1);
    circle(354,134,0.1);
    circle(329,151,0.1);
    circle(382,153,0.1);
    circle(343,175,0.1);
    circle(385,185,0.1);
    circle(325,198,0.1);
    circle(362,211,0.1);
    circle(302,227,0.1);
    circle(331,217,0.1);
    circle(378,236,0.1);
    circle(322,248,0.1);
    circle(353,254,0.1);
    circle(280,261,0.1);
    circle(382,272,0.1);

    //border color of the moon's crest
    stroke(247, 241, 143);
    //the color of the moons crest
    fill(247, 241, 143);
    //the circle of the moon
    circle(358,35,50);

    //border color of the moon's cover
    stroke(8, 9, 56);
    //color of the moon's cover
    fill(8, 9, 56);
    //circle of the moon's cover
    circle(372,32,50);

    //thickness of the stars
    strokeWeight(2);
    //color of the stars
    stroke(255, 255, 255);
    //extra stars
    circle(370,34,0.1)

    //thickness of the water
    strokeWeight(0);
    //blue color water
    fill(39, 51, 110);
    //rectangle that acts as the water
    rect(0,285,400,180);

    //color of the outline of the wheel
    stroke(65, 66, 77);
    //outline color for the wheel
    fill(8, 9, 56);
    //thickness of the circle
    strokeWeight(12);
    //circle for the wheel
    ellipse(195,144,250,250);
    //thickness of the lines in the wheel
    strokeWeight(5);
    //polygon shape for the lines in the wheel
    beginShape();
    vertex(195,20);
    vertex(195,144);
    vertex(225,23);
    vertex(195,144);
    vertex(255,31);
    vertex(195,144);
    vertex(278,48);
    vertex(195,144);
    vertex(295,71);
    vertex(195,144);
    vertex(309,93);
    vertex(195,144);
    vertex(317,121);
    vertex(195,144);
    vertex(318,149);
    vertex(195,144);
    vertex(314,175);
    vertex(195,144);
    vertex(305,201);
    vertex(195,144);
    vertex(286,226);
    vertex(195,144);
    vertex(261,250);
    vertex(195,144);
    vertex(236,261);
    vertex(195,144);
    vertex(210,268);
    vertex(195,144);
    vertex(181,266);
    vertex(195,144);
    vertex(150,260);
    vertex(195,144);
    vertex(118,244);
    vertex(195,144);
    vertex(96,219);
    vertex(195,144);
    vertex(79,190);
    vertex(195,144);
    vertex(70,159);
    vertex(195,144);
    vertex(70,127);
    vertex(195,144);
    vertex(81,94);
    vertex(195,144);
    vertex(101,63);
    vertex(195,144);
    vertex(127,41);
    vertex(195,144);
    vertex(161,23);
    vertex(195,144);
    endShape(CLOSE);
   


    //thickness of the line
    strokeWeight(15);
    //color of the base
    stroke(48, 49, 54);
    //line of the wheel base
   line(195,144,154,276);
    //second line of the wheel base
    line(195,144,240,276);

    //thickness for the water ripple
    strokeWeight(2);
    // water ripple color
    stroke(20,20,19);
    //water ripple
    line(245,328,362,328);
    line(138,310,264,310);
    line(152,344,262,344);
    line(166,325,205,325);
    line(43,370,183,370);
    line(26,331,116,331);
    line(239,359,322,359);
    line(30,298,164,298);
    line(315,303,378,303);
    line(248,298,274,298);

    //thickness of the seperation
    strokeWeight(5);
    //color of the border and sand
    stroke(128, 126, 94);
    //line to separate the land and the water
    line(0,285,400,285);

    //color of the ellipse
    stroke(252, 3, 232);
    //circles on the wheel
    ellipse(125,40,3,3);
    ellipse(163,22,3,3);
    ellipse(194,19,3,3);
    ellipse(226,23,3,3);
    ellipse(255,35,3,3);
    ellipse(276,49,3,3);
    ellipse(297,71,3,3);
    ellipse(309,92,3,3);
    ellipse(317,121,3,3);
    ellipse(321,148,3,3);
    ellipse(319,175,3,3);
    ellipse(307,201,3,3);
    ellipse(288,229,3,3);
    ellipse(262,251,3,3);
    ellipse(210,269,3,3);
    ellipse(182,268,3,3);
    ellipse(119,244,3,3);
    ellipse(95,221,3,3);
    ellipse(79,190,3,3);
    ellipse(72,159,3,3);
    ellipse(72,128,3,3);
    ellipse(83,94,3,3);
    ellipse(102,61,3,3);

    //color of the lights on the beam
    stroke(255, 255, 255);
    //thickness of the circles
    strokeWeight(5)
    //circles on the beam
    ellipse(185,175,5,5);
    ellipse(178,195,5,5);
    ellipse(172,215,5,5);
    ellipse(165,235,5,5);
    ellipse(159,253,5,5);
    ellipse(154,270,5,5);
    ellipse(205,175,5,5);
    ellipse(213,195,5,5);
    ellipse(219,215,5,5);
    ellipse(225,235,5,5);
    ellipse(231,253,5,5);
    ellipse(238,270,5,5);

    //color of the coordinates
    fill(255,255,255);
    //thickness for the coordinates
    strokeWeight(0);
    //coordinates
    text(mouseX,0,10);
    text(mouseY,0,20);


  }