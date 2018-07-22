let world;
let engine;
// let ground;
let keys = [];

setup = () => {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.parent("canvas");

    engine = Matter.Engine.create();
    world = engine.world;
    Matter.Engine.run(engine);

    // ground = Matter.Bodies.rectangle(300, height, width, 40, {isStatic: true});
    // Matter.World.add(world, ground)
};

draw = () => {
    background(255);

    for (let i in keys) {
        keys[i].show();
        // if (keys[i].body.position.y > windowHeight * 2) {
        //     keys.splice(i);
        // }
    }
};

windowResized = () => {
    resizeCanvas(windowWidth, windowHeight);
};

// push shape in keys array
mouseClicked = () => {
    keys.push(new Key(mouseX, mouseY, 100, 100));
};

keyTyped = () => {
    let position = new KeyMapper().getPosition(key);

    if (Number.isInteger(position)) {
        keys.push(new Key(((windowWidth / 13) * (position + 1)) + random(-windowWidth / 10, windowWidth / 10),
            windowHeight + 150,
            100,
            100));
    }
};

