// let phong = localStorage.getItem('Phong');
// gán biến và lưu
// if (phong === null) {
//     localStorage.setItem('dAnh', '0');
//     localStorage.setItem('Default', '0');
//     localStorage.setItem('Huy', '0');
//     localStorage.setItem('Hoang', '0');
//     localStorage.setItem('Nam', '0');
//     localStorage.setItem('Phong', '0');
//     localStorage.setItem('Quang', '0');
//     localStorage.setItem('Thinh', '0');
//     localStorage.setItem('Vu', '0');
//     localStorage.setItem('Quynh', '0');
// }

// mảng lưu giá trị ván trước đó của từng người
var playersArr = new Map();


for (var i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) != 'cais' && localStorage.key(i) != 'num') {
        var div1 = document.querySelector('.players');
        var div2 = document.createElement("div");
        div2.id = localStorage.key(i);
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
        var tbody = document.querySelector("article table tbody");
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        td1.classList.add("text");
        td2.classList.add("text");
        td3.classList.add("text");
        td4.classList.add("text");
        td1.innerHTML = localStorage.key(i);
        tbody.appendChild(tr);
    }
}
if (localStorage.getItem('cais') != "Default") {
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) == 'cais') {
            var tencais = localStorage.getItem('cais');
            var divcais = document.getElementById(tencais);
            divcais.classList.add('weight-color')
        }
    }

}




// if (localStorage.getItem('Default') === null) {
//     localStorage.setItem('Default', 'Default');
// }



// gán mặc định cái cho Bảo
let cais = localStorage.getItem('cais');
if (cais === null) {
    localStorage.setItem('cais', 'Default');
}
// add người chơi
document.addEventListener("DOMContentLoaded", function () {
    var addPlayername = document.querySelector('.addplayer-name')
    var addPlayerBtn = document.querySelector('.addplayer-btn')
    addPlayerBtn.onclick = function () {
        if (addPlayername.value != '') {
            playersArr.set(addPlayername.value, 0)
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
            span2.innerText = "0";
            var button2 = document.createElement("button");
            div2.appendChild(button2);
            button2.innerHTML = "+";
            div1.appendChild(div2);
            addPlayername.value = '';
            var tbody = document.querySelector("article table tbody");
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            var td4 = document.createElement("td");
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            td1.classList.add("text");
            td2.classList.add("text");
            td3.classList.add("text");
            td4.classList.add("text");
            tbody.appendChild(tr);
        }
        var players1 = document.querySelectorAll('.players div');
        var playerHis1 = document.querySelectorAll('article table tbody tr')
        for (let i = 0; i < players1.length; i++) {
            playerHis1[i].children[0].innerText = players1[i].children[0].innerText;
        }
    }


}, false)

//Xóa người chơi

document.addEventListener("DOMContentLoaded", function () {
    var delPlayerBtn = document.querySelector(".delplayer-btn");
    delPlayerBtn.onclick = function () {
        if (localStorage.length == 3) {
            window.alert("Không thể xóa. Phải có ít nhất 1 người để làm cái");
            return;
        }
        else {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) != 'cais' && localStorage.key(i) != 'num' && localStorage.key(i) != localStorage.getItem('cais')) {
                    var x = localStorage.getItem('cais');
                    var divNewCai = document.getElementById(localStorage.key(i));
                    console.log(divNewCai)
                    divNewCai.classList.add("weight-color")
                    var divPlayer = document.querySelector('.players');
                    var delPlayer = document.getElementById(x);
                    localStorage.setItem('cais', localStorage.key(i));
                    window.alert("Xóa thành công " + x)
                    localStorage.removeItem(x);
                    divPlayer.removeChild(delPlayer)
                    break;
                }
            }
        }
    }
}, false)





// chờ HTML hiện ra rồi mới thực hiện hàm hiện tiền
document.addEventListener("DOMContentLoaded", getM);

// Lấy Bảo ra, thêm class cais vào lớp Bảo

// Lấy số tiền ra hiển thị 
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem('cais') != 'Default') {
        document.getElementById(localStorage.getItem('cais')).classList.add('cais');
    }
    document.querySelector('.add').children[2].innerText = localStorage.getItem('num');
});

// Bấm vào tên nào thì tên đó sẽ là cái
function addCais(event) {
    if(localStorage.getItem('cais') != "Default"){
        document.getElementById(localStorage.getItem('cais')).classList.remove('weight-color');
    }
    let i;
    var players = document.querySelectorAll('.players div');
    for (i = 0; i < players.length; i++) {
        players[i].className = players[i].className.replace("cais", "");
    }
    event.parentElement.classList.add('cais')
    localStorage.setItem('cais', event.innerText);

    // for(let i = 0; i < playerHis1.length; i++){
    //     if(playerHis1[i].children[0].innerText == localStorage.getItem('cais')){
    //         playerHis1[i].children[1].innerText.remove;
    //         playerHis1[i].children[2].innerText.remove;
    //     }
    // }
}

function addCais2(event) {
    if(localStorage.getItem('cais') != "Default"){
        document.getElementById(localStorage.getItem('cais')).classList.remove('weight-color');
    }
    let i;
    var players = document.querySelectorAll('.players div');
    for (i = 0; i < players.length; i++) {
        players[i].className = players[i].className.replace("cais", "");
    }
    event.parentElement.classList.add('cais')
    localStorage.setItem('cais', event.parentElement.children[0].innerText);

    // for(let i = 0; i < playerHis1.length; i++){
    //     if(playerHis1[i].children[0].innerText == localStorage.getItem('cais')){
    //         playerHis1[i].children[1].innerText.remove;
    //         playerHis1[i].children[2].innerText.remove;
    //     }
    // }
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
    var playerHis = document.querySelectorAll('article table tbody tr')
    if (item.parentElement.children[0].innerText === cais) {
        return;
    }

    if (item.innerText === '-') {
        playerM = Number(playerM) - numM;
        localStorage.setItem(item.parentElement.children[0].innerText, playerM);

        caisM = Number(caisM) + numM;
        localStorage.setItem(cais, caisM);

        // for(let i = 0; i < playerHis.length; i++){
        //     if(playerHis[i].children[0].innerText == item.parentElement.children[0].innerText){
        //         if(playerHis[i].children[1].innerText == null){
        //             playerHis[i].children[1].innerText.remove;
        //             playerHis[i].children[1].innerText = '-'

        //         }
        //         else {
        //             playerHis[i].children[2].innerText.remove;
        //             playerHis[i].children[2].innerText = playerHis[i].children[1].innerText;
        //             playerHis[i].children[1].innerText = '-';
        //         }
        //     }
        // }
    }

    if (item.innerText === '+') {
        playerM = Number(playerM) + numM;
        localStorage.setItem(item.parentElement.children[0].innerText, playerM);

        caisM = Number(caisM) - numM;
        localStorage.setItem(cais, caisM);

        // for(let i = 0; i < playerHis.length; i++){
        //     if(playerHis[i].children[0].innerText == item.parentElement.children[0].innerText){
        //         if(playerHis[i].children[1].innerText == null){
        //             playerHis[i].children[1].innerText.remove;
        //             playerHis[i].children[1].innerText = '+'

        //         }
        //         else {
        //             playerHis[i].children[2].innerText.remove;
        //             playerHis[i].children[2].innerText = playerHis[i].children[1].innerText;
        //             playerHis[i].children[1].innerText = '+';
        //         }
        //     }
        // }
    }

    if (item.className == "name") {
        addCais(item);
    }

    if (item.className == "money") {
        addCais2(item);
    }

    getM();
    history();

}

//set chức năng đặt lại cái
// const newcais = document.querySelector('.')


//lấy số tiền từng người hiển thị ra
function getM() {
    let i;
    var players = document.querySelectorAll('.players div');
    for (i = 0; i < players.length; i++) {
        var playerM = localStorage.getItem(players[i].children[0].innerText);
        players[i].children[2].innerText = playerM;
    }
}

function history() {
    let i;
    var players = document.querySelectorAll('.players div');
    var playerHis = document.querySelectorAll('article table tbody tr')

    for (i = 0; i < players.length; i++) {
        playerHis[i].children[0].innerText = players[i].children[0].innerText;
    }
}

function update() {
    var players = document.querySelectorAll('.players div');
    for (let i = 0; i < players.length; i++) {
        var difference = (parseInt)(players[i].children[2].innerText) - (parseInt)(playersArr.get(players[i].children[0].innerText))
        var playerHis1 = document.querySelectorAll('article table tbody tr')
        if (difference > 0) {
            x = "+" + difference.toString();
        }
        else {
            x = difference.toString();
        }
        for (let j = 0; j < playerHis1.length; j++) {
            if (playerHis1[j].children[0].innerText == players[i].children[0].innerText) {
                if (playerHis1[j].children[1].innerText == null) {
                    playerHis1[j].children[1].innerText = x;
                }
                else {
                    playerHis1[j].children[3].innerText.remove;
                    playerHis1[j].children[3].innerText = playerHis1[j].children[2].innerText;
                    playerHis1[j].children[2].innerText.remove;
                    playerHis1[j].children[2].innerText = playerHis1[j].children[1].innerText;
                    playerHis1[j].children[1].innerText.remove;
                    playerHis1[j].children[1].innerText = x;
                }
            }
        }
        playersArr.set(players[i].children[0].innerText, players[i].children[2].innerText);
    }
}

