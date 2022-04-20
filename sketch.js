const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bottom_ground, left_ground, right_ground, top_Ground;
// var invisibleGround;
var obs1, obs2;
var ball;

function preload() {}

function setup() {
  createCanvas(900, 600);

  engine = Engine.create();
  world = engine.world;

  bottom_ground = new Ground(450, 590, 900, 20);
  right_ground = new Ground(890, 300, 20, 600);
  top_ground = new Ground(450, 10, 900, 20);
  left_ground = new Ground(10, 300, 20, 600);

  //   invisibleGround = new Ground(540, 575, 630 - 450, 10);

  obs1 = new Ground(450, 480, 15, 200);
  obs2 = new Ground(630, 480, 15, 200);

  fill("cyan");
  var ball_options = {
    restitution: 0.8,
    density: 1.2,
  };

  ball = Bodies.circle(300, 50, 30, ball_options);
  World.add(world, ball);

  ellipseMode(RADIUS);
  //Create the Bodies Here.

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();
  bottom_ground.display();
  right_ground.display();
  top_ground.display();
  left_ground.display();

  obs1.display();
  obs2.display();

  //   invisibleGround.display();

  ellipse(ball.position.x, ball.position.y, 30);

  //   if (ball.isTouching(invisibleGround)) {
  //     Text("You Win!!", 450, 300);
  //   }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0, y: -50 });
  } else if (keyCode === RIGHT_ARROW) {
    Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 50, y: 0 });
  }
}
