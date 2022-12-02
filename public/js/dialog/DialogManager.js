class DialogManager {
    constructor(app) {
        this.current = null;
        this.app = app;

        DialogManager.instance = this;

        this.dialogContainer = new PIXI.Graphics();
        this.app.stage.addChild(this.dialogContainer);
    }
    
    setCurrent(dialog) {
        this.current = dialog;
        this.showDialog();
    }

    showDialog() {
        this.dialogContainer.removeChildren();
        if(this.current)
            this.current.show(this.dialogContainer);
    }

    static getInstance() {
        return DialogManager.instance;
    }
}