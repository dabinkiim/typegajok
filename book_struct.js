// Book 
const ul_book = document.querySelector("#book_list");
      
fetch('https://opensheet.vercel.app/14ZaI6lKQaPLqW4XATjNGvsdGwULIMjXiVK2baQnUrX0/Read')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((row) => {

     ul_book.innerHTML += `
      <li class="book">  
      <div class="book_name"> ${row.Name} </div>
      <div class="writer"> ${row.Writer} </div> 
      <div class="date"> ${row.Date}.</div>
      </li>
      `;     
    })
    console.log('BOOK import sucessed!');

    //random color 
    var colors = ['yellow', 'orangered', 'cyan', 'hotpink', 'lavender', 'springgreen', 'greenyellow', 'khaki'];

    $('#book_list li').each(function() {
      book_colors = colors[Math.floor(Math.random() * colors.length)];
      $(this).css('background', book_colors);
    })



  })


// Log 
const ul_log = document.querySelector("#log_list");
      
fetch('https://opensheet.vercel.app/14ZaI6lKQaPLqW4XATjNGvsdGwULIMjXiVK2baQnUrX0/Log')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((row) => {

     ul_log.innerHTML += `
      <li class="log"> 
      <div class="log_info">
      <div class="date"> ${row.Date}.</div> 
      <div class="who"> ${row.Names} </div>
      </div>
      <div class="content"> ${row.Content} </div> 
      </li>
      `;     
    })
    console.log('Log import sucessed!');



  })