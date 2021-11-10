
//random color 설정

// random color 
    var rmColors = ['cornsilk', 'darkseagreen', 'lightsteelblue', 'greenyellow', 'tan'];

    $('li').hover(
      function(){
    var color = rmColors[Math.floor(Math.random() * rmColors.length)];
    console.log(color);
    $(this).css('background-color', color);   
  },function(){
    $(this).css('background-color', 'white');  
  }
  );


//키워드 검색
  //Keyword search
$(document).ready(function(){ 

  $('#keysearch').keyup(function(){
    var k = $(this).val();
    $('ul#sheet > li').hide();
    var matchKey = $("ul#sheet > li > .keyword:contains('" + k + "') ");
    $(matchKey).parent().show();
  }); 
})