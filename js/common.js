(function($){

    
    $('.depth1 > li').hover(
        function(){
            $(this).find('.depth2')
            .stop().slideDown(700)
        },
        function(){
            $(this).find('.depth2')
            .stop().slideUp(500)
        }
    )


    $('#kimBox').load('main.html') //load시켜라 + 파일경로(또는 파일명)만 쓰면 됨


})(jQuery)