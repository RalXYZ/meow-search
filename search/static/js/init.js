if (localStorage.getItem('themeHue') == null) {
    localStorage.setItem('themeHue', '216');
}

document.documentElement.style.setProperty('--main-hue', Number(localStorage.getItem('themeHue')));
