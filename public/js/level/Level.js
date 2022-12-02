class Level {
    constructor(dialogTree) {
        this.dialogTree = dialogTree;
        this.container = new PIXI.Graphics();

        this._init();
    }

    _init() {}

    draw(app) {
        app.stage.addChild(this.container);
    }
}