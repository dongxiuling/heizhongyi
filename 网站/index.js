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

var nowIndex = 0;//记录当前索引
// 点击按钮
$('.btn-box li').on('click',function(){
    // 修改按钮的样式
    $(this).addClass('active').siblings().removeClass('active');
    // 移动图片
    // 点击按钮的索引    0    1           n
    // 显示图片的索引    0    1           n
    // ul的left值 0*图片宽度 -1*图片宽度  -n*图片宽度
    $('.img-box').animate({
        left:-$(this).index() * $('.img-box img').width()
    });
})
// 每个1000毫秒 执行回调函数
setInterval(function(){
    nowIndex++;
    if(nowIndex == $('.btn-box li').length){
        nowIndex = 0;
    }
    //显示索引是nowIndex那种图
    $('.btn-box li').eq(nowIndex).addClass('active').siblings().removeClass('active');
    // 显示索引对应的图片
    $('.img-box').animate({
        left:-nowIndex* $('.img-box img').width()
    });
},2000) 
