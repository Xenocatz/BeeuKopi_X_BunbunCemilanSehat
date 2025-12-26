const lokasiToko = [-6.4082755331461465, 106.74963790859596];

const map = L.map("map").setView(lokasiToko, 17);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const marker = L.marker(lokasiToko).addTo(map);

marker
  .bindPopup(
    "<b>Beuu kopi x Bunbun Cemilan Sehat</b><br>Vila Rizki Ilhami 2 Blok RA no. 18A, Pengasinan, Sawangan, Depok City, West Java 16518",
  )
  .openPopup();
