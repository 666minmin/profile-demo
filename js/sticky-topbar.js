!function(){
    var specialTags=document.querySelectorAll("[data-x]");
    for(var i=0;i<specialTags.length;i++){
        specialTags[i].classList.add("offset");
    }
    setTimeout(function(){
        findCloset();
    },1000);
    window.onscroll=function(){
        if(window.scrollY>0){
            topNavBar.classList.add("sticky");
        }else{
            topNavBar.classList.remove("sticky");
        }
        findCloset();
    };
    function findCloset(){
        var specialTags=document.querySelectorAll("[data-x]");
        var minIndex=0;
        for(var i=0;i<specialTags.length;i++){
            if(Math.abs(specialTags[i].offsetTop-window.scrollY)
            <Math.abs(specialTags[minIndex].offsetTop-window.scrollY)){
                minIndex=i;
            }
        }
        specialTags[minIndex].classList.remove("offset");
        var menuTiggerTags=document.querySelectorAll(".menuTigger");
        for(var i=0;i<menuTiggerTags.length;i++){
            menuTiggerTags[i].classList.remove("highlight");
        }
        var id=specialTags[minIndex].id;
        document.querySelector("a[href='#"+id+"']").parentNode.classList.add("highlight");
    }
    var tags=document.getElementsByClassName("menuTigger");
    for(var i=0;i<tags.length;i++){
        tags[i].onmouseenter=function(e){
            e.currentTarget.classList.add("active");
        }
        tags[i].onmouseleave=function(e){
            e.currentTarget.classList.remove("active");

        }
    }
}.call();
