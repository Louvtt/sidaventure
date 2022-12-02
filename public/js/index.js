//Create a Pixi Application
const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0xff0f0f
});

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

const dialogManager = new DialogManager(app);
fetch("assets/dialogscene1.json")
.then(async (res) => {
    const dialogScene1 = parseJsonDialogs(await res.json());
    console.log(dialogScene1);
    dialogManager.setCurrent(dialogScene1);
});
