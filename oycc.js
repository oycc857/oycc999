alert('请使用edge浏览器打开此网站,js能获取摄像头和麦克风权限,但是不能获取自动播放媒体权限,可以按照下面流程打开,然后进入网站'
    
)
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