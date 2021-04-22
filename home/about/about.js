window.addEventListener('DOMContentLoaded', function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 0){
                $(this).addClass('scrollin');
            }
        });
    });
    $(window).scroll();
});