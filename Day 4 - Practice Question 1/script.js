let storedUser = "";
let storedPass = "";

function register() {
    storedUser = document.getElementById("regUser").value;
    storedPass = document.getElementById("regPass").value;
    alert("Registered Successfully!");
}

function login() {
    let u = document.getElementById("username").value;
    let p = document.getElementById("password").value;

    if (u === storedUser && p === storedPass) {
        window.location.href = "index.html";
    } else {
        alert("Invalid User");
    }
}

function showProfile() {
    document.getElementById("welcome").classList.add("d-none");
    document.getElementById("profile").classList.remove("d-none");
}

let activities = [
    { id: 1, activity: "Tables 12 to 19 Project", subject: "Maths" },
    { id: 2, activity: "Algebra Assignment", subject: "Maths" },
    { id: 3, activity: "Science Model Making", subject: "Science" },
    { id: 4, activity: "Physics Experiment Record", subject: "Science" },
    { id: 5, activity: "English Essay Writing", subject: "English" },
    { id: 6, activity: "Grammar Worksheet", subject: "English" }
];

function filterActivity() {
    let selected = document.getElementById("subject").value;
    let output = "";

    activities.forEach(function(a) {
        if (selected === "All" || a.subject === selected) {
            output += "<p>" + a.activity + "</p>";
        }
    });

    document.getElementById("result").innerHTML = output;
}

if (document.getElementById("result")) {
    filterActivity();
}
