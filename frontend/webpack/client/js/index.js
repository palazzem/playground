import '../sass/main.scss';

if (document.querySelectorAll('a').length > 0) {
    require.ensure([], () => {
        const Button = require('../components/button/button.js').default;
        const button = new Button('https://www.google.com');
        button.render('a');
    }, 'button');
}

if (document.querySelectorAll('h1').length > 0) {
    require.ensure([], () => {
        const Header = require('../components/header/header.js').default;
        new Header().render('h1');
    }, 'header');
}
