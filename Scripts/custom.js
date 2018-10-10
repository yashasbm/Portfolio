$(document).ready(function () {

    /* Navbar Smooth Scrolling */
    $('.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: -20, 'axis':'y'});
		
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

    $('#inline-popups,#inline-popups-2,#inline-popups-3,#inline-popups-4,#inline-popups-5,#inline-popups-6').magnificPopup({
		delegate: 'a',
		removalDelay: 400, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		midClick: true
	});
});
