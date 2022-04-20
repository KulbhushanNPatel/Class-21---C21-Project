class Ground {
  constructor(x, y, w, h) {
    var ground_options = {
      isStatic: true,
    };

    this.body = Bodies.rectangle(x, y, w, h, ground_options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  display() {
    var position = this.body.position;
    push();

    rectMode(CENTER);
    fill("cyan");
    rect(position.x, position.y, this.w, this.h);

    pop();
  }
}
