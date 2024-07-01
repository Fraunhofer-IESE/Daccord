$(document).ready(function(){
  var toc = "<ul>";
  $("h2").slice(1).each(function(i, el){
    var current = $(el);
    current.attr("id", "heading" + i);
    toc += "<li><a href='#heading" + i + "'>" + current.text() + "</a></li>";
  });
  toc += "</ul>";
  $("#toc").html(toc);
});