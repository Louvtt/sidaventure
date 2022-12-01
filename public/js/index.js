//Create a Pixi Application
const app = new PIXI.Application({
    width: screen.width,
    height: screen.height
});

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);