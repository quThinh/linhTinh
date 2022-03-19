// let phong = localStorage.getItem('Phong');
// gán biến và lưu
// if (phong === null) {
//     localStorage.setItem('dAnh', '0');
//     localStorage.setItem('Bao', '0');
//     localStorage.setItem('Huy', '0');
//     localStorage.setItem('Hoang', '0');
//     localStorage.setItem('Nam', '0');
//     localStorage.setItem('Phong', '0');
//     localStorage.setItem('Quang', '0');
//     localStorage.setItem('Thinh', '0');
//     localStorage.setItem('Vu', '0');
//     localStorage.setItem('Quynh', '0');
// }

for (var i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) != 'cais' && localStorage.key(i) != 'num') {
        var div1 = document.querySelector('.players');
        var div2 = document.createElement("div");
        div2.id = 'Bao';
        var span1 = document.createElement("span");
        div2.appendChild(span1);
        span1.classList.add("name");
        span1.innerHTML = localStorage.key(i);
        var button1 = document.createElement("button");
        div2.appendChild(button1);
        button1.innerHTML = "-";
        var span2 = document.createElement("span");
        div2.appendChild(span2);
        span2.classList.add("money");
        var button2 = document.createElement("button");
        div2.appendChild(button2);
        button2.innerHTML = "+";
        div1.appendChild(div2);
    }

}
if(localStorage.getItem('Bao') === null){
    localStorage.setItem('Bao', '0');
}



// gán mặc định cái cho Bảo
let cais = localStorage.getItem('cais');
if (cais === null) {
    localStorage.setItem('cais', 'Bao');
}
// add người chơi
document.addEventListener("DOMContentLoaded", function () {
    var addPlayername = document.querySelector('.addplayer-name')
    var addPlayerBtn = document.querySelector('.addplayer-btn')
    addPlayerBtn.onclick = function () {
        if (addPlayername.value != '') {
            localStorage.setItem(addPlayername.value, '0');
            var div1 = document.querySelector('.players');
            var div2 = document.createElement("div");
            div2.id = addPlayername.value;
            var span1 = document.createElement("span");
            div2.appendChild(span1);
            span1.classList.add("name");
            span1.innerHTML = addPlayername.value;
            var button1 = document.createElement("button");
            div2.appendChild(button1);
            button1.innerHTML = "-";
            var span2 = document.createElement("span");
            div2.appendChild(span2);
            span2.classList.add("money");
            var button2 = document.createElement("button");
            div2.appendChild(button2);
            button2.innerHTML = "+";
            div1.appendChild(div2);
            addPlayername.value = '';
            document.get
        }
    }
}, false)







// chờ HTML hiện ra rồi mới thực hiện hàm hiện tiền
document.addEventListener("DOMContentLoaded", getM);

// Lấy Bảo ra, thêm class cais vào lớp Bảo
// Lấy số tiền ra hiển thị 
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById(localStorage.getItem('cais')).classList.add('cais');
    document.querySelector('.add').children[2].innerText = localStorage.getItem('num');
});

// Bấm vào tên nào thì tên đó sẽ là cái
function addCais(event) {
    let i;
    var players = document.querySelectorAll('.players div');
    for (i = 0; i < players.length; i++) {
        players[i].className = players[i].className.replace("cais", "");
    }
    event.parentElement.classList.add('cais')
    localStorage.setItem('cais', event.innerText);
}

function addCais2(event) {
    let i;
    var players = document.querySelectorAll('.players div');
    for (i = 0; i < players.length; i++) {
        players[i].className = players[i].className.replace("cais", "");
    }
    event.parentElement.classList.add('cais')
    localStorage.setItem('cais', event.parentElement.children[0].innerText);
}

// đặt số tiền cược mặc định là 5
let num = localStorage.getItem('num');
if (num === null) {
    localStorage.setItem('num', '5');
}

// set số tiền mình muốn
const playerBtn = document.querySelector('.player-btn');
const playerInput = document.querySelector('.player-input');
playerBtn.addEventListener('click', function () {
    if (playerInput.value != '') {
        localStorage.setItem('num', playerInput.value);
        document.querySelector('.add').children[2].innerText = playerInput.value;
        playerInput.value = '';
    }
});

//
const toDoList = document.querySelector('.players');
toDoList.addEventListener('click', vnd);
function vnd(event) {
    const item = event.target; //lấy ra thẻ chứa sự kiện
    var numM = Number(localStorage.getItem('num'));
    var playerM = localStorage.getItem(item.parentElement.children[0].innerText);
    cais = localStorage.getItem('cais');
    var caisM = localStorage.getItem(cais);
    if (item.parentElement.children[0].innerText === cais) {
        return;
    }

    if (item.innerText === '-') {
        playerM = Number(playerM) - numM;
        localStorage.setItem(item.parentElement.children[0].innerText, playerM);

        caisM = Number(caisM) + numM;
        localStorage.setItem(cais, caisM);
    }

    if (item.innerText === '+') {
        playerM = Number(playerM) + numM;
        localStorage.setItem(item.parentElement.children[0].innerText, playerM);

        caisM = Number(caisM) - numM;
        localStorage.setItem(cais, caisM);
    }

    if (item.className == "name") {
        addCais(item);
    }

    if (item.className == "money") {
        addCais2(item);
    }

    getM();

}

//set chức năng đặt lại cái
const newcais = document.querySelector('.')


//lấy số tiền từng người hiển thị ra
function getM() {
    let i;
    var players = document.querySelectorAll('.players div');
    for (i = 0; i < players.length; i++) {
        var playerM = localStorage.getItem(players[i].children[0].innerText);
        players[i].children[2].innerText = playerM;
    }
}

