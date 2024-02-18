

$("#clickMe").click(function () {
    $("#para2").show();

});

$("#para2").hover(function () {
    $("#myDiv2").hide();
    $("#para1").removeAttr("hidden");
    $("#para").removeAttr("hidden");
});

$("#para input").focus(function () {
    $("#myDiv1").hide();
    $("#para4").removeAttr("hidden");
       
});

$("#para4 input").focus(function(){
    $("#para4 input").hide();
    $("#para5").removeAttr("hidden");
});

$("#para5 input").focus(function(){
   $("#para6").removeAttr("hidden");
   $("#para5").hide();
});

$("#para6 input").focus(function(){
    $("#myDiv4").hide();  
    $("#para7").removeAttr("hidden");
    $("#para8").removeAttr("hidden");
    // $("#para13").removeAttr("hidden");    
});

$("#para7").hover(function(){   
    $("#para7").hide(10000);
    $("#para8").hide(10000);
    $("#para9").removeAttr("hidden");
    $("#para10").removeAttr("hidden");
});

$("#myDiv9").hover(function(){
    $("#para9").hide();
    $("#para10").hide();
    $("#para13").removeAttr("hidden");    
});

$("#done").click(function(){
    $("#myDiv3").hide();
    var name=$("#name").val();
    document.getElementById("printName").innerHTML=name;
    $("#myDiv5").removeAttr("hidden"); 
});