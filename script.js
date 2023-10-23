let menuButton = document.querySelector(".kad-menu-button");
let navItems = document.querySelector(".kad-nav");
let barHide = document.querySelector(".kad-menu-bar-two");
let barLeft = document.querySelector(".kad-menu-bar-one");
let barRight = document.querySelector(".kad-menu-bar-three");

menuButton.addEventListener("click", openMenu);

function openMenu() {
  navItems.classList.toggle("toggle-kad-nav");
  barHide.classList.toggle("hide-bar-two");
  barLeft.classList.toggle("cross-bar-one");
  barRight.classList.toggle("cross-bar-three");
}

//form
function validateForm() {
  // Mengambil nilai dari inputan
  var nama = document.getElementById("Nama").value.trim();
  var email = document.getElementById("Email").value.trim();
  var pesan = document.getElementById("pesan").value.trim();
  var tujuan = document.getElementById("tujuan").value;

  // Mendapatkan elemen pesan kesalahan
  var namaError = document.getElementById("nama-error");
  var emailError = document.getElementById("email-error");
  var pesanError = document.getElementById("pesan-error");
  var tujuanError = document.getElementById("tujuanError");

  // Mengosongkan pesan kesalahan sebelum validasi
  namaError.textContent = "";
  emailError.textContent = "";
  pesanError.textContent = "";
  tujuanError.textContent = "";

  // Validasi Nama
  if (nama === "") {
    namaError.textContent = "Nama harus diisi.";
    return false;
  }

  // Validasi Email
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (email === "") {
    emailError.textContent = "Alamat Email harus diisi.";
    return false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Format Email tidak valid.";
    return false;
  }

  // Validasi Pesan
  if (pesan === "") {
    pesanError.textContent = "Pesan harus diisi.";
    return false;
  }

  // Validasi Tujuan
  if (tujuan === "") {
    tujuanError.textContent = "Tujuan harus dipilih.";
    return false;
  }

  // Jika semua validasi sukses
  return true;
}

AOS.init({
  duration: 1000,
  offset: 200,
  delay: 200, 
  easing: "ease-in-out", 
});



//autotype
