//Create a Pixi Application
const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x000000
});

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

const dialogManager = new DialogManager(app);
const firstLevel = new FirstLevel();
firstLevel.draw(app);