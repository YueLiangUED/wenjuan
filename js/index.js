(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);


$(function () {
    //复选框样式
    (function () {
        $('.wrap input').each(function (index,ele) {
            if($(ele).is(':checked')){
                $(this).parent().css({'width':'1.6rem','height':'1.6rem','background':'url(./images/input1-2.png) center no-repeat','background-size':'cover'});
            }
        });
    })();
    $('.wrap input').click(function () {
        $('.wrap input').each(function (index,ele) {
            if($(ele).is(':checked')){
                $(this).parent().css({'width':'1.6rem','height':'1.6rem','background':'url(./images/input1-2.png) center no-repeat','background-size':'cover'});
            }else{
                $(this).parent().css({'width':'1.3rem','height':'1.3rem','background':'url(./images/input1-1.png) center no-repeat','background-size':'cover'})
            }
        });
    });

    //提交按钮
    $('.button').click(function () {
        $('.tc').css('display','block');
        showMask();
    });

    //弹窗确定按钮
    $('.tc span').click(function () {
        hideMask();
        $('.tc').css('display','none');
    });

    //遮罩层
    //显示遮罩层    
    function showMask(){
        $("#mask").css("height",$(document).height());
        $("#mask").css("width",$(document).width());
        $("#mask").show();
    }
    //隐藏遮罩层  
    function hideMask(){
        $("#mask").hide();
    }
    

});