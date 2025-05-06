function konversiSuhu() {
    // Ambil nilai suhu dari input
    const suhu = parseFloat(document.getElementById("inputSuhu").value);
    
    // Ambil satuan yang dipilih
    const satuan = document.getElementById("satuan").value;
  
    // Tempat untuk menyimpan hasil
    let hasil = "";
  
    // Periksa apakah inputnya angka
    if (isNaN(suhu)) {
      hasil = "Masukkan angka suhu yang benar!";
    } else {
      // Proses konversi berdasarkan satuan yang dipilih
      switch (satuan) {
        case "celcius":
          hasil = `
            Fahrenheit: ${(suhu * 9 / 5 + 32).toFixed(2)} °F<br>
            Kelvin: ${(suhu + 273.15).toFixed(2)} K<br>
            Reamur: ${(suhu * 4 / 5).toFixed(2)} °Re
          `;
          break;
        case "fahrenheit":
          hasil = `
            Celcius: ${((suhu - 32) * 5 / 9).toFixed(2)} °C<br>
            Kelvin: ${(((suhu - 32) * 5 / 9) + 273.15).toFixed(2)} K<br>
            Reamur: ${((suhu - 32) * 4 / 9).toFixed(2)} °Re
          `;
          break;
        case "kelvin":
          hasil = `
            Celcius: ${(suhu - 273.15).toFixed(2)} °C<br>
            Fahrenheit: ${(((suhu - 273.15) * 9 / 5) + 32).toFixed(2)} °F<br>
            Reamur: ${((suhu - 273.15) * 4 / 5).toFixed(2)} °Re
          `;
          break;
        case "reamur":
          hasil = `
            Celcius: ${(suhu * 5 / 4).toFixed(2)} °C<br>
            Fahrenheit: ${(suhu * 9 / 4 + 32).toFixed(2)} °F<br>
            Kelvin: ${(suhu * 5 / 4 + 273.15).toFixed(2)} K
          `;
          break;
      }
    }
  
    // Tampilkan hasil ke layar
    document.getElementById("hasil").innerHTML = hasil;
  }
  

  function konversiSuhu() {
    const suhu = parseFloat(document.getElementById("inputSuhu").value);
    const satuan = document.getElementById("satuan").value;
    let hasil = "";
  
    if (isNaN(suhu)) {
      hasil = "Masukkan angka suhu yang benar!";
    } else {
      switch (satuan) {
        case "celcius":
          hasil = `
            Fahrenheit: ${(suhu * 9 / 5 + 32).toFixed(2)} °F<br>
            Kelvin: ${(suhu + 273.15).toFixed(2)} K<br>
            Reamur: ${(suhu * 4 / 5).toFixed(2)} °Re
          `;
          break;
  
        case "fahrenheit":
          hasil = `
            Celcius: ${((suhu - 32) * 5 / 9).toFixed(2)} °C<br>
            Kelvin: ${(((suhu - 32) * 5 / 9) + 273.15).toFixed(2)} K<br>
            Reamur: ${((suhu - 32) * 4 / 9).toFixed(2)} °Re
          `;
          break;
  
        case "kelvin":
          const celciusDariKelvin = suhu - 273.15;
          hasil = `
            Celcius: ${celciusDariKelvin.toFixed(2)} °C<br>
            Fahrenheit: ${((celciusDariKelvin * 9 / 5) + 32).toFixed(2)} °F<br>
            Reamur: ${(celciusDariKelvin * 4 / 5).toFixed(2)} °Re
          `;
          break;
  
        case "reamur":
          const celciusDariReamur = suhu * 5 / 4;
          hasil = `
            Celcius: ${celciusDariReamur.toFixed(2)} °C<br>
            Fahrenheit: ${(celciusDariReamur * 9 / 5 + 32).toFixed(2)} °F<br>
            Kelvin: ${(celciusDariReamur + 273.15).toFixed(2)} K
          `;
          break;
    
// Siapkan data grafik
let hasilObj = {};
switch (satuan) {
  case "celcius":
    hasilObj = {
      "Fahrenheit": (suhu * 9 / 5 + 32).toFixed(2),
      "Kelvin": (suhu + 273.15).toFixed(2),
      "Reamur": (suhu * 4 / 5).toFixed(2)
    };
    break;
  case "fahrenheit":
    const c1 = (suhu - 32) * 5 / 9;
    hasilObj = {
      "Celcius": c1.toFixed(2),
      "Kelvin": (c1 + 273.15).toFixed(2),
      "Reamur": (c1 * 4 / 9).toFixed(2)
    };
    break;
  case "kelvin":
    const c2 = suhu - 273.15;
    hasilObj = {
      "Celcius": c2.toFixed(2),
      "Fahrenheit": ((c2 * 9 / 5 + 32).toFixed(2)),
      "Reamur": (c2 * 4 / 5).toFixed(2)
    };
    break;
  case "reamur":
    const c3 = suhu * 5 / 4;
    hasilObj = {
      "Celcius": c3.toFixed(2),
      "Fahrenheit": (c3 * 9 / 5 + 32).toFixed(2),
      "Kelvin": (c3 + 273.15).toFixed(2)
    };
    break;
}
updateGrafik(suhu, satuan, hasilObj);

      }
  
      // Tambahkan ke riwayat
      const riwayatItem = document.createElement("li");
      riwayatItem.innerHTML = `Suhu: ${suhu} (${satuan}) → <br>${hasil}`;
      document.getElementById("riwayat").appendChild(riwayatItem);
    }
  
    // Tampilkan hasil di layar
    document.getElementById("hasil").innerHTML = hasil;
  }
  
  // Fungsi reset input, hasil, dan riwayat
  function resetForm() {
    document.getElementById("inputSuhu").value = "";
    document.getElementById("satuan").value = "celcius";
    document.getElementById("hasil").innerHTML = "";
    document.getElementById("riwayat").innerHTML = "";
  }

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }
  
  // Data untuk grafik
  let chartData = null;
  
  // Tambahkan Chart.js
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/chart.js";
  document.head.appendChild(script);
  
  function updateGrafik(suhu, satuan, hasilObj) {
    const labels = Object.keys(hasilObj);
    const data = Object.values(hasilObj);
  
    const ctx = document.getElementById("grafikSuhu").getContext("2d");
  
    if (chartData) chartData.destroy();
  
    chartData = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [{
          label: `Hasil Konversi (${suhu} ${satuan})`,
          data: data,
          backgroundColor: ["#3498db", "#2ecc71", "#e74c3c", "#9b59b6"]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: { beginAtZero: false }
        }
      }
    });
  }
  
  // Fungsi untuk download riwayat
  function downloadRiwayat() {
    const riwayatList = document.getElementById("riwayat").innerText;
    const blob = new Blob([riwayatList], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "riwayat-konversi.txt";
    link.click();
  }
  