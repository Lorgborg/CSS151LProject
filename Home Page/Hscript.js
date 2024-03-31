let userPoints = 50;

function showPoints() {
    document.getElementById("points").innerText = `${userPoints} Points`;
}

window.onload = function() {
    document.getElementById("points").innerText = `${userPoints} Points`;
}

function showPopup(){
    document.getElementById("popup").style.opacity = "100%";
    document.getElementById("popup").style.pointerEvents = "all";
    document.getElementById("popup-bg").style.opacity = "50%";
    document.getElementById("popup-bg").style.pointerEvents = "all";
}

function closePopup(){
    document.getElementById("popup").style.opacity = "0%";
    document.getElementById("popup").style.pointerEvents = "none";
    document.getElementById("popup-bg").style.opacity = "0%";
    document.getElementById("popup-bg").style.pointerEvents = "none";
}

function addToDo(){
    const input = document.getElementById('inputTask').value

    if(input.length == 0){
        alert("please fill up the text box");
        return false;
    }
    document.getElementById("myForm").reset();

    var ul = document.getElementById("list");
    var li = document.createElement("li")
    li.appendChild(document.createTextNode(input));
    li.className = "close";
    li.onclick = function() {
        li.classList.toggle("checked");
    }

    const closeBtn = document.createElement("button");
    closeBtn.className = "closeBtn"
    closeBtn.innerText = "X";
    closeBtn.onclick = function() {
        li.style.display = "none";
        closeBtn.style.display = "none";
    }
    ul.appendChild(closeBtn);

    ul.appendChild(li);
    closePopup();
}

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let yearNum = document.getElementById("yearNum");

