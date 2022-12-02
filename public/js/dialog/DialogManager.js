class DialogManager {
    constructor(app) {
        this.current = null;
        this.app = app;

        DialogManager.instance = this;
        document.addEventListener("click", (e) => {
            this.current.OnClick();
        });
    }
    
    setCurrent(dialog) {
        this.current = dialog;
        this.showDialog();
    }

    showDialog() {
        if(this.current)
            this.current.show(this.app);
    }

    static getInstance() {
        return DialogManager.instance;
    }
}