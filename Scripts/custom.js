$(document).ready(function () {

    /* Navbar Smooth Scrolling */
    var scrollLink = $('.scroll');
    scrollLink.click(function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    /* Navbar Highlight on Scroll */
    $('.slide').click(function () {

        var linkHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top
        }, 1500);
        e.preventDefault();
    });
    
    $(window).scroll(function(){
        var scrollBarLocation = $(this).scrollTop();
        scrollLink.each(function(){
            var sectionOffset = $(this.hash).offset().top

            if(sectionOffset <= scrollBarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active')
            }

        })
    })
});
