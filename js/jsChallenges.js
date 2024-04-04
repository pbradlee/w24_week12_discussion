// CHALLENGE 1 PART 1
// Get Element By ID
// document.getElementById("subscribe").addEventListener("click", function() {
//     console.log("test");
// });

// Query Selector
document.querySelector("#subscribe").addEventListener("click", function() {
    console.log("test");

    if(this.checked) {
        document.getElementById("emailDiv").style.display = "block";
    }
    else {
        document.getElementById("emailDiv").style.display = "none";
        console.log("else statement");
    }
})

// CHALLENGE 1 PART 2
document.addEventListener("click", function() {
    let currentTime = new Date();
    alert("Current time: " + currentTime);
})

// CHALLENGE 2
// See jsChallenge2.js

// CHALLENGE 3
document.querySelector("#submit").addEventListener("click", function() {

    let radio1 = document.querySelector("#standing");
    let radio2 = document.querySelector("#gradDate");

    if(radio1.checked || radio2.checked) {
        alert("You may proceed");
    }
    else {
        alert("You must select a choice from each set of radio buttons")
        return false;
    }
})

