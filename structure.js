// SPREADSHEET 
const ul = document.querySelector("#sheet");
      
fetch('https://opensheet.vercel.app/14ZaI6lKQaPLqW4XATjNGvsdGwULIMjXiVK2baQnUrX0/Sheet1')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((row) => {

     ul.innerHTML += `
      <li> <div class="head"> ${row.Date}, ${row.Names}.</div> 
      <div class="keyword"> ${row.Keyword} </div>
      <br> <div class="content"> ${row.Content} </div> </li>
      `;     
    })
    console.log('import sucessed!');

    //키워드 처리
    $('.keyword').each(function(){
    var keytext = $(this).text();
    $(this).html(keytext.replace(/소식/gi,'<span class="key n">소식</span>').replace(/출판/gi,'<span class="key p">출판</span>').replace(/독서/gi,'<span class="key r">독서</span>').replace(/일지/gi,'<span class="key j">일지</span>').replace(/소개/gi,'<span class="key d">소개</span>'));
  });
    //키워드 별 색 분류
    var cJ = 'lightsteelblue';
    var cN = 'honeydew';
    var cP = 'tan';
    var cR = 'moccasin';
    var cD = 'ghostwhite';
    //var cDcP =  'linear-gradient(90deg,' + cD + ' 50%,' + cP + ' 50%)' ;
    var cNcP =  'linear-gradient(90deg,' + cN + ' 50%,' + cP + ' 50%)' ;
    var cJcP =  'linear-gradient(90deg,' + cJ + ' 50%,' + cP + ' 50%)' ;

     $('#sheet li').has('.key.d').css('background-color',cD);


    $('#sheet li').hover(function(){
      $(this).has('.key.j').css('background-color',cJ);
      $(this).has('.key.n').css('background-color',cN);
      $(this).has('.key.p').css('background-color',cP);
      $(this).has('.key.r').css('background-color',cR);
      $(this).has('.key.n').has('.key.p').css('background', cNcP);
      $(this).has('.key.d').has('.key.p').css('background', cDcP);
      $(this).has('.key.j').has('.key.p').css('background', cJcP);
    }, function(){
      $(this).css('background','none');
      $('#sheet li').has('.key.d').css('background-color',cD);
    })
   


    console.log('keyword sucessed!');
  })


// Keyword Matching
$(document).ready(function(){ 

var countJ = 1;
var countN = 1;
var countR = 1;
var countP = 1;
var countD = 1;

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
      $(this).hide();
    } else {
      $('ul#sheet > li').show();
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
  $('#btnD').click(function(){
    countD += 1;
    if (countD%2 == 0) {
      $('ul#sheet > li').hide();
      var matchKey = $("ul#sheet > li > .keyword > .key.d");
      $(matchKey).parent().parent().show();
    } else {
      $('ul#sheet > li').show();
    }   
  }); 
})











