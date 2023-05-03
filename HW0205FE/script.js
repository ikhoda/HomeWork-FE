
const main = document.querySelector("main");
// 1

for (let i = 100; i >= 50; i--) {
    if (i % 10 === 0) {
        main.innerHTML +=  `<div class="numbers">${i}</div>`
    }
    
}

// 2
const namesContainer = ["Illya", "Lena", "Anna", "Katerina"]
for (let i = 0; i < namesContainer.length; i++) {
    main.innerHTML += `<div class="strings_container">
                                <p>${namesContainer[i]}</p>
                        </div>`
}

// 3
const users = [
    {
        first_name: "Illya",
        last_name: "Khoda",
        age: 32
    },
    {
        first_name: "Lena",
        last_name: "Golovach",
        age: 16
    },
    {
        first_name: "Anna",
        last_name: "Hor",
        age: 37
    },
    {
        first_name: "Katerina",
        last_name: "Dresden",
        age: 15 
    },
]
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 18) {
        main.innerHTML += `<div class="users_container">
                                    <h2>${users[i].first_name}</h2>
                                    <h3>${users[i].last_name}</h3>
                                    <p>${users[i].age} years old</p>
                            </div>`
    }
}