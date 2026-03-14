const form = document.getElementById("laporanForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const laporan = {

id: Date.now(),

nama: document.getElementById("nama").value || "Anonim",

kelas: document.getElementById("kelas").value,

kategori: document.getElementById("kategori").value,

isi: document.getElementById("isi").value,

status: "Baru"

};

let data = JSON.parse(localStorage.getItem("laporan")) || [];

data.push(laporan);

localStorage.setItem("laporan", JSON.stringify(data));

alert("Laporan berhasil dikirim!");

form.reset();

});