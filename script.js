//Toggle class active
const navbarNav = document.querySelector(".navbar-menu");
//ketika hamburger menu di klik
document.querySelector(".nav2").onclick = () => {
  navbarNav.classList.toggle("active");
};

// slider 2022-2023
const program = document.querySelector(".program-2022-2023");
const sliderRight = document.querySelector(".slider-right");
const sliderLeft = document.querySelector(".slider-left");
// ketika slider kiri di klik
sliderLeft.addEventListener("click", () => {
  program.scrollLeft -= 335;
});
// ketika slider kanan k=di klik
sliderRight.addEventListener("click", () => {
  program.scrollLeft += 335;
});

// slider 2023-2024
const program1 = document.querySelector(".program-2023-2024");
const sliderRight1 = document.querySelector(".slider-right");
const sliderLeft1 = document.querySelector(".slider-left");
// ketika slider kiri di klik
sliderLeft.addEventListener("click", () => {
  program1.scrollLeft -= 335;
});
// ketika slider kanan k=di klik
sliderRight.addEventListener("click", () => {
  program1.scrollLeft += 335;
});

// slider 2023-2024
const program2 = document.querySelector(".program-2024-2025");
const sliderRight2 = document.querySelector(".slider-right");
const sliderLeft2 = document.querySelector(".slider-left");
// ketika slider kiri di klik
sliderLeft.addEventListener("click", () => {
  program2.scrollLeft -= 335;
});
// ketika slider kanan k=di klik
sliderRight.addEventListener("click", () => {
  program2.scrollLeft += 335;
});

// memilih box berdasarkan dropdown profil
document.querySelector("#tahun").addEventListener("change", function () {
  // Sembunyikan semua program
  document.querySelector(".program-2022-2023").classList.remove("active");
  document.querySelector(".program-2023-2024").classList.remove("active");
  document.querySelector(".program-2024-2025").classList.remove("active");

  // Ambil nilai dropdown yang dipilih
  const selectedYear = this.value;

  // Tampilkan program sesuai tahun yang dipilih
  if (selectedYear === "2022/2023") {
    document.querySelector(".program-2022-2023").classList.add("active");
  } else if (selectedYear === "2023/2024") {
    document.querySelector(".program-2023-2024").classList.add("active");
  } else if (selectedYear === "2024/2025") {
    document.querySelector(".program-2024-2025").classList.add("active");
  }
});

//ketika dibuka profil maka box 2024/2025 langsung terlihat
document.querySelector(".program-2024-2025").classList.add("active");
