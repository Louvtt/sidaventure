/** Dialog options */
const DialogOpt = {
    CharSpeed: 15, // ms
    Margin: .01, // %
    Height: .3, // %
    ChoiceHeight: 30, // px

    // Colors

    SpeakerColor: 0xFF00FF,
    BackgroundColor: 0x000000,
    InnerTextColor: 0xFFFFFF
}

class Dialog {
    constructor({speaker, text, next, choices}={next: null, choices: []}) {
        this.next = next;
        this.speaker = speaker;
        this.text = text;
        this.choices = choices ?? [];
        this.onScreen = "";

        this.animationTimeout = null;

        this.canGoToNext = false;
    }

    show(baseContainer) {
        this.onScreen = "";
        this.charIdx  = 0;

        this.baseContainer = baseContainer;
        this._animate(baseContainer);
    }

    _animate(baseContainer) {
        this.onScreen += this.text.charAt(this.charIdx);
        this.charIdx++;

        this._draw(baseContainer);

        if(this.charIdx < this.text.length && !this.canGoToNext) {
            this.animationTimeout = setTimeout(() => { this._animate(baseContainer); }, DialogOpt.CharSpeed);
        } else {
            this.canGoToNext = true;
            this._draw(baseContainer);
        }
    }

    _draw(baseContainer) {
        const container = new PIXI.Graphics();
        container.x = window.innerWidth  * DialogOpt.Margin;
        container.y = window.innerHeight * (1 - DialogOpt.Margin - DialogOpt.Height);

        baseContainer.addChild(container);

        container.interactive = true;
        container.on("click", (e) => {
            if(this.animationTimeout)
                clearTimeout(this.animationTimeout);

            if(this.canGoToNext && this.choices.length == 0) { // go to next
                DialogManager.getInstance().setCurrent(this.next);
            } else { // end animation
                this.onScreen = this.text;
                this.charIdx  = this.text.length - 1;
                this.canGoToNext = true;
            }
        });

        // dialog box
        container.beginFill(DialogOpt.BackgroundColor);
        // bottom square
        container.drawRect(
            0, 0,
            window.innerWidth  * (1 - 2 * DialogOpt.Margin),
            window.innerHeight * DialogOpt.Height
        );

        const dialogBoxWidth = window.innerWidth  * (1 - 10 * DialogOpt.Margin);
        const speakerText = new PIXI.Text(
            this.speaker,
            {
                fontSize: 32,
                fill: DialogOpt.SpeakerColor,
                wordWrap: true,
                wordWrapWidth: dialogBoxWidth
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
                wordWrap: true,
                wordWrapWidth: dialogBoxWidth
            }
        );
        text.x = text.y = 80;
        container.addChild(text);

        if(this.canGoToNext) {
            // next arrow if no choices
            if(this.choices.length == 0) {
                const arrow = new PIXI.Text(
                    "v",
                    {
                        fontSize: 20,
                        fill: DialogOpt.InnerTextColor,
                        wordWrap: true,
                        wordWrapWidth: dialogBoxWidth
                    }
                );
                arrow.x = window.innerWidth * (1 - 2 * DialogOpt.Margin) - 20;
                arrow.y = window.innerHeight * (DialogOpt.Height - 4 * DialogOpt.Margin);
                container.addChild(arrow);
            }
            // choices
            else {
                // start from bottom
                let optY = window.innerHeight * (DialogOpt.Height - 4 * DialogOpt.Margin);
                for(let i = 0; i < this.choices.length; ++i) {
                    const optData = this.choices[this.choices.length - i - 1];
                    const optText = new PIXI.Text(
                        " - " + optData.name,
                        {
                            fontSize: 20,
                            fill: DialogOpt.InnerTextColor,
                            wordWrap: false,
                            wordWrapWidth: dialogBoxWidth
                        }
                    );
                    optY -= DialogOpt.ChoiceHeight;
                    optText.x = 20;
                    optText.y = optY;

                    optText.interactive = true;
                    optText.on('click', (e) => {
                        console.log("test", optData.text);
                        DialogManager.getInstance().setCurrent(optData.next);
                    });
                    
                    container.addChild(optText);
                }
            }
        }

    }
}