     //3s之后关闭loading框
     //setTimeout(function(){
        siteWelcome.classList.remove("active");
     //},3000);
  
   
/*document.getElementById("portfolio1").onclick=function(){
    document.getElementById("portfolioBar").className="state1";
    document.getElementById("worksPic1").className="pic1_state1";
    document.getElementById("worksPic2").className="pic2_state1";
    document.getElementById("worksPic3").className="pic3_state1";

};
document.getElementById("portfolio2").onclick=function(){
    document.getElementById("portfolioBar").className="state2";
    document.getElementById("worksPic1").className="pic1_state2";
    document.getElementById("worksPic2").className="pic2_state2";
    document.getElementById("worksPic3").className="pic3_state2";

};
document.getElementById("portfolio3").onclick=function(){
    document.getElementById("portfolioBar").className="state3";
    document.getElementById("worksPic1").className="pic1_state3";
    document.getElementById("worksPic2").className="pic2_state3";
    document.getElementById("worksPic3").className="pic3_state3";

};*/

//模块化

//闭包
//1、我们不想要全局变量
//2、我们要使用局部变量
//3、ES5里面，只有函数有局部变量
//4、于是我们声明一个 function xxx,然后xxx.call()
//5、这个时候xxx是全局变量（全局函数）
//6、所有我们不能给这个函数名字
//7、function(){}.call()
//8、但是chrome报错，语法错误
//9、试出来一种方法可以不报错：
//9.1 !function(){}.call()（我们不在乎这个匿名函数的返回值，所以加个！取反没有关系）
//9.2 (function(){}).call()

//立即执行函数
//1、立即执行函数使得person无法被外部访问
//2、闭包使得匿名函数可以操做person
//3、window.frankGroup保存了匿名函数的地址
//4、任何地方都可以使用 window.frankGroupUp操作person，但是不能直接访问person

//MVC