let form = document.getElementById("form")
let tbody = document.getElementById("tbody")
let Name = document.getElementById("name")
let age = document.getElementById("age")

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let obj = {
        name: Name.value,
        age: age.value,
    }
    // setting obj to local storage
    let userDetails = localStorage.setItem("userDetails", JSON.stringify(obj));
    // getting data form local storage
    let savedetail = JSON.parse(localStorage.getItem("userDetails")) || {};

    tbody.innerHTML = ""

    let arr = new Array
    arr.push(obj)
    arr.map(e => {
        let row = document.createElement("tr")
        let name = document.createElement("td")
        let age = document.createElement("td")
        name.innerText = e.name;
        age.innerText = e.age;
        row.append(name, age)

        tbody.append(row)

    })





})