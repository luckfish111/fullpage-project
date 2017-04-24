$(document).ready(function(){     //在文档加载后激活函数。（当 DOM（文档对象模型） 已经加载，并且页面（包括图像）已经完全呈现时，会发生 ready 事件。）
    $('#fullPage').fullpage({
                verticalCentered: false,  //内容是否垂直居中
        //sectionsColor: ['aqua','crimson','green','darkviolet'], //设置每一屏幕颜色
        anchors: ['page1','page2','page3','page4'],    //定义锚链接
        navigation: true,    //是否显示导航项目
        navigationTooltips: ['它，终于来了','真正与你贴近的个人设备','非同一般的精准计时','在三个特点鲜明的系列中找到你的风格'],    //项目导航的提示
        //滚动到某一屏后产生的动画效果
        //滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数。
        // anchorLink 是锚链接的名称
        // index 是section的索引，从1开始计算
        afterLoad: function(link, index){
            // JavaScript Switch 语句
            // 请使用 switch 语句来选择要执行的多个代码块之一。
            // 语法
            // switch(n)
            // {
            // case 1:
            //   执行代码块 1
            //   break;
            // case 2:
            //   执行代码块 2
            //   break;
            // default:
            //   n 与 case 1 和 case 2 不同时执行的代码
            // }
            // 工作原理：首先设置表达式 n（通常是一个变量）。随后表达式的值会与结构中的每个 case 的值做比较。如果存在匹配，则与该 case 关联的代码块会被执行。请使用 break 来阻止代码自动地向下一个 case 运行。
            switch (index){
                case 1:
                    move('.section1 h1').scale(1.5).end();
                    move('.section1 p').set('margin-top','5%').end();
                    break;
                case 2:
                    move('.section2 h1').scale(0.7).end();
                    break; 
                case 3:
                    move('.section3 h1').set('margin-left','20%').end();
                    move('.section3 p').set('margin-left','20%').end();
                    break;
                case 4:
                	move('.section4 h1').scale('1.5').end();
                    move('.section4 img.primary').rotate(360).end(function(){
                        move('.section4 img.sport').rotate(360).end(function(){
                            move('.section4 img.edition').rotate(360).end(function(){
                                move('.section4 h4.primary').scale(1.2).end(function(){
                                    move('.section4 h4.sport').scale(1.2).end(function(){
                                        move('.section4 h4.edition').scale(1.2).end();
                                    });
                                });
                            });
                        });
                    });
                    break;
                default :
                    break;
            }
        },
        //离开某一屏后恢复到初始效果
        //滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数

        //index 是离开的“页面”的序号，从1开始计算；
        //nextIndex 是滚动到的“页面”的序号，从1开始计算；
        //direction 判断往上滚动还是往下滚动，值是 up 或 down。
        onLeave: function(link, index){
            switch (index){
                case 1:
                    move('.section1 h1').scale(1).end();
                    move('.section1 p').set('margin-top','800px').end();
                    break;
                case 2:
                    move('.section2 h1').scale(1).end();
                    break;
                case 3:
                    move('.section3 h1').set('margin-left','-1500px').end();
                    move('.section3 p').set('margin-left','1500px').end();
                    break;
                case 4:
                	move('.section4 h1').scale('1').end();
                    move('.section4 img.primary').rotate(-360).end();
                    move('.section4 img.sport').rotate(-360).end();
                    move('.section4 img.edition').rotate(-360).end();
                    move('.section4 h4.primary').scale(1).end();
                    move('.section4 h4.sport').scale(1).end();
                    move('.section4 h4.edition').scale(1).end();
                    break;
                default :
                    break;
            }
        },
    })


});
