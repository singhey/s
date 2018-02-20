$(function(){
	var headers = ["H1","H2","H3","H4","H5","H6"];

$(".accordion").click(function(e) {
  var target = e.target,
      name = target.nodeName.toUpperCase();
  //console.log(name);
  if($.inArray(name,headers) > -1) {
    var subItem = $(target).next();
    subItem.addClass("normal");
    //slideUp all elements (except target) at current depth or greater
    var depth = $(subItem).parents().length;
    var allAtDepth = $(".accordion p, .accordion div").filter(function() {
      if($(this).parents().length >= depth && this !== subItem.get(0)) {
        return true; 
      }
    });
    $(allAtDepth).slideUp("fast").removeClass("normal");
    
    //slideToggle target content and adjust bottom border if necessary
    subItem.slideToggle("fast");
  }
});
});