$(document).ready(function () {
    $('#collapse-btn').click(function () {
        // alert('clicked');
        if ($('#navigation').hasClass('navbar')) {
            $('#navigation').removeClass('navbar');
            $('#navigation').addClass('navbar-open');
        } else {
            $('#navigation').removeClass('navbar-open');
            $('#navigation').addClass('navbar');
        }
    });

});

$(document).ready(function () {
    window.onscroll = function () {
        stickyNav();
    }

    var navbar = document.getElementById('navigation');
    var offset = navbar.offsetTop;

    function stickyNav() {
        if (window.pageYOffset >= offset) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    }
})