import $ from 'jquery';
import Mustache from 'mustache';
import template from '../templates/header.html';
import '../sass/components/header.scss';


class Header {
    render(node) {
        const text = $(node).text();
        $(node).html(Mustache.render(template, {text}));
    }
}

export default Header;
