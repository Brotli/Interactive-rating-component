let points = document.querySelector("ul.points");
let btn = document.querySelector("button.submit");
let selectedNumber;
let previousSelectedNumber;

points.addEventListener("click", checked);
btn.addEventListener("click", submit);

function checked(e) {
    if (e.target.tagName === "LI") {
        if (previousSelectedNumber) {
            previousSelectedNumber.classList.remove("checked", "nohover");
        }
        e.target.classList.add("checked", "nohover");
        selectedNumber = e.target.dataset.point;
        previousSelectedNumber = e.target;
    }
}

function submit(e) {
    if (selectedNumber) {
        document.querySelector(".selected_point").innerText = selectedNumber;
        document.querySelectorAll(".rating").forEach((e) => {e.classList.toggle("hidden")});
    }
}