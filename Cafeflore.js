const form = document.getElementById("myForm");
const output = document.getElementById("output");
const displayDiv = document.getElementById("displayDiv");
const resetBtn = document.getElementById("resetBtn");

function submitValues(event) {
  event.preventDefault();

  displayDiv.style.display = "block";
  output.innerHTML = "Order Confirmed!";
}

form.addEventListener("submit", submitValues);

function resetValues() {
  output.innerHTML = "";
  displayDiv.style.display = "none";
}

resetBtn.addEventListener("click", resetValues);