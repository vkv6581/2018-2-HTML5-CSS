$(document).ready(function () {
    // 모든 슬라이드 숨김
    $('#slider ul li:gt(0)').hide();        //gt(0)은 :앞의 것들을 전부 선택하지만 greather than 0번째 이후에 있는 eliment를 모두 선택하라는 것이다. <=> lt(less then)

    // 첫번째 슬라이드 아이템에 대해 반복을 실행
    setInterval(() => {
        $('#slider ul .item:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('#slider ul'); //메소드 체이닝;
    }, 3000);
});