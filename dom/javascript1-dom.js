// Ex7 : 엘리먼트 노드의속성 & CSS 속성 변경
window.addEventListener("load", function(){
    var notices = [
        {id:5, title:"파이야~~", regDate:"2019-01-26", writerId: "new", hit:"0"}, 
        {id:5, title:"파이야~~", regDate:"2019-01-26", writerId: "new", hit:"0"} 
    ]
    var section = document.querySelector("#section7");
    
    var noticeList = section.querySelector(".notice-list");
    var tbodyNode = noticeList.querySelector("tbody");
    var cloneButton = section.querySelector(".clone-button");
    var templateButton = section.querySelector(".template-button");
    
    cloneButton.onclick = function(){
        var trNode = noticeList.querySelector("tbody tr");
        var cloneNode = trNode.cloneNode(true);
        var tds = cloneNode.querySelectorAll("td");
        tds[0].textContent = notices[0].id;
        tds[1].innerHTML = '<a href="'+notices[0].id+'">'+notices+'</a>';
        tds[2].textContent = notices[0].regDate;
        tds[3].textContent = notices[0].writerId;
        tds[4].textContent = notices[0].hit;

        tbodyNode.append(cloneNode);
    };

    templateButton.onclick = function(){
        // var txtNode = menuListUl.childNodes[0];
        var liNode = menuListUl.children[0];
        //menuListUl.removeChild(liNode);
        liNode.remove();
    };

});

// Ex6 - 노드조작 : 메뉴추가 (createTextNode, Element)
window.addEventListener("load", function(){
    var section = document.querySelector("#section6");
    
    var titleInput = section.querySelector(".title-input");
    var menuListUl = section.querySelector(".menu-list");
    // var menuListDiv = section.querySelector(".menu-list");
    var addButton = section.querySelector(".add-button");
    var delButton = section.querySelector(".del-button");
    
    addButton.onclick = function(){
        var title = titleInput.value;
        // Mthod3) 
        var html = '<a href="">'+title+'</a>';
        var li = document.createElement("li");
        li.innerHTML = html;

        // menuListUl.appendChild(li);
        menuListUl.append(title);

        /* Method2) 이렇게 만드는 방법은 계속 누적하므로 메모리에 누적 가능성이 존재한다.
        menuListUl.innerHTML += '<li><a href="">'+title+'</a></li>';
        */
        /* Method1) 이렇게 만드는 것은 매우 복잡해 진다. 
        => 위 : menuListUl.innerHTML = '<li><a href="">'+title+'</a></li>'; 로 대체됨.
        var title = titleInput.value;
        var txtNode = document.createTextNode(title);

        var aNode = document.createElement("a");
        aNode.href="";   // 속성값을 넣어주어야 한다.
        aNode.appendChild(txtNode);

        var liNode = document.createElement("li");
        liNode.appendChild(aNode);

        menuListUl.appendChild(liNode);
        */

        /* text node 관련
        var title = titleInput.value        var txtNode = document.createTextNode(title);
        menuListDiv.appendChild(txtNode);

        menuListDiv.appendChild(txtNode);
        */
    };

    delButton.onclick = function(){
        // var txtNode = menuListUl.childNodes[0];
        var liNode = menuListUl.children[0];
        //menuListUl.removeChild(liNode);
        liNode.remove();
    };

});

// Ex5 : 엘리먼트 노드의 속성 변경
window.addEventListener("load", function(){
    var section = document.querySelector("#section5");
    var srcInput = section.querySelector(".src-input");
    var imgSelect = section.querySelector(".img-select");
    var changeButton = section.querySelector(".change-button");
    var img = section.querySelector(".img");
    var colorInput = section.querySelector(".color-input");
    
    changeButton.onclick = function(){
        img.src = "images/" + srcInput.value;
        //img.src = "images/" + imgSelect.value;
        //img.style["border-color"] = colorInput.value;  //js 의 표현 방법이 아니어서 아래와 같은 방법으로 사용.
        img.style.borderColor = colorInput.value;  // 이것도 가능
        console.log(img.className);
    };

});

// Ex4 : childNodes 를 이용한 노드 선택
window.addEventListener("load", function(){
    var section4 = document.querySelector("#section4");
    var box = section4.querySelector(".box");
//.childNodes[0] : comment 도 node 이므로 whitespace 도 선택 되므로 PGM 적으로 오류가 발생할수 있다.
// .children[0] : 얘는 tag 가 있는 놈만 사용한다.
//    var input1 = box.childNodes[0]  
//    var input2 = box.childNodes[1];
    var input1 = box.children[0]  
    var input2 = box.children[1];

    input1.value = "hello";
    input2.value = "oaky";
});

// Ex3 : Selectors API Level1
window.addEventListener("load", function(){
    var section3 = document.getElementById("section3");
    // step2)
    // 앞으로는 step1) 부분을 아래 "x" 로 정의한 step2) 방식을 사용 예정
    // querySelector() API 의 안의 내용이 매우 다양하게 입력될 수 있으므로 
    // getElementsByClassName() 등과는 차원이 다름.
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
    var txtX = section3.querySelector("input[name='x']");   
    // step1) 
    //.txt-x 는 css 의 문법 - class 명을 찾으라는 것
    // "." 이 없으면 Tag 명으로 인식함.
    var txtY = section3.querySelector(".txt-y");
    var btnAdd = section3.querySelector(".btn-add");
    var txtSum = section3.querySelector(".txt-sum");

    btnAdd.onclick = function () {
        alert("Section3 : 계산기 시작합니다.~~");
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x+y;
    };
});

// Ex2 : 엘리먼트 선택방법 개선하기
window.addEventListener("load", function(){
    var section2 = document.getElementById("section2");
   /* 오류는 발생하지 않았지만, id 는 문서 내에 유효 해야 하므로
      아래와 같이 class 로 변경함
    var inputs = section2.getElementsByTagName("input");
    
    var txtX = inputs[0];
    var txtY = inputs[1];;
    var btnAdd = inputs[2];
    var txtSum = inputs[3];
    */

    var txtX = section2.getElementsByClassName("txt-x")[0];
    var txtY = section2.getElementsByClassName("txt-y")[0];
    var btnAdd = section2.getElementsByClassName("btn-add")[0];
    var txtSum = section2.getElementsByClassName("txt-sum")[0];

    btnAdd.onclick = function () {
        alert("Section2 : 계산기 시작합니다.~~");
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x+y;
    };
});

// Ex1 : 계산기 프로그램
window.addEventListener("load", function(){
    var txtX = document.getElementById("txt-x");
    var txtY = document.getElementById("txt-y");
    var btnAdd = document.getElementById("btn-add");
    var txtSum = document.getElementById("txt-sum");
    
    btnAdd.onclick = function () {
        alert("계산기 시작합니다.~~");
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x+y;
    };
});