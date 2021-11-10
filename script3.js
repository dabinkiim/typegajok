// json 값 텍스트로 가져오기 (읽기)



function fetchData() {

  // 반환값을 받을 Promise 객체 생성
  return new Promise(function (receive) {
    fetch('https://opensheet.vercel.app/14ZaI6lKQaPLqW4XATjNGvsdGwULIMjXiVK2baQnUrX0/Sheet1') // json 파일 읽어오기
      .then(function (response) {
        return response.json(); // 읽어온 데이터를 json으로 변환
      })
      .then(function (data) { 
        receive(JSON.stringify(data)); // json파일을 텍스트로
      });
  });
}

(async function () { 
  // fetchData() 함수를 호출해 fetch() 후 두번의 .then()을 거치는 동안을 기다려 
  // 반환되는 값을 받는다.
  jsonData = await fetchData(); 
  $(".getJson").text(jsonData);
  $('<li>' + jsonData + '</li>').appendTo('ul');
})();