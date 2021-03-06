let navPos = $('nav').position().top;
let lastPos = 0;

$(window).on('scroll', () => {
    const pos = $(window).scrollTop();
    const pos2 = pos + 500;
    const scrollBottom = pos + $(window).height();

    if (pos >= navPos + $('nav').height() && lastPos < pos) {
        $('nav').addClass('sticky');
    }
    if (pos < navPos && lastPos > pos) {
        $('nav').removeClass('sticky');
    }

    if (pos2 > $('#home').offset().top) {
        highlightLink('home');
    }
    if (pos2 > $('#projects').offset().top) {
        highlightLink('projects');
    }
    if (pos2 > $('#contact').offset().top) {
        highlightLink('contact');
    }

    lastPos = pos;
});

function highlightLink(anchor) {
    $('nav .active').removeClass('active');
    $('nav')
        .find('[dest="' + anchor + '"]')
        .addClass('active');
}

$('.nav-link').click(function() {
    const anchor = $(this).attr('dest');

    $('html, body').animate(
        {
            scrollTop: $('#' + anchor).offset().top
        },
        400
    );
});

// $('#contact-form').submit(e => {
//     console.log('SENDING');
//     e.preventDefault();

//     $.ajax({
//         url: 'https://formspree.io/ToddPetersonGV@gmail.com',
//         method: 'POST',
//         data: { message: $('form').serialize() },
//         dataType: 'json'
//     }).done(response => {
//         console.log('DONE');
//         $('#contact-form')
//             .find('input[type=text], input[type=email], textarea')
//             .val('');
//     });
//     console.log('EXIT');
// });
