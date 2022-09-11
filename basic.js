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












