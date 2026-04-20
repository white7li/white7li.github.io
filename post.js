const params = new URLSearchParams(window.location.search);
const file = params.get("file");

fetch(file)
.then(res=>res.text())
.then(md=>{
    document.getElementById("content").innerHTML = marked.parse(md);
});
