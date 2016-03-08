if (document.querySelectorAll('a').length > 0) {
    require.ensure([], () => {
        const Button = require('./button').default;
        const button = new Button('https://www.google.com');
        button.render('a');
    }, 'button');
}

if (document.querySelectorAll('h1').length > 0) {
    require.ensure([], () => {
        const Header = require('./header').default;
        new Header().render('h1');
    }, 'header');
}
