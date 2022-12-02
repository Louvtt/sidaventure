//Create a Pixi Application
const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0xff0f0f
});

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

// dialog without choices
const d1 = new Dialog({
    speaker: "player",
    text: "blablablablabla",
    next: new Dialog({
        speaker: "pas player",
        text: "blablablablabla blablablablabla",
        next: new Dialog({
            speaker: "player",
            text: "alors oui",
            choices: [
                {text: "first", next: new Dialog({speaker: "player", text: "Premier"})},
                {text: "second", next: new Dialog({speaker: "player", text: "Second"})}
            ]
        })
    })
});

// dialog with choices
const d2 = new Dialog({
    speaker: "player",
    text: "alors oui",
    choices: [
        {text: "first", next: new Dialog({speaker: "player", text: "Premier"})},
        {text: "second", next: new Dialog({speaker: "player", text: "Second"})}
    ]
});

const dialogManager = new DialogManager(app);
dialogManager.setCurrent(d2);