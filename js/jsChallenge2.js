// CHALLENGE 2
// When the box is checked the “Billing Address” shows up in the “Home Address” field
// When the box is checked you can’t edit the “Home Address” field
// Fix the Accessibility Error on the page
document.querySelector("#sameAddress").addEventListener("click", function() {
    console.log(this.checked);

    bill = document.querySelector("#bill")
    home = document.querySelector("#home")
    console.log("Home value is " + home.value)
    console.log("Bill value is " + bill.value)

    if (this.checked) {
        home.value = bill.value;
        home.disabled = true;
    } else {
        home.value = "";
        home.disabled = false;
    }
  });


