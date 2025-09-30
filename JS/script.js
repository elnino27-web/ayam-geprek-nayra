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

  var r_nama = document.getElementById("r_nama").value;
  var r_nomor = document.getElementById("r_nomor").value;
  var r_jumlah = document.getElementById("r_jumlah").value;
  var r_meja = document.getElementById("r_meja").value;
  var r_waktu = document.getElementById("r_waktu").value;
  var r_tanggal = document.getElementById("r_tanggal").value;
  var r_catatan = document.getElementById("r_catatan").value;
  
  if (!r_nama || !r_nomor || !r_jumlah || !r_meja || !r_waktu || !r_tanggal || !r_catatan) {
    alert("Mohon isi semua data sebelum mengirim!");
    return;
  }

  var r_text = "Halo Kedai Nayra, saya " + r_nama + " (" + r_nomor + ")\nIngin melakukan reservasi tempat di Keday Nayra, berikut keterangan saya lampirkan:\n\n" + 
  "Jumlah Orang\t\t: " + r_jumlah + "\n" +
  "Tempat Pilihan\t\t: " + r_meja + "\n" +
  "Waktu Kedatangan\t: " + r_waktu + "\n" +
  "Tanggal Kedatangan\t: " + r_tanggal + "\n" +
  "Catatan Tambahan\t: " + r_catatan + "\n\n" +
  "Terima Kasih!";
  var r_url =
    "https://api.whatsapp.com/send?phone=6281242337310&text=" +
    encodeURIComponent(r_text);

  alert("Reservasi melalui WhatsApp");

  window.open(r_url, "_blank");
});

// Konek form kontak ke wa
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var c_nama = document.getElementById("c_nama").value;
  var c_nomor = document.getElementById("c_nomor").value;
  var c_alamat = document.getElementById("c_alamat").value;
  var c_waktu = document.getElementById("c_waktu").value;
  var c_pesanan = document.getElementById("c_pesanan").value;
  var c_tambahan = document.getElementById("c_tambahan").value;
  
  if (!c_nama || !c_nomor || !c_alamat || !c_waktu || !c_pesanan || !c_tambahan) {
    alert("Mohon isi semua data sebelum mengirim!");
    return;
  }

  var c_text = "Halo Kedai Nayra, saya " + c_nama + " (" + c_nomor + ")\nIngin melakukan pemesanan menu di Keday Nayra, berikut keterangan saya lampirkan:\n\n" + 
  "Alamat\t\t\t\t: " + c_alamat + "\n" +
  "Waktu Pengambilan\t: " + c_waktu + "\n" +
  "Pesanan\t\t\t\t: " + c_pesanan + "\n" +
  "Tambahan\t\t\t: " + c_tambahan + "\n\n" +
  "Terima Kasih!";
  var c_url =
    "https://api.whatsapp.com/send?phone=6281242337310&text=" +
    encodeURIComponent(c_text);

  alert("Kirim detail pesanan ke WhatsApp");

  window.open(c_url, "_blank");
});