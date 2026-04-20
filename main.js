let posts = [];

fetch("data/posts.json")
.then(res=>res.json())
.then(data=>{
    posts = data;
    render(posts);
});

function render(list){
    const container = document.getElementById("list");
    container.innerHTML = "";

    list.forEach(p=>{
        const div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
            <span>${p.category}</span>
        `;

        div.onclick = ()=>{
            window.location.href = "post.html?file=" + p.file;
        };

        container.appendChild(div);
    });
}
