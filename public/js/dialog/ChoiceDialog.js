class ChoiceDialog extends Dialog
{
    constructor({speaker, text, choices}={choices: []}) {
        super({speaker, text, null});

        this.choices = choices;
    }
}