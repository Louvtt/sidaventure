class SecondLevel extends Level {
    constructor() {
        super("assets/dialogscene2.json");
    }
    
    _init() {}
    
    draw(app) {
        const background = PIXI.Texture.from("assets/background/scene2.jpeg");
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