function selectRow() {
    var checkBoxes = document.getElementsByName("check");
    checkBoxes.forEach(check => {
        check.onclick = function () {
            if (this.checked) {
                check.parentElement.parentElement.classList.add("checked");
            } else {
                check.parentElement.parentElement.classList.remove("checked");
            }
        };
    });
}
selectRow();