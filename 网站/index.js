var oBtn = document.getElementById('list-btn');
var oSubList = document.getElementsByClassName('sub-list')[0]; //返回数组 取到数组中索引是0的元素
oBtn.onclick = function(){
    // console.log(oSubList.style.display); //只能取到内联样式
    if(oSubList.style.display == "block"){ //如果显示 ->隐藏
        oSubList.style.display = "none";
    }else{ //隐藏(""  "none")->显示 
        oSubList.style.display = "block";
    }
}




// 轮播图 
var nowIndex = 0;//记录初始显示的图片索引
// 1 给按钮绑定事件 ->  按钮有被激活的样式active
// $('.btn-box li').on('click',function(){
//     // 当前点击的li => $(this)  添加active，找到兄弟元素移除active样式
//     // $(this).addClass('active');
//     // $(this).siblings().removeClass('active');
//     $(this).addClass('active').siblings().removeClass('active');
//     // 开始滑动显示图片 
//     //按钮索引 0   1     2    n
//     //显示图片 0   1     2    n*-imgWidth
//     //推断出ul移动的left =  -index * imgWidth
//      console.log($(this).index());  //获取当前点击图片的索引 
//     // 将ul的left设置为 - 当前索引 * 图片宽度
//     // $('.img-box').css("left", -$(this).index()*773);
//     // animate 通过动画的方式将left移动为 - 当前索引 * 图片宽度
//     $('.img-box').animate({
//         left: -$(this).index() * $('.img-box img').width()
//     })
// });
$('.btn-box li').on('click',function(){
    change( $(this).index() );
})
// 定时器  每隔1000毫秒 执行回调函数
setInterval(function(){
    // 每隔1000毫秒显示下一张图 
    nowIndex++;
    if(nowIndex == $('.btn-box li').length){
        nowIndex = 0;
    }
    // 显示索引是nowIndex那张图
    change(nowIndex);
    
},2000)
// 接收一个参数 索引 显示索引对应的按钮和图片
function change(index){
    //显示索引对应的按钮
    $('.btn-box li').eq(index).addClass('active').siblings().removeClass('active');
    // 显示和索引对应的图片
    ('.img-box').animate({
        left:-index* $('.img-box img').width()
    })
}


// $('li').find('span').css('background',red);
// $('#div1').next();