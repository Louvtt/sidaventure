class Level {
    constructor(dialogFile) {
        this.dialogTree = {};
        fetch(dialogFile)
        .then(async (res) => {
            this.dialogTree = parseJsonDialogs(await res.json());
            dialogManager.setCurrent(this.dialogTree);
        });;
        this.container = new PIXI.Graphics();

        this._init();
    }

    _init() {}

    draw(app) {
        app.stage.addChild(this.container);
    }
}