window.onload = function () {
    // 获取第一个框的高度
    var firstBox = document.getElementById('link');
    var firstBoxHeight = firstBox.offsetHeight;

    // 将第一个框的高度应用到第二个框
    var secondBox = document.getElementById('avatar');
    secondBox.style.height = firstBoxHeight + 'px';
}