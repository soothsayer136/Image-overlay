var $overlay =  $("<div id = 'overlay'></div>");
 $("body").append($overlay);
  var $image = $('<img>')
  $overlay.append($image);
  var $close = $("<img id = 'closeImage'>");
  $overlay.append($close);

  $("#imageGallery a").click(function(e){
    e.preventDefault();

    var imageSource = $(this).attr("href");
    $image.attr("src", imageSource);
    $close.attr("src", "image/close.jpg");
    $overlay.show();

  });


  $close.click(function(){
      $($overlay).hide();
  })
 