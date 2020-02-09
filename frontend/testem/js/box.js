class Box {
    constructor() {
        this.content = [];
    }

    get size() {
        return this.content.length;
    }

    add(object) {
        this.content.push(object);
    }

    throwAway() {
        this.content.length = 0;
    }
}
