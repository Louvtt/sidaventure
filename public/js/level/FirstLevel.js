class FirstLevel extends Level {
    constructor() {
        super("assets/dialogscene1.json");
    }
    
    draw(app) {
        const background = PIXI.Texture.from("assets/background/scene1.png");
        const container = new PIXI.Container();
        const backgroundSprite = new PIXI.Sprite(background);
        backgroundSprite.x = backgroundSprite.y = 0;
        backgroundSprite.width = window.innerWidth;
        backgroundSprite.height = window.innerHeight;
        container.addChild(backgroundSprite);
        
        DialogManager.getInstance().showDialog(container);
        app.stage.addChild(container);
    }
}