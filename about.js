document.addEventListener('DOMContentLoaded', function() {
    var navbarUl = document.querySelector('nav');
    var blurElement = document.querySelector('.blur');

    navbarUl.addEventListener('mouseover', function() {
        blurElement.style.opacity = '1';
    });

    navbarUl.addEventListener('mouseout', function() {
        blurElement.style.opacity = '0';
    });
});