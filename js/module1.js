!function(){
   var person={
       name:'frank',
       age:18
   }
   window.frankGroupUp=function(){
       person.age+=1;
       return person.age;
   }
}.call();