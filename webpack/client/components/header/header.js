import $ from 'jquery';
import Mustache from 'mustache';

class Header {
    render(node) {
        const text = $(node).text();
        $(node).html(Mustache.render(template, {text}));
    }
}

export default Header;
