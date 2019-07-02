// $('.btn').bind('click',function(){
//     if(passwdflag && userflag){
//     var userVal=$('input[name=user]').val();
//     var passwdVal=$('input[name=passwd]').val();
//         $.ajax({
            
//             url:'data/login.php',
//             type:'get',
//             dataType:'jsonp',
//             data:'act=add&user='+userVal+'&pass='+passwdVal,
//             success:function(josn){
//                 console.log(josn)
//                 alert(josn.msg);
//             },
//             error:function(code){
//                 alert(code.msg);
//             }
//         })
//     }
// })

$('.header').click(function(e){
    var targe=e.target;
    if(targe.className=='gr'){
        $('.left-form').css('display','block')
        $('.left-form1').css('display','none')
        $('em').css('border-color','#fff')
        $(targe).css('border-color','#ffa00a',)
    }
    if(targe.className=='gf'){
        $('em').css('border-color','#fff')
        $('.left-form').css('display','none')
        $('.left-form1').css('display','block')
        $(targe).css('border-color','#ffa00a',)
    }
})

$('.yzm u').click(function(){
    var cont=(getYZM(4))
    $('.yzm span').html(cont)
})