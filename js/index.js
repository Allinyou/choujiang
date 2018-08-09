$(function () {
    var WIDTH = Math.floor(document.documentElement.clientWidth * 0.45),//屏幕宽度*0.45来设置li的宽度
        $behindList = $(".behind ul li"),//福袋父级
        $frontList = $(".front ul li"),
        $behindBag = $(".moveing-left"),//后方运动盒子
        $frontBag = $(".moveing-right"),//前方运动盒子
        $topBag = $(".behind img"),//后方每个福袋
        $bottomBag = $(".front img"),//前方每个福袋
        $btn = $("#btn"),//游戏按钮
        $hook = $("#hook"),//钩子
        data = {count: 2},//次数
        bool = true,//点击开关，ture为可点击
        rem = 100,
        left, right, index,//福袋运动值，福袋下标
        times, timer;

    $(".behind li,.front li").css("width", WIDTH + "px");//设置li的宽度
    init();

    function init() {
        window.requestAnimationFrame = window.requestAnimationFrame || function (fn) {
            return setTimeout(fn, 1000 / 60);//1000 / 60意思是一秒钟60帧
        };
        //cancelAnimationFrame是清除re.uestAnimationFrame
        window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;

        (function move() {
            //后方福袋的运动
            left = parseFloat($behindBag.css("margin-left"));//获取margin-left并去掉单位
            left = left - 1.5;//改变margin-left值
            $behindBag.css("margin-left", left + "px");
            left <= -WIDTH && $behindBag.css("margin-left", "0");//如果margin-left值到达屏幕宽度则归零

            //前方福袋的运动
            right = parseFloat($frontBag.css("margin-right"));//获取margin-right并去掉单位
            right = right - 1.5;//改变margin-right值
            $frontBag.css("margin-right", right + "px");
            right <= -WIDTH && $frontBag.css("margin-right", "0");//如果margin-right值到达屏幕宽度则归零

            timer = requestAnimationFrame(move);
        })();
    }

    //开始游戏 点击开始
    $btn.click(function () {
        if (!bool) return;
        if (data.count <= 0) {
            alert("没有次数了");
            return;
        }
        $('.modal-box').show();
    });
    
    //判断钩子和福袋的距离
    function reback1() {
        for (var i = 0; i < $behindList.length; i++) {
            if ($hook.find("img").length) break;//如果钩子上已经有福袋跳出循环
            if ($hook.position().left - 130 <= $behindList.eq(i).position().left && $behindList.eq(i).position().left <= $hook.position().left - 50) {
                //获取福袋
                !$hook.find("img").length && $hook.append($topBag.eq(i));//如果未抓取到福袋才抓取
                // $hook.find("img").css({//重设福袋大小
                //     position:'relative',
                //     width: 200 / rem + "rem",
                //     left:'50%',
                //     marginTop:'-0.6rem',
                //     marginLeft:'-' +100 / rem + "rem"
                //     // height: 2/ rem + "rem"
                // });
                $topBag.eq(i).css({//重设福袋大小
                    width: 200 / rem + "rem"
                    // height: 2/ rem + "rem"
                });

                //钩子返回，弹出红包
                index = i;
                $hook.animate({top: -540 / rem + "rem"}, 1000, function () {
                    win();
                    $behindList.eq(index).append($topBag.eq(index));//把福袋放回原位
                    index = undefined;
                    if (data.count==1){
                        $(".game h3").html('消耗5积分');
                    } else if (data.count==0){
                        $(".game h3").html('明天再来吧');
                    } 
                });
            } else {
                setTimeout(function () {
                    return reback1();
                });
            }
        }
    }

    function reback2() {
        for (var i = 0; i < $frontList.length; i++) {
            if ($hook.find("img").length) break;//如果钩子上已经有福袋跳出循环
            var l = $frontList.eq(i).position().left - 200;
            if ($hook.position().left - 130 <= l && l <= $hook.position().left) {
                //获取福袋
                !$hook.find("img").length && $hook.append($bottomBag.eq(i));//如果未抓取到福袋才抓取
                // $hook.find("img").css({//重设福袋大小
                //     position:'relative',
                //     width: 240 / rem + "rem",
                //     left:'50%',
                //     marginTop:'-0.6rem',
                //     marginLeft:'-' +120 / rem + "rem"
                //     // height: 2/ rem + "rem"
                // });
                $bottomBag.eq(i).css({//重设福袋大小
                    width: 240 / rem + "rem"
                    // height: 156 / rem + "rem"
                });

                //钩子返回，弹出红包
                index = i;
                $hook.animate({top: -540 / rem + "rem"}, 1000, function () {
                    win();
                    $frontList.eq(index).append($bottomBag.eq(index));
                    index = undefined;
                    if (data.count==1){
                        $(".game h3").html('消耗5积分');
                    } else if (data.count==0){
                        $(".game h3").html('明天再开吧');
                    } 
                });
            } else {
                setTimeout(function () {
                    return reback2();
                });
            }
        }
    }

    //中奖信息提示
    $("#close,.win,.btn").click(function () {
        bool = true;
        $("#hook .left").removeClass("up");
        $("#hook .right").removeClass("down");
        cancelAnimationFrame(timer);
        init();
    });

    // 点击确定开始游戏
    $('.modal-box .modal-confirm').click(function() {
        $('.modal-box').hide();
        $btn.addClass('toBigSmall');
        setTimeout(function(){
            $btn.removeClass('toBigSmall');
        },600)
        bool = false;
        data.count--;
        // $("#change").html(data.count);
        var random = Math.floor(Math.random() * 470 + 130);//130 - 620之间随机，因为这两个值是左右边界
        $("#hook .right").addClass("down");//张开钩子
        $("#hook .left").addClass("up");//张开钩子

        $hook.animate({left: random / rem + "rem"}, 1000);//左右值
        clearTimeout(times);
        $('#mask .winning-text').html('很遗憾，礼盒是空的');
        //上下值
        if (random > 380) {//上面
            $hook.animate({top: '-'+420 / rem + "rem"}, 1000);
            times = setTimeout(function () {
                reback1();
            }, 2000);
        } else {//下面
            $hook.animate({top: '-'+200 / rem + "rem"}, 1000);
            times = setTimeout(function () {
                reback2();
            }, 2000);
        } 
    })
    // 点击取消
    $('.modal-box .modal-cancel').click(function(){
        $('.modal-box').hide();
    })

    // 点击关闭弹窗
    $('.modal-box .close-modal').click(function(){
        $('.modal-box').hide();
    })
});










