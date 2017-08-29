// JavaScript Document
var timer = null; //声明一个定时器变量
var curr = 0; //当前显示的那张图片的下标
var $advs = null; //得到所有的图片
var $icons = null; //得到所有的图标
var $box = null; //得到容器对象
var $box_width = 0; //容器的宽度
$(function() {
    $advs = $(".advs>li");
    $icons = $(".icons>li");
    $box = $("#box");
    $box_width = $box.width(); //获取div的宽度
    sp_adv_show(curr); //显示第一张图,人为的告知函数去显示哪张图片
    start(); //启动定时器

    $icons.mouseover(function() {
        // stop();//停止定时器
        sp_adv_show($icons.index(this));
    });
    $box.mouseover(function() {
        stop();
    }).mouseout(function() {
        start();
    })

});
// 启动定时器
function start() {
    if (timer == null) {
        timer = window.setInterval(sp_adv_show, 4000);
    }
}
//停止定时器的方法
function stop() {
    if (timer != null) {
        window.clearInterval(timer);
        timer = null;
    }
}
//切换图片的函数
function sp_adv_show() {
    //自动走
    if (arguments.length == 0) {
        curr++;
    } else { //指定哪张显示
        curr = arguments[0];
    }
    //判断边界
    if (curr > $advs.length - 1) {
        curr = 0;
    }
    $icons.eq(curr).addClass("curr").siblings("li").removeClass("curr");
    var distance = -curr * $box_width; //往左移动的距离
    /* $(".advs")[0].style.left = distance + "px";*/

    /* $(".advs").css("left", distance + "px");*/
    $(".advs").css({
        "left": distance + "px",
        "top": "0px"
    });
}
