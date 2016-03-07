import $ from 'jquery';
import template from '../templates/button.html';
import Mustache from 'mustache';
import '../sass/components/button.scss';


class Button {
    constructor(link) {
        this.link = link;
    }

    onClick(event) {
        event.preventDefault();
        alert(this.link);
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
