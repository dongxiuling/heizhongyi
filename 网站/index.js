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
var timer;//定时器
// 点击按钮
$('.btn-box li').on('click',function(){
    // 修改按钮的样式
    // $(this).addClass('active').siblings().removeClass('active');
    // 移动图片
    // 点击按钮的索引    0    1           n
    // 显示图片的索引    0    1           n
    // ul的left值 0*图片宽度 -1*图片宽度  -n*图片宽度
    // $('.img-box').animate({
    //     left:-$(this).index() * $('.img-box img').width()
    // });
    change($(this).index());
})
// 每个1000毫秒 执行回调函数
start();

// 接收参数索引 -> 显示对应的按钮和图片
function change(index){
    //显示索引是nowIndex那种图
    $('.btn-box li').eq(index).addClass('active').siblings().removeClass('active');
    // 显示索引对应的图片
    $('.img-box').animate({
        left:-index* $('.img-box img').width()
    });
}
// 鼠标划入slide-container 清楚定时器
$('.slide-container').on('mouseover',function(){
    // 清除定时器
    clearInterval(timer);
}).on('mouseout',function(){
    // 开启定时器 
    start();
})

// 定义一个开启定时器的函数 
function start(){
    // timer 局部变量（函数中定义的变量是局部变量 ）
    timer = setInterval(function(){
        nowIndex++;
        if(nowIndex == $('.btn-box li').length){
            nowIndex = 0;
        }
        change(nowIndex);
    },2000) 
}

