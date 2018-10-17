$(document).ready(function() {
  /* Control Panel */
  $(window).resize(() => {    //window란 웹 브라우저를 말함, window의 크기가 변경될때마다 불리는 함수인듯.
    resizePanelPosition();
  });

  function resizePanelPosition() {
    // Control Panel Positioning
    $left = $("#slider .control .left i");
    $right = $("#slider .control .right i");
    $controlPanel = $("#slider .control a");
    $img = $("#slider .item img");

    let imgHeight = $img.height();
    // console.log(imgHeight);
    let adjustPosition = imgHeight - imgHeight / 2;
    // console.log(adjustPosition);
    $controlPanel.css("height", imgHeight + "px");
    $left.css("padding-top", adjustPosition + "px");
    $right.css("padding-top", adjustPosition + "px");

    console.log(".item last", $("#slider ul .item:first").last());
  }

  resizePanelPosition();

  /* Interval Image Slider */
  // Inteval Control 을 위한 변수
  let sliding;

  // 0 번째 li 를 제외한 element 를 hide (display: none;)
  $("#slider ul li:gt(0)").hide();

  // next image sliding
  function nextSlide() {
    $("#slider ul .item:first")
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo("#slider ul");
  }
  // prev image sliding
  function prevSlide() {
    $("#slider ul .item:first")
      .fadeOut(1000)
      .siblings()
      .last()
      .fadeIn(1000);
    $("#slider ul .item:last").prependTo("#slider ul"); //append -> 뒤에다 붙이는거, prepend -> 앞에다 붙이는거.
  }

  $("#slider .control a").hover(
    event => {
      $(event.target).css("background-color", "rgba(0,0,0,.5)");
    },
    event => {
      $(event.target).css("background-color", "rgba(0,0,0,0)");
    }
  );

  $("#slider .control a").click(event => {
    if ($(event.target).hasClass("left")) {
      prevSlide();
    } else {
      nextSlide();
    }
  });
});
