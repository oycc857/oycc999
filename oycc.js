var daohang = document.querySelector('.daohang');
var lis = daohang.querySelectorAll('li');
var items = document.querySelectorAll('.item');
for (var i = 0; i < lis.length; i++) {
    lis[i].setAttribute('index', i);
    lis[i].onclick = function () {
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = '';
        }
        this.className = 'no1';
        var index = this.getAttribute('index');
        console.log(index);
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = 'none';
        }
        items[index].style.display = 'block';
    }
}
$(".no1").hover(function(){
    $(this).children("ul").stop().slideToggle(200);
})

$(".no2").hover(function () {
    $(this).children("ul").stop().slideToggle(200);
})
$(".no3").hover(function () {
    $(this).children("ul").stop().slideToggle(200);
})
$(".no4").hover(function () {
    $(this).children("ul").stop().slideToggle(200);
})
$(".no5").hover(function () {
    $(this).children("ul").stop().slideToggle(200);
})
$(".no6").hover(function () {
    $(this).children("ul").stop().slideToggle(200);
})
$(".no7").hover(function () {
    $(this).children("ul").stop().slideToggle(200);
})