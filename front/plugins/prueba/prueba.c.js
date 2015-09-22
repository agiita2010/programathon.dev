var Module = Stapes.subclass({
    constructor : function(name) {
        this.name = name;
    },

    sayName : function() {
        console.log('My name is: ' + this.name);
    }
});
