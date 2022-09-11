// SPREADSHEET 
const ul = document.querySelector("#sheet");
      
fetch('https://opensheet.vercel.app/14ZaI6lKQaPLqW4XATjNGvsdGwULIMjXiVK2baQnUrX0/Sheet1')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((row) => {

     ul.innerHTML += `
      <li> 
      <div class="head"> ${row.Date}.</div> 
      <div class="keyword"> ${row.Keyword} </div>
      <br> <div class="content"> ${row.Content} </div> 
      </li>
      `;     
    })
    console.log('import sucessed!');

    //키워드 처리
    $('.keyword').each(function(){
    var keytext = $(this).text();
    $(this).html(keytext.replace(/소식/gi,'<span class="key n">소식</span>').replace(/출판/gi,'<span class="key p">출판</span>').replace(/독서/gi,'<span class="key r">독서</span>').replace(/소개/gi,'<span class="key i">소개</span>'));
  });
    //키워드 별 색 분류
     cN = 'honeydew';
     cP = '#BDBD00';
     cR = '#FFF499';
     cI = 'ghostwhite';
     cIcP =  'linear-gradient(90deg,' + cI + ' 50%,' + cP + ' 50%)' ;
     cNcP =  'linear-gradient(90deg,' + cN + ' 50%,' + cP + ' 50%)' ;



      $('#sheet li').has('.key.i').css('background-color',cI);
      $('li').has('.key.n').css('background-color',cN);
      $('li').has('.key.p').css('background-color',cP);
      $('li').has('.key.r').css('background-color',cR); //.css('height','10vw');
      $('li').has('.key.n').has('.key.p').css('background', cNcP);
      $('li').has('.key.i').has('.key.p').css('background', cIcP);


    $('#sheet li').hover(function(){
      
    }, function(){
      //$(this).css('background','none');
      //$('#sheet li').has('.key.i').css('background-color',cI);
    })
   


    console.log('keyword sucessed!');
  })


// Keyword Matching
$(document).ready(function(){ 

var countJ = 1;
var countN = 1;
var countR = 1;
var countP = 1;
var countI = 1;

  $('#btnN').click(function(){
    countN += 1;
    if (countN%2 == 0) {
      $('ul#sheet > li').hide();
      var matchKey = $("ul#sheet > li > .keyword > .key.n");
      $(matchKey).parent().parent().show();
    } else {
      $('ul#sheet > li').show();
    }   
  }); 
  $('#btnP').click(function(){
    countP += 1;
    if (countP%2 == 0) {
      $('ul#sheet > li').hide();
      var matchKey = $("ul#sheet > li > .keyword > .key.p");
      $(matchKey).parent().parent().show();
      $(this).css('background-color', 'white');
    } else {
      $('ul#sheet > li').show();
      $(this).css('background-color', cP);
    }   
  }); 
  $('#btnR').click(function(){
    countR += 1;
    if (countR%2 == 0) {
      $('ul#sheet > li').hide();
      var matchKey = $("ul#sheet > li > .keyword > .key.r");
      $(matchKey).parent().parent().show();
    } else {
      $('ul#sheet > li').show();
    }   
  }); 
  $('#btnJ').click(function(){
    countJ += 1;
    if (countJ%2 == 0) {
      $('ul#sheet > li').hide();
      var matchKey = $("ul#sheet > li > .keyword > .key.j");
      $(matchKey).parent().parent().show();
    } else {
      $('ul#sheet > li').show();
    }   
  });
  $('#btnI').click(function(){
    countI += 1;
    if (countI%2 == 0) {
      $('ul#sheet > li').hide();
      var matchKey = $("ul#sheet > li > .keyword > .key.i");
      $(matchKey).parent().parent().show();
    } else {
      $('ul#sheet > li').show();
    }   
  }); 
})











