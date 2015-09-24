var PruebaModel = Stapes.subclass({
    constructor : function() {
        if(window.localStorage.todos) {
           var all = JSON.parse(window.localStorage.all);
           set(all);
       }
    },

    save : function() {
        window.localStorage.all = JSON.stringify(this.getAll());
    },

    getName : function(){
      return 'Sancho'
    }
});
