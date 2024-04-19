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