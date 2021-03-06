import $ from 'jquery';
import Mustache from 'mustache';

class Button {
    constructor(link) {
        this.link = link;
    }

    onClick(event) {
        event.preventDefault();
        console.log(this.link);
    }

    render(node) {
        const text = $(node).text();

        // start rendering the button
        $(node).html(Mustache.render(template, {text}));
        // attaching the listener
        $('.button').click(this.onClick.bind(this));
    }
}

export default Button;
