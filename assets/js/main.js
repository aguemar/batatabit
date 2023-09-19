const table1 = document.getElementById("table1");
const table2 = document.getElementById("table2");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let activeTable = table1;

prevButton.addEventListener("click", () => {
  if (activeTable === table2) {
    table2.classList.remove("active");
    table1.classList.add("active");
    nextButton.classList.remove("disabled");
    prevButton.classList.add("disabled");
    activeTable = table1;
  }
});

nextButton.addEventListener("click", () => {
  if (activeTable === table1) {
    table1.classList.remove("active");
    table2.classList.add("active");
    prevButton.classList.remove("disabled");
    nextButton.classList.add("disabled");
    activeTable = table2;
  }
});
