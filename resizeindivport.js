window.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.container');
    var main = document.querySelector('main');
    var containerHeight = container.offsetHeight;
    var viewerHeight = window.innerHeight;
    var difference = viewerHeight - containerHeight;
    console.log(difference);
    main.style.height = containerHeight  + difference/2 - 100 + 'px';
});
window.addEventListener('resize', function() {
    var container = document.querySelector('.container');
    var main = document.querySelector('main');
    var containerHeight = container.offsetHeight;
    var viewerHeight = window.innerHeight;
    var difference = viewerHeight - containerHeight;
    console.log(difference);
    main.style.height = containerHeight  + difference/2 - 100 + 'px';
});
