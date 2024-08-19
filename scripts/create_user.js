const passwordField = document.querySelector("#pass")
const togglePassword = document.querySelector(".password-toggle-icon i");

togglePassword.addEventListener("click", function () {
    if (passwordField.type === "password") {
        passwordField.type = "text";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    }
});

function GetSelected() {
    //Create an Array.

    //Reference the Table.
    let tblassignments = document.getElementById("tblassignments");

    //Reference all the CheckBoxes in Table.
    let chks = tblassignments.getElementsByTagName("input");

    // Loop and push the checked CheckBox value in Array.
    for (let i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
            selected.push(chks[i].value);
        }
    }
};