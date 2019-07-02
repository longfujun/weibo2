// 页面显示的登录注册对话框
$('.rightTopBox .denglu .list li a').click(function () {
    $(this).addClass('currentDl').parent().siblings().children().removeClass('currentDl');
} );
$('.rightTopBox .denglu .list li:first a').click(function () {
    $('.rightTopBox .anquanBox').css('display','none'),
    $('.rightTopBox .phone').css('display','none'),
    $('.rightTopBox .zhanghaoBox').css('display','block')
});
$('.rightTopBox .denglu .list li:last a').click(function () {
    $('.rightTopBox .zhanghaoBox').css('display','none'),
    $('.rightTopBox .phone').css('display','block'),
    $('.rightTopBox .anquanBox').css('display','block'),
    setInterval(function(){
        $('.rightTopBox .phone').css('display','none')
    } ,3000)
});
$('.rightTopBox .anquanBox .qrCode img').mouseover(function(){
    $('.right-top .phone').css('display','block')
});


// 弹出的登录对话框js
$('.maskBoxmain .denglu .list li a').click(function () {
    $(this).addClass('currentDltwo').parent().siblings().children().removeClass('currentDltwo');
} );
$('.maskBoxmain .denglu .list li:first a').click(function () {
    $('.maskBoxmain .anquanBox').css('display','none'),
    $('.maskBoxmain .phone').css('display','none'),
    $('.maskBoxmain .zhanghaoBox').css('display','block')
});
$('.maskBoxmain .denglu .list li:last a').click(function () {
    $('.maskBoxmain .zhanghaoBox').css('display','none'),
    $('.maskBoxmain .phone').css('display','block'),
    $('.maskBoxmain .anquanBox').css('display','block')
    setInterval(function(){
        $('.maskBoxmain .phone').css('display','none')
    } ,3000)
});
$('.maskBoxmain .anquanBox .qrCode img').mouseover(function(){
    $('.maskBoxmain .phone').css('display','block')
});
// 点击页面的登录弹出登录对话框
$('.l-header .link2 li:first a').click(function () {
    $('.mask').css('display','block')
})
$('.mask .maskBox span').click(function () {
    $('.mask').css('display','none')
})