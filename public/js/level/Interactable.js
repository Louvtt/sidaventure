class Interactable {
    constructor({pos, spritePath, dialog}) {
        this.sprite = PIXI.Texture.from(spritePath);
        this.sprite.x = this.pos.x;
        this.sprite.y = this.pos.Y;
        this.sprite.interactive = true;
        this.sprite.on("click", (e) => {
            DialogManager.getInstance().setCurrent(this.dialog);
        });
        container.addChild(this.sprite);
    }
}