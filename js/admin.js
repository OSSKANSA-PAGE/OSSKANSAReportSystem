let data = JSON.parse(localStorage.getItem("laporan")) || [];

const container = document.getElementById("daftarLaporan");

function render(){

container.innerHTML="";

document.getElementById("total").textContent=data.length;

document.getElementById("baru").textContent=
data.filter(l=>l.status==="Baru").length;

document.getElementById("proses").textContent=
data.filter(l=>l.status==="Diproses").length;

document.getElementById("selesai").textContent=
data.filter(l=>l.status==="Selesai").length;

data.forEach(l=>{

const card=document.createElement("div");

card.className="laporan-card";

card.innerHTML=`

<h3>${l.kategori}</h3>

<p>${l.isi}</p>

<p>Pelapor : ${l.nama}</p>

<p>Kelas : ${l.kelas}</p>

<p class="status ${l.status.toLowerCase()}">
Status : ${l.status}
</p>

<div class="action">

<button class="btn-proses"
onclick="proses(${l.id})">
Proses
</button>

<button class="btn-selesai"
onclick="selesai(${l.id})">
Selesai
</button>

<button class="btn-hapus"
onclick="hapus(${l.id})">
Hapus
</button>

</div>

`;

container.appendChild(card);

});

}

function proses(id){

data=data.map(l=>{
if(l.id===id) l.status="Diproses";
return l;
});

localStorage.setItem("laporan",JSON.stringify(data));

render();

}

function selesai(id){

data=data.map(l=>{
if(l.id===id) l.status="Selesai";
return l;
});

localStorage.setItem("laporan",JSON.stringify(data));

render();

}

function hapus(id){

data=data.filter(l=>l.id!==id);

localStorage.setItem("laporan",JSON.stringify(data));

render();

}
function logout(){

localStorage.removeItem("adminLogin")

window.location.href = "login.html"

}

document.getElementById("searchInput").addEventListener("input", function(){

let keyword = this.value.toLowerCase()

let rows = document.querySelectorAll("#daftarLaporan tr")

rows.forEach(row => {

let text = row.innerText.toLowerCase()

row.style.display = text.includes(keyword) ? "" : "none"

})

})
render();