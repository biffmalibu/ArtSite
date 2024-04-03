window.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.container');
    var main = document.querySelector('main');
    var containerHeight = container.offsetHeight;
    var viewerHeight = window.innerHeight;
    var headerHeight = document.querySelector('header').offsetHeight;
    var footerHeight = document.querySelector('footer').offsetHeight;
    var navbarHeight = document.querySelector('.navbar').offsetHeight;
    var aHeight = document.querySelector('a').offsetHeight;
    var totalHeight = headerHeight + footerHeight + navbarHeight + aHeight;
    var difference = viewerHeight - totalHeight;
    console.log(difference);
    main.style.height = difference + 'px';
});

window.addEventListener('resize', function() {
    var container = document.querySelector('.container');
    var main = document.querySelector('main');
    var containerHeight = container.offsetHeight;
    var viewerHeight = window.innerHeight;
    var headerHeight = document.querySelector('header').offsetHeight;
    var footerHeight = document.querySelector('footer').offsetHeight;
    var navbarHeight = document.querySelector('.navbar').offsetHeight;
    var aHeight = document.querySelector('a').offsetHeight;
    var totalHeight = headerHeight + footerHeight + navbarHeight + aHeight;
    var difference = viewerHeight - totalHeight;
    console.log(difference);
    main.style.height = difference + 'px';
});

// window.addEventListener('DOMContentLoaded', function() {
//     var container = document.querySelector('.container');
//     var main = document.querySelector('main');
//     var containerHeight = container.offsetHeight;
//     var viewerHeight = window.innerHeight;
//     var difference = viewerHeight - containerHeight;
//     console.log(difference);
//     main.style.height = containerHeight  + difference/2 - 100 + 'px';
// });
// window.addEventListener('resize', function() {
//     var container = document.querySelector('.container');
//     var main = document.querySelector('main');
//     var containerHeight = container.offsetHeight;
//     var viewerHeight = window.innerHeight;
//     var difference = viewerHeight - containerHeight;
//     console.log(difference);
//     main.style.height = containerHeight  + difference/2 - 100 + 'px';
// });

