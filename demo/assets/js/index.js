$(function(){
    var colors = ['#ff9a9e', '#2ae', '#a1c4fd', '#667eea', '#89f7fe', '#13547a', '#434343', '#4ae'];
   $('.portfolio-image-holder > div').each(function(i){
      $(this).css({'background':colors[i]});
       console.log(i+"entered");
   });
});