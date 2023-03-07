$(function() {

    $(document).on({
        mouseover: function() {
            $(this).find('.far').addClass('star-over');
            $(this).prevAll().find('.far').addClass('star-over');
        },
        mouseleave: function() {
            $(this).find('.far').removeClass('star-over');
            $(this).prevAll().find('.far').removeClass('star-over');
        }
    }, '.rate');

    $(document).on('click', '.rate', function() {
        if ( !$(this).find('.star').hasClass('rate-active') ) {
            $(this).siblings().find('.star').addClass('far').removeClass('fas star-gold');
            $(this).find('.star').addClass('fas star-gold').removeClass('far star-over');
            $(this).prevAll().find('.star').addClass('fas star-gold').removeClass('far star-over');
        } else {
            console.log('has');
        }
    });
});