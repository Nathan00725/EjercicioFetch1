fetch("https://api.escuelajs.co/api/v1/users")
    .then(res => res.json())
    .then(data => {
        let card = '';
        for (let db of data) {
            card += `<div class="card mb-5" style="width: 18rem;">
            <img src="${db.avatar}" class="card-img-top" alt="${db.name}">
            <div class="card-body">
                <h5 class="card-title">${db.name}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>Email:</strong> ${db.email}</li>
                <li class="list-group-item"><strong>Password:</strong> ${db.password}</li>
           
                </ul>
        </div>`
        }
        document.getElementById("lista").innerHTML = card
    })