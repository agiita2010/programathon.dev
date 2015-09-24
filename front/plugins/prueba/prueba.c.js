var PruebaController = HelperController.subclass({
    constructor : function(el) {
      this.appendView(el, '/front/plugins/prueba/prueba.v.html')
      this.model = new PruebaModel();
        this.writeName();
    },


    writeName : function() {
       $('#data').val(this.model.getName());
    }
});
