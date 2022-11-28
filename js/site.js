

function initMap() {
    const mepm = { lat: 36.560007113641745, lng: - 82.20629139082862 };
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 12,
            center: mepm,
        });
        const marker = new google.maps.Marker({
            position: mepm,
            map: map,
        });
    }

/*
    Carousel
*/
$('#carousel-example').on('slide.bs.carousel', function (e) {
    /*
        CC 2.0 License Iatek LLC 2018 - Attribution required
    */
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $('.carousel-item').length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
            // append slides to end
            if (e.direction == "left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});

var navOffset = parseInt($('body').css('padding-top'));
$('body').scrollspy({ target: '#affix-nav', offset: navOffset + 10});
$('.navbar a').click(function (event) {
    var scrollPos = jQuery('body').find($(this).attr('href')).offset().top;
    $('body,html').animate({ scrollTop: scrollPos }, 500, function () { });
    return false;
});


//Nav bar underline
$(function () {
    var $el,
        leftPos,
        newWidth,
        $mainNav = $(".navbar-nav");

    $mainNav.append("<li id='magic-line'></li>");
    var $magicLine = $("#magic-line");

    $magicLine
        .width($(".active").width())
        .css("left", $(".active a").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());

    $(".navbar-nav li a").hover(
        function () {
            $el = $(this);
            leftPos = $el.position().left;
            newWidth = $el.parent().width();
            $magicLine.stop().animate({
                left: leftPos,
                width: newWidth
            });
        },
        function () {
            $magicLine.stop().animate({
                left: $magicLine.data("origLeft"),
                width: $magicLine.data("origWidth")
            });
        }
    );
});

// Credit: https://css-tricks.com/jquery-magicline-navigation

function modifyStateIndex() {
    let stateObj = { id: "100" };
    window.history.replaceState(stateObj,
        "Page 3", "/Home/Index");
}function modifyStatePortfolio() {
    let stateObj = { id: "100" };
    window.history.replaceState(stateObj,
        "Page 3", "/Home/Portfolio");
}
function modifyStateServices() {
    let stateObj = { id: "100" };
    window.history.replaceState(stateObj,
        "Page 3", "/Home/Services");
}
function modifyStateContact() {
    let stateObj = { id: "100" };
    window.history.replaceState(stateObj,
        "Page 3", "/Home/Contact");
}






//Nav fade
$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();

   //  Show/hide menu on scroll
    if (scrollDistance <= 400) {
    		$('nav').fadeIn(150);
    } else {
    		$('nav').fadeOut(150);
    }

    // Assign active class to nav links while scolling
    $('.page-section').each(function (i) {
        if ($(this).position().top <= scrollDistance) {
            $('.navigation a.active').removeClass('active');
            $('.navigation a').eq(i).addClass('active');
        }
    });
}).scroll();



$(document).ready(function () {
    // workaround for deep link via anchor
    var stripped_url = window
        .location
        .toString()
        .split("#");
    if (stripped_url.length > 1) {
        $("a[href='#" + stripped_url[1] + "']")[0].click();
    }
});