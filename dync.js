const box = document.getElementById("box");
const colorPicker = document.getElementById("colorPicker");
const resetBtn = document.getElementById("resetBtn");

const defaultColor = "lightgray";

colorPicker.addEventListener("input", function () {
    box.style.backgroundColor = colorPicker.value;
});

resetBtn.addEventListener("click", function () {
    box.style.backgroundColor = defaultColor;
    colorPicker.value = "#d3d3d3";
});

