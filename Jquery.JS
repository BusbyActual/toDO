
$(function(){
function addListItem(){
  var text = $('#input').val();
  if(text !==''){
  $('#todo').append('<li class="bubble"><button type="button" id="finished" class="btn btn-primary btn-circle btn-sm"><i class="glyphicon glyphicon-ok glyphiconIcon"></i></button>'+ 
    text + '<button type="button" id="remove" class="btn btn-primary btn-circle btn-sm"><i class="glyphicon glyphicon-minus glyphiconIcons"></li>');
  $('#input').val('');


}}
function removeListItem(){
  $(this).parent().remove()
}
function completeListItem(){
  $(this).parent().css("text-decoration","line-through")
    .fadeOut('slow',function(){
      $(this).appendTo('#complete');
       $(this).css("text-decoration","");
        $(this).children('#finished').replaceWith('<button type="button" id="favorite" class="btn btn-danger btn-circle btn-sm"><i class="glyphicon glyphicon-heart glyphiconIcon"></i></button>')})
         .fadeIn();
      }
function favorite(){
    $(this).parent().fadeOut('slow',function(){
      $(this).appendTo("#archived");})
       .fadeIn();
    $(this).remove();
}


$(function(){
  $('#add').on('click', addListItem);
  $('body').on('click', '#finished', completeListItem);
  $('body').on('click', '#remove', removeListItem);
  $('body').on('click', '#favorite', favorite);

});



  });
