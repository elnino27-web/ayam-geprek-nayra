// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  navbarNav.focus();
  e.preventDefault();
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector ('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})

// Konek form reservasi ke wa
document.getElementById("reservationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var nama = document.getElementById("nama").value;
  var nomor = document.getElementById("nomor").value;
  var jumlah = document.getElementById("jumlah").value;
  var meja = document.getElementById("meja").value;
  var waktu = document.getElementById("waktu").value;
  var tanggal = document.getElementById("tanggal").value;
  var catatan = document.getElementById("catatan").value;
  
  if (!nama || !nomor || !jumlah || !meja || !waktu || !tanggal || !catatan) {
    alert("Mohon isi semua data sebelum mengirim!");
    return;
  }

  var text = "Halo Kedai Nayra, saya " + nama + " (" + nomor + ")\nIngin melakukan reservasi tempat di Keday Nayra, berikut keterangan saya lampirkan:\n\n" + 
  "Jumlah Orang\t\t: " + jumlah + "\n" +
  "Tempat Pilihan\t\t: " + meja + "\n" +
  "Waktu Kedatangan\t: " + waktu + "\n" +
  "Tanggal Kedatangan\t: " + tanggal + "\n" +
  "Catatan Tambahan\t: " + catatan + "\n\n" +
  "Terima Kasih!";
  var url =
    "https://api.whatsapp.com/send?phone=6281242337310&text=" +
    encodeURIComponent(text);

  alert("Reservasi melalui WhatsApp");

  window.open(url, "_blank");
});

