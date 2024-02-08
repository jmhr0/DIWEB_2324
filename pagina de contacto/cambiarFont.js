function changeFont() {
    var elements = document.getElementsByTagName('*');
    for (var i = 0; i < elements.length; i++) {
        var style = window.getComputedStyle(elements[i]);
        var currentFont = style.fontFamily;
        if (currentFont !== 'OpenDyslexic') {
            elements[i].style.fontFamily = 'OpenDyslexic, ' + currentFont;
        }
    }
}