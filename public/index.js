fetch("/api/shoes").then(
    (res) => res.json()
).then((data) => {
    let ul = document.getElementById("userList");
    for(let user of data){
        let li = document.createElement("li");
        li.textContent= `${shoe.id}, ${shoe.category}`;
        ul.appendChild(li);
    }
});