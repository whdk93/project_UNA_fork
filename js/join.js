$(function(){
  $("#confirm_pwd").on("keyup",function(){
      var msg = $("#pwd_same").val();

      if($("#pwd").val() == $("#confirm_pwd").val()){
          $("#pwd_same_comfrim").html("");
          $("#pwd_same_comfrim").css("");        
      }else{
          $("#pwd_same_comfrim").html("패스워드가 일치하지 않습니다.");
          $("#pwd_same_comfrim").css("color","red");
      }
    
  })
})



