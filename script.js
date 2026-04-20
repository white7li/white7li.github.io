let score = 0;

function update() {
    document.getElementById("score").innerText = score;

    let status = "";

    if (score >= 10) {
        status = "🔥 很强";
    } else if (score >= 5) {
        status = "🙂 不错";
    } else if (score >= 0) {
        status = "🙂 继续加油";
    } else {
        status = "💀 负分了";
    }

    document.getElementById("status").innerText = status;
}

function add() {
    score++;
    update();
}

function minus() {
    score--;
    update();
}
