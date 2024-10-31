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
const image = document.querySelector('.zoom-image');
window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const containerTop = document.querySelector('.zoom-container').getBoundingClientRect().top;
    const zoomFactor = 1 + (scrollTop / 100);
    if (scrollTop > containerTop) {
        image.style.transform = `scale(${zoomFactor})`;
    } else {
        image.style.transform = `scale(1)`;
    }
});
$(document).ready(function () {
    var scrollPosition = $(window).scrollTop();
    var threshold = 500; 

    $(window).scroll(function () {
        scrollPosition = $(this).scrollTop(); 

        if (scrollPosition > threshold) {
           
            $('#element-to-change').removeClass('back5 ').addClass('back6');
        } else {
            
            $('#element-to-change').removeClass('back6').addClass('back5');
        }
    });
});
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        var triggerHeight = 500; 
        var targetHeight = 1480; 
        if (scroll >= triggerHeight && scroll < targetHeight) {
            $('html, body').scrollTop(targetHeight);
        }
    });
});
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
$(".cebian").click(function () {
    $("ul").toggleClass("active");
});
$(".cebian li").mouseover(function(){
    $(this).toggleClass("cebian2");
});

