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



