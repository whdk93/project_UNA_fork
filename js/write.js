$(function() {
  $("#file").on('change',function(){
    var file_name = $("#file").val().split('/').pop().split('\\').pop();
    $(".file_text").val(file_name);
  });
  

});