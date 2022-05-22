 // view selection
$('#view1').on('click', function(){
    $('#sheet li').removeClass('v2');
    $('#sheet li').removeClass('v3');
  });

  $('#view2').on('click', function(){
    $('#sheet li').removeClass('v3');
    $('#sheet li').addClass('v2');
  });

  $('#view3').on('click', function(){
    $('#sheet li').removeClass('v2');
    $('#sheet li').addClass('v3');
  });

  $('#view2').click(function(){
    $('#view1').css('color','black');
    $(this).css('color','silver');
  })
  $('#view1').click(function(){
    $('#view2').css('color','black');
    $(this).css('color','silver');
  })





//cursor

let mouseCursor = document.querySelector("#cursor");
  window.addEventListener("scroll", cursor);
  window.addEventListener("mousemove", cursor);
  //커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
  function cursor(e) {
    mouseCursor.style.left = e.pageX + "px";
    mouseCursor.style.top = e.pageY + "px";
}








