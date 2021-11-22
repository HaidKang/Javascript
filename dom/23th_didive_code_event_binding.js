// 모든 것들이 안쪽에 존재하게 된다.
window.onload = function (){
    var btnPrint = document.getElementById("btn-print");

    // 따라서 이런식의 추가도 가능하다.
    var add = function(x, y){
        return x + y;
    };

    btnPrint.onclick = function ()
    {
        // 위에 btnPrint 를 사용하므로써 필요 없어짐.
        // var btnPrint = document.getElementById("btn-print");

        var x = prompt("x 값을 입력하세요", 0);
        var y = prompt("y 값을 입력하세요", 0);

        x = parseInt(x);
        y = parseInt(y);
        btnPrint.value = x+y;
    };
}