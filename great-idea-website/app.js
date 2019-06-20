// Fixed nav bar implemented with JavaScript
window.onscroll = () => {myFunction()};

let navbar = document.getElementById('headerdiv');

let sticky = headerdiv.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}
//