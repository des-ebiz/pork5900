$(function(){
    
    menuFn()
});

//메뉴
function menuFn(){
    var hd = $('.header');
    var scltop = $(window).scrollTop();
    var hdH = hd.innerHeight();
    var time = 800;
    //console.log(hdH)
    
    //menu click
    hd.find('a').on('click', function(e){
        
        e.preventDefault();
        var target = $(this).attr('href');
        var offsetTop;
        if(  target == '#none' ){
        //none
        }else{
            //로고 클릭
            if(  target == '#top' || target == '/' ){
                $('html, body').stop().animate({
                    scrollTop : 0
                }, time);
            }else{
            //메뉴
                offsetTop = $(target).offset().top;

                $('html, body').stop().animate({
                    scrollTop : (offsetTop-(hdH))
                }, time);
            }
        }
        return false;
    });
    
}
