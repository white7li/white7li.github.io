function addTask() {
    console.log("按钮点击成功");

    let input = document.getElementById("taskInput");
    console.log("输入值：", input.value);

    let list = document.getElementById("taskList");

    if (!input.value.trim()) {
        console.log("空输入");
        return;
    }

    let li = document.createElement("li");
    li.innerText = input.value;

    list.appendChild(li);

    input.value = "";
}
