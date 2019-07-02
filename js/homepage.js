var ipt = document.querySelector('.ipt');
var list = document.querySelector('.list');
var form = document.querySelector('.form');
var Script = null;
ipt.onfocus=function (){//搜索框获取焦点事件
    form.style.background='#ffffff';
    ipt.style.background='#ffffff';
    form.style.border='1px solid #fa7d3c';
    list.style.display='block';
    list.innerHTML= '<a href="#">'+'<li>'+ 1+'</li>'+'</a>'+'<a href="#">'+'<li>'+ 2+'</li>'+'</a>'
    +'</a>'+'<a href="#">'+'<li>'+ 3+'</li>'+'</a>'+'</a>'+'<a href="#">'+'<li>'+ 4+'</li>'+'</a>'
    +'</a>'+'<a href="#">'+'<li>'+ 5+'</li>'+'</a>'+'</a>'+'<a href="#">'+'<li>'+ 6+'</li>'+'</a>';
}
ipt.onblur=function (){//搜索框失去焦点事件
    form.style.background='#f2f2f5';
    ipt.style.background='#f2f2f5';
    list.style.display='none';
    form.style.border='1px solid #cfcfcf';
    ipt.value='';
    list.innerHTML = '';
}
ipt.onkeyup = function () {//搜索框输入内容百度连锁事件
    if(Script){ 
        document.body.removeChild(Script);
    }
    //利用js创建一个script标签，把json的url赋给script的scr属性，把这个script插入到页面里，让浏览器去跨域获取资源
    Script = document.createElement('script');
    Script.src = 'http://suggestion.baidu.com/su?cb=myCb&wd='+ipt.value;

    document.body.appendChild(Script);
}
function myCb(json) {//接收处理数据
    list.innerHTML = '';
    for(var i = 0, len = json.s.length; i < len; i++){
        list.innerHTML += '<a href="#">'+'<li>'+ json.s[i]+'</li>'+'</a>';
    }
}
// 头部js结束
// var aside = document.querySelector('.l-aside');
// window.onscroll=function(){
//     var sTop=document.documentElement.scrollTop||document.body.scrollTop;
//     if(sTop>68){
//         aside.style.position="fixed";
//         aside.style.top=48+'px';
//     }
//     else{
//         aside.style.position="static";
//     }
// }
//导航栏选择效果
$('.nav li a').click(function () {
    $(this).addClass('current').parent().siblings().children().removeClass('current');
} );
//main中心轮播图；
var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        // autoplay:true,//等同于以下设置
        speed:1000,//切换速度，即slider自动滑动开始到结束的时间（单位ms）
        // grabCursor : true,//设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。
        autoplay: {
            delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction: false,//用户操作swiper之后，是否禁止autoplay。默认为true：停止。
            },
        // 如果需要分页器
        pagination: {
        el: '.swiper-pagination',
        clickable :true,//此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
        },
    })

    //右下侧回到顶部按钮事件和侧边栏滚动固定事件
var aside = document.querySelector('.l-aside');
var onUp = document.querySelector('.onUp');
var lHeader = document.querySelector('.l-header');
window.onscroll=function(){
    var sTop=document.documentElement.scrollTop||document.body.scrollTop;
    if(sTop>20){
        onUp.style.display='block';
        lHeader.style.boxShadow='0px 1px 0px 0px rgba(0,0,0,0.1)';
    }
    else{
        onUp.style.display='none';
        lHeader.style.boxShadow='0px 0px 0px 0px #fff';
    };
    if(sTop>20){
        aside.style.position="fixed";
        aside.style.top=48+'px';
    }
    else{
        aside.style.position="static";
    }
}