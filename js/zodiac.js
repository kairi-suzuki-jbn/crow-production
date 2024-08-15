//https://zenn.dev/okoe/articles/7876b897c0fccf

let userBirthdayMonth = document.getElementById("birthday-month");
let userBirthdayDay = document.getElementById("birthday-day");
let send = document.getElementById("send");

function createOptionForElements(elem, val) {
    let option = document.createElement("option");
    option.text = val;
    option.value = val;
    elem.appendChild(option);
}

for(let i = 1; i <= 12; i++) {
    createOptionForElements(userBirthdayMonth, i);
}
for(let i = 1; i <= 31; i++) {
    createOptionForElements(userBirthdayDay, i);
}


send.addEventListener("click", function() {
    let name = document.getElementById("name").value;
    let month = document.getElementById("birthday-month").value;
    let day = document.getElementById("birthday-day").value;

    console.log(name);
    console.log(month);
    console.log(day);
});

// document.getElementById("send").onclick = function() {
//     let name = document.getElementsById("name");
//     let userBirthdayMonth = document.querySelector(".birthday-month");
//     let userBirthdayDay = document.querySelector(".birthday-day");

//     console.log(name);
//     console.log(userBirthdayMonth);
//     console.log(userBirthdayDay);
// }