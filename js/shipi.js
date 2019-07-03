var nav=document.querySelector('.nav');
var navli=document.querySelector('.navli');
var doit=document.querySelector('.do');
var arr=document.querySelector('.arr');
var toLeft=document.querySelector('.toLeft');
var toRight=document.querySelector('.toRight');
var list=doit.children;
var index = 0;
var timer = setInterval(autoPlay,1000);
function autoPlay(){
    if(index==4){
        index=0;
        navli.style.left=0;
    }else{
        index++;
    }
    for(var i=0; i<list.length;i++){
        list[i].className=' ';
    }
     animate(navli,{left:-868*index+-760},20);
     list[index].className = "active"
}
nav.onmouseover=function(){
    clearTimeout(timer);
    animate(arr,{opacity:100},20)
}
nav.onmouseout = function(){
    animate(arr,{opacity:0},20);
    //clearInterval(timer);
    timer = setInterval(autoPlay,1000);
}

toLeft.onclick = function(){
    if(index == 6){//因为自动轮播时，有一张伪造的图片，当显示 第一张时，其实是最后一张，所以这时的下标为4
        index = 0;
        imgList.style.left = 0;
    }else if(index == 0){
        index = 0;
    }else{
        index--;
    }
    for (var i = 0; i < list.length; i++) {
        list[i].className = "";
    }
    animate(navli,{left:-868*index+-760},20);
    list[index].className = "active";
}
toRight.onclick = function(){
    if(index == 6){//因为自动轮播时，有一张伪造的图片，当显示 第一张时，其实是最后一张，所以这时的下标为4
        index = 1;
        imgList.style.left = 0;
    }else if(index == 4){
        index = 4;
    }else{
        index++;
    }
    for (var i = 0; i < list.length; i++) {
        list[i].className = "";
    }
    animate(navli,{left:-868*index+-760},20);
    list[index].className = "active";
}

for(var i=0; i<list.length;i++){
    list[i].index=i;
    list[i].onmouseover=function(){
        index = this.index;
        //alert(this.index);
        for (var j = 0; j < list.length; j++) {
            list[j].className = "";
        }
        animate(navli,{left:-868*index+-760},20);
        list[index].className = "active";
    }
}