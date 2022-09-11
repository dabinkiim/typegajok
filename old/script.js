// https://docs.google.com/spreadsheets/d/1vailVWLzo7NPDsgQUuOUOZDEOPR9uWYlKQk1JEgHJsM/edit?usp=sharing
// 뉴버전(opensheet 사용 링크) https://opensheet.vercel.app/14ZaI6lKQaPLqW4XATjNGvsdGwULIMjXiVK2baQnUrX0/Sheet1

var id = '1vailVWLzo7NPDsgQUuOUOZDEOPR9uWYlKQk1JEgHJsM';
// var url = 'https://spreadsheets.google.com/feeds/list/' + id + '/1/public/values?alt=json';
                      
$.getJSON(url, function(data) {
  var entry = data.feed.entry;
  $(entry).each(function() {
    var date = this.gsx$date.$t;
    var title = this.gsx$title.$t;
    var name = this.gsx$name.$t;
    var content = this.gsx$content.$t;
    $('<li><strong>' + title + '</strong>&nbsp;' + date + '<br>' + content + '</li>').appendTo('ul');
  });
});