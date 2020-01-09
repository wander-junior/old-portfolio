function addMargin() {
    window.scrollTo(0, window.pageYOffset - 70);
}

window.addEventListener('hashchange', addMargin);