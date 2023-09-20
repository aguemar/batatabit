// const prevButton = document.getElementById("prevButton");
// const nextButton = document.getElementById("nextButton");
// const tabla1 = document.getElementById("table1");
// const tabla2 = document.getElementById("table2");

// let currentTabla = 1;
// let mobile = window.innerWidth < 768;

// tabla1.style.display = "block";

// nextButton.addEventListener("click", () => {
//   if (currentTabla === 1 && mobile) {
//     tabla1.style.display = "none";
//     tabla2.style.display = "block";
//     prevButton.disabled = false;
//     nextButton.disabled = true;
//     currentTabla = 2;
//   }
// });

// prevButton.addEventListener("click", () => {
//   if (currentTabla === 2 && mobile) {
//     tabla2.style.display = "none";
//     tabla1.style.display = "block";
//     prevButton.disabled = true;
//     nextButton.disabled = false;
//     currentTabla = 1;
//   }
// });

const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const tabla1 = document.getElementById("table1");
const tabla2 = document.getElementById("table2");

let currentTabla = 1;
let mobile = window.innerWidth < 768;

tabla1.style.display = "block";

function mostrarTabla(numeroTabla) {
  if (numeroTabla === 1) {
    tabla1.style.display = "block";
    tabla2.style.display = "none";
    prevButton.disabled = true;
    nextButton.disabled = false;
  } else {
    tabla1.style.display = "none";
    tabla2.style.display = "block";
    prevButton.disabled = false;
    nextButton.disabled = true;
  }
  currentTabla = numeroTabla;
}

nextButton.addEventListener("click", () => {
  if (currentTabla === 1 && mobile) {
    mostrarTabla(2);
  }
});

prevButton.addEventListener("click", () => {
  if (currentTabla === 2 && mobile) {
    mostrarTabla(1);
  }
});

// Para manejar el caso de escritorio
if (!mobile) {
  prevButton.style.display = "none";
  nextButton.style.display = "none";
}
