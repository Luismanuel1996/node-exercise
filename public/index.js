fetch("/api/users").then(
    (res) => res.json()
).then((data) => {
    let ul = document.getElementById("userList");
    for(let user of data){
        let li = document.createElement("li");
        li.textContent= `${user.firstName}, ${user.lastName}`;
        ul.appendChild(li);
    }
})