const anchors = document.querySelectorAll('.navbar-nav a')
const anchorBTC = document.querySelector('li p')
const navbar = document.querySelector('#navMain');
const navButton = document.querySelector('#navButton')
const navElements = document.querySelector('#navUl')
navButton.addEventListener('click', function () {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
    // navElements.style.flexDirection = "column"
})
for (let anchor of anchors) {
    anchor.addEventListener('mouseenter', function () {
        anchor.style.color = 'gold'
    })
    anchor.addEventListener('mouseleave', function () {
        anchor.style.color = ''
        anchor.style.boxShadow = ''
    })
}
const slideshows = document.querySelectorAll('.slideshow');

slideshows.forEach(slideshow => {
    const images = slideshow.querySelectorAll('img');
    let index = 0;
    setInterval(() => {
        images[index].classList.remove('active');
        index = (index + 1) % images.length;
        images[index].classList.add('active');
    }, 3000);
});
window.addEventListener('scroll', function () {

    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
    }
    else {
        navbar.style.backgroundColor = ''
    }
});


// hide navBar 
// hide navBar 
let scrollTimeout;
let lastScrollY = window.scrollY;

function showNavbar() {
    navbar.style.transform = 'translateY(0)';
    navbar.style.transition = 'transform 0.5s ease';
}

function hideNavbar() {
    navbar.style.transform = 'translateY(-100%)';
    navbar.style.transition = 'transform 0.5s ease';
}

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            hideNavbar();
        }, 1000);
    } else {
        showNavbar();
        clearTimeout(scrollTimeout);
    }

    lastScrollY = currentScrollY;
});
const scrollButton = document.getElementById('upBotton');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // Show after scrolling 100px
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

const myMap = document.querySelector('.footerMap')
myMap.addEventListener('click', function () {
    // console.log('clicked')
    window.open('https://www.google.com/maps?ll=8.517712,4.494892&z=13&t=m&hl=en&gl=NG&mapclient=embed', '_blank')
})
