//平滑的导航滑动
!function(){
    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    requestAnimationFrame(animate);
    var aTags=document.querySelectorAll(".topNavBar>nav>ul>li>a");
    for(var i=0;i<aTags.length;i++){
        aTags[i].onclick=function(e){
            e.preventDefault();
            var href=e.currentTarget.getAttribute("href");
            if(null==href||""==href||"#"==href)  return;
            var element=document.querySelector(href);
            var top=element.offsetTop;
            //var n=25;//一共动多少次
            //var t=500/n;//多少时间动一次
            var currentTop=window.scrollY;
            var targetTop=top-80;
            var s=targetTop-currentTop;
            var t=Math.abs((s/100)*300);
            t=t>500?500:t;
            var coords = { y: currentTop }; 
            var tween = new TWEEN.Tween(coords) 
                .to({ y: targetTop}, t) 
                .easing(TWEEN.Easing.Quadratic.InOut) 
                .onUpdate(function(){
                    window.scrollTo(0,coords.y); 
            })
            .start(); 
            //   var s=(targetTop-currentTop)/n;
            //   var i=0;
            //   var id=setInterval(function(){
            //     if(i==n){
            //         window.clearInterval(id);
            //         return;
            //     }
            //     i=i+1;
            //     window.scrollTo(0,currentTop+s*i); 
            //   },t); 
        };
    }
}.call();