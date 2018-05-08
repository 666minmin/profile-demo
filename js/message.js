
!(function(){
    var view=document.querySelector("#messagesWrapper");
    var model={
        init:function(){
            var APP_ID = 'R3uB5NHVbYCEkrHKIwnd7MY3-gzGzoHsz';
            var APP_KEY = 'WMDEbMEFyxO4INw5ySMX4xB3';
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        save:function(name,content){
            var TestObject = AV.Object.extend('TestObject')
            var testObject = new TestObject();
            return testObject.save({
                name:name,
                content: content
            });
        },
        fetch:function(){
            var TestObject = AV.Object.extend('TestObject')
            var testObject = new TestObject();
            return testObject.fetch(); 
        }
    };
    var controller={
        view:null,
        model:null,
        ul:null,
        form:null,
        init:function(view,model){
            this.view=view;
            this.model=model;
            this.ul=this.view.querySelector("ul");
            this.form=this.view.querySelector("form");
            this.model.init();
            this.initRender();
            this.bindEvent();
        },
        initRender:function(){
            var that=this;
            that.model.fetch().then(function(object){
                var results=object.attributes.results;
                results.forEach(function(item){
                    that.saveRender(item.name,item.content);
                });
            });
        },
        bindEvent:function(){
            var that=this;
            that.view.addEventListener("submit",function(e){
                e.preventDefault();
                that.dealEvent();
            })
        },
        dealEvent:function(){
            var that=this;
            var name=that.form.querySelector("[name='name']").value;
            var content=that.form.querySelector("[name='content']").value;
            that.model.save(name,content).then(function(){
                that.saveRender(name,content);
            });
        },
        saveRender:function(name,content){
            var liElem=document.createElement("li");
            liElem.innerText=name+":"+content;
            this.ul.append(liElem);
            this.form.querySelector("[name='name']").value="";
            this.form.querySelector("[name='content']").value="";
        }
    };
    controller.init(view,model); 
})();