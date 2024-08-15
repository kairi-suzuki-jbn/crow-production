//https://zenn.dev/okoe/articles/7876b897c0fccf

let userBirthdayYear = document.querySelector(".birthday-year");
let userBirthdayMonth = document.querySelector(".birthday-month");
let userBirthdayDay = document.querySelector(".birthday-day");

function createOptionForElements(elem, val) {
    let option = document.createElement("option");
    option.text = val;
    option.value = val;
    elem.appendChild(option);
}

for(let i = 1920; i <= 2020; i++) {
    createOptionForElements(userBirthdayYear, i);
}
for(let i = 1; i <= 12; i++) {
    createOptionForElements(userBirthdayMonth, i);
}
for(let i = 1; i <= 31; i++) {
    createOptionForElements(userBirthdayDay, i);
}

function changeTheDay() {

    userBirthdayDay.innerHTML = "";

    let lastDayOfTheMonth = new Date(userBirthdayYear.value, userBirthdayMonth.value, 0).getDate();

    for(let i = 1; i <= lastDayOfTheMonth; i++) {
        createOptionForElements(userBirthdayDay, i);
    }
}

userBirthdayYear.addEventListener("change", function() {
    changeTheDay();
});

userBirthdayMonth.addEventListener("change", function() {
    changeTheDay();
});






// document.getElementById("send").onclick = function() {
//     let name = document.getElementById("name").value;
//     let date = document.getElementById("date").value;

//     console.log(name);
//     console.log(date);
// }