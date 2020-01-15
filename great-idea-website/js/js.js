$(window).scroll(function() {
  if ($(this).scrollTop() > 400) {
      $( ".header #background" ).fadeIn();
      
  } else {
      console.log('there');
      $( ".header #background" ).fadeOut();
  }
});