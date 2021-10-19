let selected_no = 0;
console.log("hi");
let score = 0;

document.getElementById('Loading').innerHTML = "Loading! Game will start in a few second....";
var rand = 1;
var t=3;
function time() {
    document.getElementById('Loading').innerHTML = "Dice will change in " + t + " sec";
    t--;
    if (t == -1) {
        rand = Math.floor(Math.random() * 6) + 1;
        
        t = 3;
    }

}
setInterval(time, 2000);



$(".1").on("click", function () {
    e = 1;
    console.log("hi");
    selected_no = e;
    document.getElementById('Select').textContent = "Selected Variable:" + selected_no;

    if (e == rand) {
        score++;
        document.getElementById('img').innerHTML = "<img src='./images/" + rand + ".jpg'>";
        document.getElementById('Message').innerHTML = "Your guess was Right";
        $(".message").css({"background-color":"grey", "width":"600px","height":"50px","display":"flex","justify-content":"center","align-items":"center"});
        document.getElementById('Score').textContent = "Score:" + score;
    }
    else {
        document.getElementById('img').innerHTML = "<img src='./images/" + rand + ".jpg'>";
        document.getElementById('Message').innerHTML = "Your guess was Wrong";
        document.getElementById('Score').textContent = "Score:" + score;
    }
}
);
$(".2").on("click", function () {
    e = 2;
    console.log("hi");
    selected_no = e;
    document.getElementById('Select').textContent = "Selected Variable:" + selected_no;

    if (e == rand) {
        score++;
        document.getElementById('img').innerHTML = "<img src='./images/" + rand + ".jpg'>";
        document.getElementById('Message').innerHTML = "Your guess was Right";
        document.getElementById('Score').textContent = "Score:" + score;
    }
    else {
        document.getElementById('img').innerHTML = "<img src='./images/" + rand + ".jpg'>";
        document.getElementById('Message').innerHTML = "Your guess was Wrong";
        document.getElementById('Score').textContent = "Score:" + score;
    }
}
);
$(".3").on("click", function () {
    e = 3;
    console.log("hi");
    selected_no = e;
    document.getElementById('Select').textContent = "Selected Variable:" + selected_no;

    if (e == rand) {
        score++;
        document.getElementById('img').innerHTML = "<img src='./images/" + rand + ".jpg'>";
        document.getElementById('Message').innerHTML = "Your guess was Right";
        document.getElementById('Score').textContent = "Score:" + score;
    }
    else {
        document.getElementById('img').innerHTML = "<img src='./images/" + rand + ".jpg'>";
        document.getElementById('Message').innerHTML = "Your guess was Wrong";
        document.getElementById('Score').textContent = "Score:" + score;
    }
}
);
$(".4").on("click", function () {
    e = 4;
    console.log("hi");
    selected_no = e;
    document.getElementById('Select').textContent = "Selected Variable:" + selected_no;

    if (e == rand) {
        score++;
        document.getElementById('img').innerHTML = "<img src='./images/" + rand + ".jpg'>";
        document.getElementById('Message').innerHTML = "Your guess was Right";
        document.getElementById('Score').textContent = "Score:" + score;
    }
    else {
        document.getElementById('img').innerHTML = "<img src='./images/" + rand + ".jpg'>";
        document.getElementById('Message').innerHTML = "Your guess was Wrong";
        document.getElementById('Score').textContent = "Score:" + score;
    }
}
);
$(".5").on("click", function () {
    e = 5;
    console.log(e);
    selected_no = e;
    document.getElementById('Select').textContent = "Selected Variable:" + selected_no;

    if (e == rand) {
        score++;
        document.getElementById('img').innerHTML = "<img src='./images/" + rand + ".jpg'>";
        document.getElementById('Message').innerHTML = "Your guess was Right";
        document.getElementById('Score').textContent = "Score:" + score;
    }
    else {
        document.getElementById('img').innerHTML = "<img src='./images/" + rand + ".jpg'>";
        document.getElementById('Message').innerHTML = "Your guess was Wrong";
        document.getElementById('Score').textContent = "Score:" + score;
    }
}
);
$(".6").on("click", function () {
    e = 6;
    console.log("hi");
    selected_no = e;
    document.getElementById('Select').textContent = "Selected Variable:" + selected_no;

    if (e == rand) {
        score++;
        document.getElementById('img').innerHTML = "<img src='./images/" + rand + ".jpg'>";
        document.getElementById('Message').innerHTML = "Your guess was Right";
        document.getElementById('Score').textContent = "Score:" + score;
    }
    else {
        document.getElementById('img').innerHTML = "<img src='./images/" + rand + ".jpg'>";
        document.getElementById('Message').innerHTML = "Your guess was Wrong";
        document.getElementById('Score').textContent = "Score:" + score;
    }
}
);