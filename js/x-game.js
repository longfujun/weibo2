$('.x-game li').mouseover(function () {
    var index = $(this).index('.x-game li');
    $('.pro').eq(index).addClass('show').siblings().removeClass('show');
})
$('.x-head a').eq(2).mouseover(function(){
    $('.x-game').css({
        display:'block'
    })
})
$('.x-game').mouseleave(function(){
    $('.x-game').css({
        display:'none'
    })
})
// 
// 导航写完

$('.x-nav a').click(function(){
    var index = $(this).index('.x-nav a');
    $(this).addClass('chow').siblings('.x-nav a').removeClass('chow');
})

// 
// 首页写完

// 
setInterval(auto,1000);
	var index = -1;
	function auto(){
		if(index == 5){
			index = 0;
		}else{
			index++;
		}
		$('.x-bgdUrl li').eq(index).addClass('active').siblings('.x-bgdUrl li').removeClass('active');
		$('.x-yuan li').eq(index).css({background: '#1473C3'}).siblings('.x-yuan li').css({background:'#565758'});
		$(".x-yuan li").eq(index).animate({
			width:28
		},1000,'swing',function(){
			$('.x-yuan li').eq(--index).animate({
				width:12
			},1000,'swing')
			if(index == 5){
				index = 0;
			}else{
				index++;
			}
		})
		// $('.x-bgdUrl li').eq(index).fadeIn();	

    }

    
    $('.asgin-gamePic').mouseenter(function(){
		var index = ($(this).index()-1)*2;
		$(".tutu img").eq(index).addClass('xzIndex');
		
	})
	$('.asgin-gamePic').mouseleave(function(){
		var index = ($(this).index()-1)*2;
		$(".tutu img").eq(index).removeClass('xzIndex');
	})
    // 
	// 轮播图写完
	$('.x-sigalImg').mouseenter(function(){
		// console.log($(this).children().eq(4));
		$(this).children().eq(4).slideDown(300);
	})
	$('.x-sigalImg').mouseleave(function(){
		$(this).children().eq(4).slideUp(300);
	})
	// 
	// content 写完
	