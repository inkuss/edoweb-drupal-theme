(function($) {



  Drupal.behaviors.edoweb_drupal_isbn10_format = {
    attach: function (context, settings) {

      var serviceurl = "https://nyx.hbz-nrw.de/";
      var service = "isbn?value=";
      // Use callback if Service is JSONP
      //var callback = "&callback=?";
      var callback = "";

      $('.Isbn li', context).each(function(){
        
        var isbn = $(this).html();
        getIsbnFormatted($(this));
  
        function getIsbnFormatted (element){
          var url = serviceurl + service + isbn + callback;
          $.getJSON(url, function(json) {
              var isbnf = json.result.isbn13formatted;
	      element.html(isbnf); 
	      console.log(isbnf);
            });
          }
  
      });
    }
  };

})(jQuery);
