class DialogManager {
    constructor(app) {
        this.current = null;
        this.app = app;

        DialogManager.instance = this;

        this.dialogContainer = new PIXI.Graphics();
    }
    
    setCurrent(dialog) {
        this.current = dialog;
        this.showDialog(this.container);

        if(this.current == null) {
            const second = new SecondLevel();
            second.draw(this.app);
        }
    }

    showDialog(container) {
        this.container = container;
        this.dialogContainer.removeChildren();
        if(this.current)
            this.current.show(this.dialogContainer);
        container.addChild(this.dialogContainer);
    }

    static getInstance() {
        return DialogManager.instance;
    }
}