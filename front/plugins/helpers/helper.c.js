var HelperController = Stapes.subclass({
    constructor : function(el) {

    },

    appendView : function(container, url, callback){
      $.ajax({
          url: url,
          data: '',
          async : false,
          success: function(response){
              $(container).append(response);
              if(callback){
                  callback.call(this);
              }
          },
          dataType: 'html'
      });
  }
});
