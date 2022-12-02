const parseJsonDialogs = (json) => {
    let root = new Dialog(json[json.root]);
    let stack = [root];
    while(stack.length != 0) {
        let current = stack.pop();
        if(!current) continue;

        if(current["next"]) {
            const next = new Dialog(json[current.next]);
            if(current.next) {
                stack.push(next);
                current.next = next;
            }
        }

        if(current["choices"]) {
            const choices = [];
            for(let choice of current.choices) {
                const nextChoice = new Dialog(json[choice.next]);
                if(nextChoice) {
                    choices.push({name: choice.name, next: nextChoice});
                    stack.push(nextChoice);
                }
            }
            current.choices = choices;
        }
    }

    // convert to dialog objects

    return root;
}