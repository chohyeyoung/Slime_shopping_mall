// main. js

$(function () {

    // 상품리스트 추가
    var item_list = $('.item_list'); // 상품목록위치
    var list = '';  // 삽입될 html data
    var list_num = 5;   // 상품목록 개수
    var kwd = '원';
    var origin_price = '';

    for (var i = 0; i < list_num; i++) {
      list += '<li>';
      list += '<a href="#">';
      list += '<img src="' + product_data[i].img_url + '">';
      list += '<span class="title">' + product_data[i].title + '</span>';
      list += '<span class="name">' + product_data[i].name + '</span>'

      if (product_data[i].origin_price == "") {
        kwd = "&nbsp;";
        origin_price = "";
      } else { origin_price = product_data[i].origin_price; }

      list += '<del class="origin_price">' + origin_price + kwd + '</del>';
      list += '<ins class="sale_price"><strong>' + product_data[i].sale_price + '원</strong></ins>';
    }

    item_list.append(list);

  // Item_list_2
  // 상품리스트 추가
  var item_list = $('.item_list_2'); // 상품목록위치
  var list = '';  // 삽입될 html data
  var list_num = 5;   // 상품목록 개수
  var kwd = '원';
  var origin_price = '';

  for (var i = 0; i < list_num; i++) {
    list += '<li>';
    list += '<a href="#">';
    list += '<img src="' + product_data_1[i].img_url + '">';
    list += '<span class="title">' + product_data_1[i].title + '</span>';
    list += '<span class="name">' + product_data_1[i].name + '</span>'

    if (product_data_1[i].origin_price == "") {
      kwd = "&nbsp;";
      origin_price = "";
    } else { origin_price = product_data_1[i].origin_price; }

    list += '<del class="origin_price">' + origin_price + kwd + '</del>';
    list += '<ins class="sale_price"><strong>' + product_data_1[i].sale_price + '원</strong></ins>';
  }

  item_list.append(list);

  // 카테고리 토글 버튼
  $('#category_btn').click(function () {
    $('#category').slideToggle();
  });

  // 다른 곳을 누르면 자동으로 닫히기
  $('header, section').click(function(){
    $('#category').slideUp();
  });



  $('.bx-slider').bxSlider({
    // 여기에 옵션 설정
    mode: 'horizontal',       // 효과설정
    auto: true,               // 자동재생
    easing: 'ease-in-out',     // 가속도 (time-function)
    pause: 4000,              // 정지시간 (대기시간)
    controls: false,           // next,prev 표시 / 비표시
    pager: true,              // 하단 인디케이터 표시 , 비표시:false
    responsive: false,
  });




}); // $end

