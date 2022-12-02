/** Dialog options */
const DialogOpt = {
    CharSpeed: 30,
    Margin: .01,
    Height: .3,

    SpeakerColor: 0xFF00FF,
    BackgroundColor: 0x000000,
    InnerTextColor: 0xFFFFFF
}

class Dialog {
    constructor({speaker, text, next}={next: null}) {
        this.next = next;
        this.speaker = speaker;
        this.text = text;
        this.onScreen = "";

        this.canGoToNext = false;
    }

    show(app) {
        this.onScreen = "";
        this.charIdx  = 0;

        this._animate(app);
    }

    _animate(app) {
        this.onScreen += this.text.charAt(this.charIdx);
        this.charIdx++;

        this._draw(app);

        if(this.charIdx < this.text.length) {
            setTimeout(() => { this._animate(app); }, DialogOpt.CharSpeed);
        } else {
            this.canGoToNext = true;
            this._draw(app);
        }
    }

    OnClick() {
        if(this.canGoToNext) {
            DialogManager.getInstance().setCurrent(this.next);
        } else {
            this.onScreen = this.text;
            this.charIdx  = this.text.length - 2;
        }
    }

    _draw(app) {
        const container = new PIXI.Graphics();
        container.x = window.innerWidth  * DialogOpt.Margin;
        container.y = window.innerHeight * (1 - DialogOpt.Margin - DialogOpt.Height);

        app.stage.addChild(container);

        // dialog box
        container.beginFill(DialogOpt.BackgroundColor);
        // bottom square
        container.drawRect(
            0, 0,
            window.innerWidth  * (1 - 2 * DialogOpt.Margin),
            window.innerHeight * DialogOpt.Height
        );

        const speakerText = new PIXI.Text(
            this.speaker,
            {
                fontSize: 32,
                fill: DialogOpt.SpeakerColor,
                wordWrap: true
            }
        );
        speakerText.x = speakerText.y = 10;
        container.addChild(speakerText);

        // inner text
        const text = new PIXI.Text(
            this.onScreen,
            {
                fontSize: 24,
                fill: DialogOpt.InnerTextColor,
                wordWrap: true
            }
        );
        text.x = text.y = 80;
        container.addChild(text);

        // next
        if(this.canGoToNext) {
            const arrow = new PIXI.Text(
                "v",
                {
                    fontSize: 20,
                    fill: DialogOpt.InnerTextColor,
                    wordWrap: true
                }
            );
            arrow.x = window.innerWidth * (1 - 2 * DialogOpt.Margin) - 20;
            arrow.y = window.innerHeight * (DialogOpt.Height - 4 * DialogOpt.Margin);
            container.addChild(arrow);
        }
    }
}