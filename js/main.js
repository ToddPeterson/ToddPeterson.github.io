let navPos = $('nav').position().top;
let lastPos = 0;

$(window).on('scroll', () => {
    const pos = $(window).scrollTop();
    const pos2 = pos + 50;
    const scrollBottom = pos + $(window).height();

    if (pos >= navPos + $('nav').height() && lastPos < pos) {
        $('nav').addClass('sticky');
    }
    if (pos < navPos && lastPos > pos) {
        $('nav').removeClass('sticky');
    }
    lastPos = pos;
});
