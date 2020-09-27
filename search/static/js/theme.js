document.getElementById("theme-hue-btn-0").onclick = () => {
    let hue = 0;
    document.documentElement.style.setProperty('--main-hue', hue);
    localStorage.setItem('themeHue', hue.toString());
}
document.getElementById("theme-hue-btn-1").onclick = () => {
    let hue = 60;
    document.documentElement.style.setProperty('--main-hue', hue);
    localStorage.setItem('themeHue', hue.toString());
}
document.getElementById("theme-hue-btn-2").onclick = () => {
    let hue = 120;
    document.documentElement.style.setProperty('--main-hue', hue);
    localStorage.setItem('themeHue', hue.toString());
}
document.getElementById("theme-hue-btn-3").onclick = () => {
    let hue = 180;
    document.documentElement.style.setProperty('--main-hue', hue);
    localStorage.setItem('themeHue', hue.toString());
}
document.getElementById("theme-hue-btn-4").onclick = () => {
    let hue = 240;
    document.documentElement.style.setProperty('--main-hue', hue);
    localStorage.setItem('themeHue', hue.toString());
}

function changeTheme() {
    hue = document.getElementById("theme-range").value;
    document.documentElement.style.setProperty('--main-hue', hue);
    localStorage.setItem('themeHue', hue.toString());
}
