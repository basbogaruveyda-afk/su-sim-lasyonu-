// ==============================================================================
// 1. EMBEDDED FALLBACK DATASET (For offline file:// access)
// ==============================================================================
const EMBEDDED_NATIONAL_POP = [
  { "yil": 2007, "nufus": 70586256 },
  { "yil": 2008, "nufus": 71517100 },
  { "yil": 2009, "nufus": 72561312 },
  { "yil": 2010, "nufus": 73722988 },
  { "yil": 2011, "nufus": 74724269 },
  { "yil": 2012, "nufus": 75627384 },
  { "yil": 2013, "nufus": 76667864 },
  { "yil": 2014, "nufus": 77695904 },
  { "yil": 2015, "nufus": 78741053 },
  { "yil": 2016, "nufus": 79814871 },
  { "yil": 2017, "nufus": 80810525 },
  { "yil": 2018, "nufus": 82003882 },
  { "yil": 2019, "nufus": 83154997 },
  { "yil": 2020, "nufus": 83614362 },
  { "yil": 2021, "nufus": 84680273 },
  { "yil": 2022, "nufus": 85279553 },
  { "yil": 2023, "nufus": 85372377 },
  { "yil": 2024, "nufus": 85664944 },
  { "yil": 2025, "nufus": 86092168 }
];

const EMBEDDED_SOURCES = [
  { "tur": "Baraj", "miktar": 2974215.066 },
  { "tur": "Kuyu", "miktar": 2228032.607 },
  { "tur": "Kaynak", "miktar": 1256417.284 },
  { "tur": "Akarsu", "miktar": 716517.513 },
  { "tur": "Göl / Gölet / Deniz", "miktar": 292697.263 }
];

const EMBEDDED_CITIES = {
  "İstanbul": [
    { "yil": 2007, "nufus": 12573836 },
    { "yil": 2008, "nufus": 12697164 },
    { "yil": 2009, "nufus": 12915158 },
    { "yil": 2010, "nufus": 13255685 },
    { "yil": 2011, "nufus": 13624240 },
    { "yil": 2012, "nufus": 13854740 },
    { "yil": 2013, "nufus": 14160467 },
    { "yil": 2014, "nufus": 14377018 },
    { "yil": 2015, "nufus": 14657434 },
    { "yil": 2016, "nufus": 14804116 },
    { "yil": 2017, "nufus": 15029231 },
    { "yil": 2018, "nufus": 15067724 },
    { "yil": 2019, "nufus": 15519267 },
    { "yil": 2020, "nufus": 15462452 },
    { "yil": 2021, "nufus": 15840900 },
    { "yil": 2022, "nufus": 15907951 },
    { "yil": 2023, "nufus": 15655924 },
    { "yil": 2024, "nufus": 15701602 },
    { "yil": 2025, "nufus": 15754053 }
  ],
  "Ankara": [
    { "yil": 2007, "nufus": 4466756 },
    { "yil": 2008, "nufus": 4548939 },
    { "yil": 2009, "nufus": 4650802 },
    { "yil": 2010, "nufus": 4771716 },
    { "yil": 2011, "nufus": 4890893 },
    { "yil": 2012, "nufus": 4965542 },
    { "yil": 2013, "nufus": 5045083 },
    { "yil": 2014, "nufus": 5150072 },
    { "yil": 2015, "nufus": 5270575 },
    { "yil": 2016, "nufus": 5346518 },
    { "yil": 2017, "nufus": 5445026 },
    { "yil": 2018, "nufus": 5503985 },
    { "yil": 2019, "nufus": 5639076 },
    { "yil": 2020, "nufus": 5663322 },
    { "yil": 2021, "nufus": 5747325 },
    { "yil": 2022, "nufus": 5782285 },
    { "yil": 2023, "nufus": 5803482 },
    { "yil": 2024, "nufus": 5864049 },
    { "yil": 2025, "nufus": 5910320 }
  ],
  "İzmir": [
    { "yil": 2007, "nufus": 3739353 },
    { "yil": 2008, "nufus": 3795978 },
    { "yil": 2009, "nufus": 3868308 },
    { "yil": 2010, "nufus": 3948848 },
    { "yil": 2011, "nufus": 3965232 },
    { "yil": 2012, "nufus": 4005459 },
    { "yil": 2013, "nufus": 4061074 },
    { "yil": 2014, "nufus": 4113072 },
    { "yil": 2015, "nufus": 4168415 },
    { "yil": 2016, "nufus": 4223545 },
    { "yil": 2017, "nufus": 4279677 },
    { "yil": 2018, "nufus": 4320519 },
    { "yil": 2019, "nufus": 4367251 },
    { "yil": 2020, "nufus": 4394694 },
    { "yil": 2021, "nufus": 4425789 },
    { "yil": 2022, "nufus": 4462056 },
    { "yil": 2023, "nufus": 4479525 },
    { "yil": 2024, "nufus": 4493242 },
    { "yil": 2025, "nufus": 4504185 }
  ],
  "Bursa": [
    { "yil": 2007, "nufus": 2439876 },
    { "yil": 2008, "nufus": 2507963 },
    { "yil": 2009, "nufus": 2550645 },
    { "yil": 2010, "nufus": 2605495 },
    { "yil": 2011, "nufus": 2652126 },
    { "yil": 2012, "nufus": 2688171 },
    { "yil": 2013, "nufus": 2740970 },
    { "yil": 2014, "nufus": 2787539 },
    { "yil": 2015, "nufus": 2842547 },
    { "yil": 2016, "nufus": 2901396 },
    { "yil": 2017, "nufus": 2936803 },
    { "yil": 2018, "nufus": 2994521 },
    { "yil": 2019, "nufus": 3056120 },
    { "yil": 2020, "nufus": 3101833 },
    { "yil": 2021, "nufus": 3147818 },
    { "yil": 2022, "nufus": 3194720 },
    { "yil": 2023, "nufus": 3214571 },
    { "yil": 2024, "nufus": 3238618 },
    { "yil": 2025, "nufus": 3263011 }
  ],
  "Antalya": [
    { "yil": 2007, "nufus": 1789295 },
    { "yil": 2008, "nufus": 1859275 },
    { "yil": 2009, "nufus": 1919729 },
    { "yil": 2010, "nufus": 1978333 },
    { "yil": 2011, "nufus": 2043482 },
    { "yil": 2012, "nufus": 2092537 },
    { "yil": 2013, "nufus": 2158265 },
    { "yil": 2014, "nufus": 2222562 },
    { "yil": 2015, "nufus": 2288456 },
    { "yil": 2016, "nufus": 2328555 },
    { "yil": 2017, "nufus": 2364396 },
    { "yil": 2018, "nufus": 2426356 },
    { "yil": 2019, "nufus": 2511700 },
    { "yil": 2020, "nufus": 2548308 },
    { "yil": 2021, "nufus": 2619832 },
    { "yil": 2022, "nufus": 2688004 },
    { "yil": 2023, "nufus": 2696249 },
    { "yil": 2024, "nufus": 2722103 },
    { "yil": 2025, "nufus": 2777677 }
  ]
};

// ==============================================================================
// 2. DİNAMİK VERİ YÜKLEME VE TÜRKÇE ONDALIK PARSER'I
// ==============================================================================
let appData = {
  nufusHistory: EMBEDDED_NATIONAL_POP,
  waterSources: EMBEDDED_SOURCES,
  provinceNufus: EMBEDDED_CITIES,
  kisiBasiSuLitre: 254.80,
  yillikTatliSuM3: 9218055.83 * 1000, // 9.21 Milyar m3
  baslangicNufus: 86092168,
  provincesList: ["Toplam", "İstanbul", "Ankara", "İzmir", "Bursa", "Antalya"]
};

// Yardımcı Fonksiyon: Türkçe sayı formatını JS Float'ına çevirir
function parseTurkishFloat(val) {
  if (val === undefined || val === null || val === '') return 0.0;
  let s = String(val).trim().replace(/,/g, '.');
  let num = parseFloat(s);
  return isNaN(num) ? 0.0 : num;
}

// Asenkron CSV Yükleme Akışı
async function loadCSVData() {
  try {
    const urls = {
      nufus: "Nüfus, Yıllık Nüfus Artış Hızı, İl, İlçe, Belde Belediyesi, Köy Sayısı ve Nüfus Yoğunluğu (TR,DF_ADNKS_T17,1.1).csv",
      il_nufus: "Yıllara Göre İl Nüfusları (TR,DF_ADNKS_T30,1.1).csv",
      su_gosterge: "Belediye Su Göstergeleri (TR,DF_SU_ATIKSU_BELEDIYE_GOSTERGE_V1,1.0).csv",
      dogal_kaynak: "Doğal Kaynaklardan Çekilen Su Miktarı (TR,DF_SU_ATIKSU_DOGAL_KAYNAK_CEKILEN_MIKTAR_V1,1.0).csv"
    };

    // Her CSV dosyasını fetch et
    const [resNufus, resIlNufus, resSu, resDogal] = await Promise.all([
      fetch(urls.nufus).then(r => { if(!r.ok) throw new Error(); return r.text(); }),
      fetch(urls.il_nufus).then(r => { if(!r.ok) throw new Error(); return r.text(); }),
      fetch(urls.su_gosterge).then(r => { if(!r.ok) throw new Error(); return r.text(); }),
      fetch(urls.dogal_kaynak).then(r => { if(!r.ok) throw new Error(); return r.text(); })
    ]);

    // PapaParse ile ayrıştır
    const parsedNufus = Papa.parse(resNufus, { header: true, delimiter: ";" }).data;
    const parsedIlNufus = Papa.parse(resIlNufus, { header: true, delimiter: ";" }).data;
    const parsedSu = Papa.parse(resSu, { header: true, delimiter: ";" }).data;
    const parsedDogal = Papa.parse(resDogal, { header: true, delimiter: ";" }).data;

    // 1. Nüfus Geçmişi
    const popHistory = parsedNufus
      .filter(r => r.ADNKS_GOSTERGE === 'NUFUS')
      .map(r => ({
        yil: parseInt(r['Zaman (TIME_PERIOD)']),
        nufus: parseTurkishFloat(r['Gözlem'])
      }))
      .filter(r => !isNaN(r.yil))
      .sort((a, b) => a.yil - b.yil);
    
    if (popHistory.length > 0) {
      appData.nufusHistory = popHistory;
      appData.baslangicNufus = popHistory[popHistory.length - 1].nufus;
    }

    // 2. Kişi Başı Tüketim (BELEDIYE_NITELIK_SU == 11)
    const pcRow = parsedSu.find(r => r.BELEDIYE_NITELIK_SU === '11');
    if (pcRow) {
      appData.kisiBasiSuLitre = parseTurkishFloat(pcRow['Gözlem']);
    }

    // 3. Su kaynakları baraj/kuyu dağılımı (BELEDIYE_NITELIK_SU == 22, kaynak türü Toplam değilse)
    const sources = parsedSu
      .filter(r => r.BELEDIYE_NITELIK_SU === '22' && r['Su Kaynak Türü'] !== 'Toplam')
      .map(r => ({
        tur: r['Su Kaynak Türü'],
        miktar: parseTurkishFloat(r['Gözlem'])
      }));
    if (sources.length > 0) {
      appData.waterSources = sources;
    }

    // 4. Doğal kaynaklardan tatlı su çekimi (SU_TEMIN_TURU == '1_1' ve Zaman == 2024)
    const dkRow = parsedDogal.find(r => r.SU_TEMIN_TURU === '1_1' && r['Zaman (TIME_PERIOD)'] === '2024');
    if (dkRow) {
      appData.yillikTatliSuM3 = parseTurkishFloat(dkRow['Gözlem']) * 1000;
    }

    // 5. İl nüfuslarının gruplanarak JS nesnesine dönüştürülmesi
    let citiesData = {};
    parsedIlNufus.forEach(r => {
      let city = r['İkamet edilen yer'];
      let yil = parseInt(r['Zaman (TIME_PERIOD)']);
      let nuf = parseTurkishFloat(r['Gözlem']);
      if (city && !isNaN(yil)) {
        if (!citiesData[city]) citiesData[city] = [];
        citiesData[city].push({ yil: yil, nufus: nuf });
      }
    });

    // Her şehri kendi içinde yıla göre sırala
    Object.keys(citiesData).forEach(city => {
      citiesData[city].sort((a, b) => a.yil - b.yil);
    });

    if (Object.keys(citiesData).length > 0) {
      appData.provinceNufus = citiesData;
      appData.provincesList = Object.keys(citiesData).sort((a,b) => a.localeCompare(b, 'tr'));
    }

    console.log("CSV verileri başarıyla indirildi ve işlendi.");
    populateProvinceDropdown();
  } catch (error) {
    // CORS/Local File Hatası Durumunda Fallback Uyarısını Göster
    console.warn("CORS veya ağ hatası algılandı. Gömülü yerel veri seti yükleniyor.");
    document.getElementById("fallbackAlert").classList.remove("hidden");
    populateProvinceDropdown();
  }
}

// İl Seçim Açılır Menüsünü Doldurur
function populateProvinceDropdown() {
  const select = document.getElementById("ilSecim");
  select.innerHTML = "";
  
  // Önce Toplam seçeneğini ekle
  let optTotal = document.createElement("option");
  optTotal.value = "Toplam";
  optTotal.textContent = "Türkiye Toplam";
  select.appendChild(optTotal);

  // Diğer illeri ekle
  appData.provincesList.forEach(prov => {
    if (prov !== "Toplam" && prov !== "_T") {
      let opt = document.createElement("option");
      opt.value = prov;
      opt.textContent = prov;
      select.appendChild(opt);
    }
  });
}

// ==============================================================================
// 3. SİMÜLASYON MOTORU (MATEMATİKSEL PROJEKSİYON)
// ==============================================================================
function getSimulationYears(targetYear) {
  let years = [];
  for (let y = 2026; y <= targetYear; y++) {
    years.push(y);
  }
  return years;
}

function runScenario(nufusArtis, yagisEtkisi, kacakOrani, tasarrufOrani, rezervKatsayisi, years) {
  let rezerv = appData.yillikTatliSuM3 * rezervKatsayisi;
  let nufus = appData.baslangicNufus;
  let records = [];

  years.forEach(yil => {
    let giren = appData.yillikTatliSuM3 * (1 + yagisEtkisi);
    let temel = nufus * (appData.kisiBasiSuLitre / 1000) * 365 * (1 - tasarrufOrani);
    let kacak = temel * kacakOrani;
    let toplamTuketim = temel + kacak;

    rezerv = rezerv + giren - toplamTuketim;
    rezerv = Math.max(0, rezerv);

    records.push({
      yil: yil,
      nufus: Math.round(nufus),
      rezerv: rezerv,
      tuketim: temel,
      kacak: kacak,
      girdi: giren
    });

    nufus *= (1 + nufusArtis);
  });

  return records;
}

// ==============================================================================
// 4. CHART.JS GRAFİK YAPILANDIRMALARI
// ==============================================================================
let projectionChart = null;
let tuikNufusChart = null;
let tuikKaynakChart = null;
let ilNufusChart = null;

// Neon Görünümlü 10 Yıllık Simülasyon Çizgi Grafiği
function initProjectionChart(labels, userRezerv, iyimserRezerv, kotumserRezerv) {
  const ctx = document.getElementById("projectionChart").getContext("2d");
  
  if (projectionChart) {
    projectionChart.destroy();
  }

  projectionChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Sizin Parametreleriniz (Aktif)',
          data: userRezerv.map(v => v / 1e6),
          borderColor: '#00c6ff',
          backgroundColor: 'rgba(0, 198, 255, 0.1)',
          borderWidth: 4,
          pointBackgroundColor: '#00c6ff',
          pointRadius: 5,
          tension: 0.35,
          fill: true
        },
        {
          label: 'İyimser Senaryo (Düşük Kaçak + Tasarruf)',
          data: iyimserRezerv.map(v => v / 1e6),
          borderColor: '#10b981',
          borderWidth: 2.5,
          borderDash: [6, 6],
          pointRadius: 0,
          tension: 0.35,
          fill: false
        },
        {
          label: 'Kötümser Senaryo (Kuraklık + Sıfır Önlem)',
          data: kotumserRezerv.map(v => v / 1e6),
          borderColor: '#ef4444',
          borderWidth: 2.5,
          borderDash: [3, 3],
          pointRadius: 0,
          tension: 0.35,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: '#f3f4f6', font: { family: 'Outfit', size: 12 } }
        },
        tooltip: {
          backgroundColor: '#111827',
          titleFont: { family: 'Outfit', size: 14, weight: 'bold' },
          bodyFont: { family: 'Outfit', size: 12 },
          borderColor: 'rgba(255, 255, 255, 0.1)',
          borderWidth: 1
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          ticks: { color: '#9ca3af', font: { family: 'Outfit' } }
        },
        y: {
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          ticks: { color: '#9ca3af', font: { family: 'Outfit' } },
          title: {
            display: true,
            text: 'Rezerv Kapasitesi (Milyon m³)',
            color: '#9ca3af',
            font: { family: 'Outfit', size: 12 }
          }
        }
      }
    }
  });
}

// Tarihsel Türkiye Nüfus Grafiği
function drawTuikNufusChart() {
  const ctx = document.getElementById("tuikNufusChart").getContext("2d");
  const data = appData.nufusHistory;
  
  if (tuikNufusChart) {
    tuikNufusChart.destroy();
  }

  tuikNufusChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.map(d => d.yil),
      datasets: [{
        label: 'Türkiye Nüfusu',
        data: data.map(d => d.nufus),
        borderColor: '#00c6ff',
        backgroundColor: 'rgba(0, 198, 255, 0.05)',
        borderWidth: 3,
        pointBackgroundColor: '#00c6ff',
        tension: 0.1,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#111827',
          callbacks: {
            label: (ctx) => ` Nüfus: ${ctx.raw.toLocaleString('tr-TR')}`
          }
        }
      },
      scales: {
        x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#9ca3af', font: { family: 'Outfit' } } },
        y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#9ca3af', font: { family: 'Outfit' } } }
      }
    }
  });
}

// Belediye Su Kaynak Dağılımı (Daire/Pie Grafik)
function drawTuikKaynakChart() {
  const ctx = document.getElementById("tuikKaynakChart").getContext("2d");
  const data = appData.waterSources;
  
  if (tuikKaynakChart) {
    tuikKaynakChart.destroy();
  }

  tuikKaynakChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: data.map(d => d.tur),
      datasets: [{
        data: data.map(d => d.miktar),
        backgroundColor: [
          '#1e3a8a', // Koyu Mavi
          '#2563eb', // Orta Mavi
          '#3b82f6', // Açık Mavi
          '#60a5fa', // Gökyüzü Mavisi
          '#93c5fd'  // Çok Açık Mavi
        ],
        borderWidth: 2,
        borderColor: '#111827'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: { color: '#f3f4f6', font: { family: 'Outfit', size: 11 } }
        }
      }
    }
  });
}

// Seçilen İl Nüfus Trend Bar Grafiği
function drawIlNufusChart(ilAdi) {
  const ctx = document.getElementById("ilNufusChart").getContext("2d");
  
  let records = [];
  if (ilAdi === "Toplam") {
    records = appData.nufusHistory;
  } else {
    records = appData.provinceNufus[ilAdi] || [];
  }

  if (ilNufusChart) {
    ilNufusChart.destroy();
  }

  ilNufusChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: records.map(r => r.yil),
      datasets: [{
        label: `${ilAdi} Nüfus Trendi`,
        data: records.map(r => r.nufus),
        backgroundColor: '#0072ff',
        borderRadius: 5,
        hoverBackgroundColor: '#00c6ff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#111827',
          callbacks: {
            label: (ctx) => ` Nüfus: ${ctx.raw.toLocaleString('tr-TR')}`
          }
        }
      },
      scales: {
        x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#9ca3af', font: { family: 'Outfit' } } },
        y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#9ca3af', font: { family: 'Outfit' } } }
      }
    }
  });
}

// ==============================================================================
// 5. ETKİLEŞİM VE GÜNCELLEME DÖNGÜSÜ (CORE EVENTS)
// ==============================================================================
function updateSimulation() {
  // A. Slider Değerlerini Oku
  const nufusArtis = parseFloat(document.getElementById("nufusArtis").value) / 100;
  const yagisEtkisi = parseFloat(document.getElementById("yagisEtkisi").value) / 100;
  const kacakSu = parseFloat(document.getElementById("kacakSu").value) / 100;
  const tasarrufOrani = parseFloat(document.getElementById("tasarrufOrani").value) / 100;
  const rezervKatsayi = parseFloat(document.getElementById("rezervKatsayi").value);

  // Projeksiyon Yılını Oku ve Yıl Dizisini Al
  const targetYear = parseInt(document.getElementById("projeksiyonYili").value) || 2035;
  const simulationYears = getSimulationYears(targetYear);
  const diffYears = targetYear - 2026 + 1;

  // B. Aktif Politikaların Etkilerini Dahil Et
  let polNufus = nufusArtis;
  let polYagis = yagisEtkisi;
  let polKacak = kacakSu;
  let polTasarruf = tasarrufOrani;

  if (document.getElementById("policyAltyapi").checked) {
    polKacak = 0.15; // Kaçak %15'e iner
  }
  if (document.getElementById("policyTarim").checked) {
    polYagis += 0.20; // Doğal girdi verimliliği %20 artar
  }
  if (document.getElementById("policySayac").checked) {
    polTasarruf += 0.10; // Bireysel tasarrufa +%10
  }
  if (document.getElementById("policyEgitim").checked) {
    polTasarruf += 0.05; // Bireysel tasarrufa +%5
  }

  // C. Senaryoları Çalıştır
  const userResults = runScenario(polNufus, polYagis, polKacak, polTasarruf, rezervKatsayi, simulationYears);
  const kotumserResults = runScenario(0.015, -0.30, 0.40, 0.0, rezervKatsayi, simulationYears);
  const iyimserResults = runScenario(0.008, 0.0, 0.15, 0.20, rezervKatsayi, simulationYears);

  // D. Arayüz Elementlerini Güncelle
  const finalYearData = userResults[userResults.length - 1];
  const startRezerv = appData.yillikTatliSuM3 * rezervKatsayi;
  const degisimOrani = ((finalYearData.rezerv - startRezerv) / startRezerv) * 100;

  // Yıl etiketlerini güncelle
  document.getElementById("nufusTargetYear").textContent = targetYear;
  document.getElementById("rezervTargetYear").textContent = targetYear;

  document.getElementById("metricNufus").textContent = finalYearData.nufus.toLocaleString('tr-TR');
  document.getElementById("metricKisiBasi").textContent = `${appData.kisiBasiSuLitre.toFixed(1)} L`;
  document.getElementById("metricRezerv").textContent = `${(finalYearData.rezerv / 1e9).toFixed(2)} Milyar m³`;

  const rezervLabel = document.getElementById("metricRezervLabel");
  if (finalYearData.rezerv === 0) {
    rezervLabel.textContent = "Tükendi!";
    rezervLabel.style.color = "var(--accent-red)";
  } else {
    rezervLabel.textContent = `Değişim: ${degisimOrani >= 0 ? '+' : ''}${degisimOrani.toFixed(1)}%`;
    rezervLabel.style.color = degisimOrani >= 0 ? "var(--accent-green)" : "var(--accent-orange)";
  }

  // Durum Bannerını Güncelle
  const statusCard = document.getElementById("policyStatusCard");
  const statusText = document.getElementById("policyStatusText");

  statusCard.className = "metric-card policy-summary-card"; // Reset classes

  if (finalYearData.rezerv === 0) {
    statusCard.classList.add("status-danger");
    statusText.innerHTML = `<span style="color:var(--accent-red)">🚨 KRİTİK SEVİYE</span><br><small style="font-size:0.75rem;color:var(--text-muted)">Su kaynakları ${diffYears} yıl içinde tamamen tükeniyor. Acil önlem şart!</small>`;
  } else if (degisimOrani < -20) {
    statusCard.classList.add("status-warning");
    statusText.innerHTML = `<span style="color:var(--accent-orange)">⚠️ RİSK SEVİYESİ</span><br><small style="font-size:0.75rem;color:var(--text-muted)">Rezervler %20'den fazla azaldı. Şebeke kaçakları çözülmeli.</small>`;
  } else {
    statusCard.classList.add("status-green");
    statusText.innerHTML = `<span style="color:var(--accent-green)">✅ SÜRDÜRÜLEBİLİR</span><br><small style="font-size:0.75rem;color:var(--text-muted)">Rezerv seviyesi güvenli bölgede kalmaya devam ediyor.</small>`;
  }

  // E. HESAPLAMA ŞEFFAFLIĞI (KÜMÜLATİF VERİLER)
  let totalGirdi = 0;
  let totalTuketimNet = 0;
  let totalKacak = 0;

  userResults.forEach(r => {
    totalGirdi += r.girdi;
    totalTuketimNet += r.tuketim;
    totalKacak += r.kacak;
  });
  const totalCekilen = totalTuketimNet + totalKacak;

  document.getElementById("transStartRezerv").textContent = `${(startRezerv / 1e9).toFixed(3)} Milyar m³`;
  document.getElementById("transTotalGirdi").textContent = `${(totalGirdi / 1e9).toFixed(3)} Milyar m³`;
  document.getElementById("transTotalTuketim").textContent = `${(totalTuketimNet / 1e9).toFixed(3)} Milyar m³`;
  document.getElementById("transTotalKacak").textContent = `${(totalKacak / 1e9).toFixed(3)} Milyar m³`;
  document.getElementById("transTotalCekilen").textContent = `${(totalCekilen / 1e9).toFixed(3)} Milyar m³`;
  document.getElementById("transRemainingRezerv").textContent = `${(finalYearData.rezerv / 1e9).toFixed(3)} Milyar m³`;

  // F. TÜKENME TAHMİNİ
  let criticalYear = null;
  let depletionYear = null;

  for (let i = 0; i < userResults.length; i++) {
    const r = userResults[i];
    if (criticalYear === null && r.rezerv < 0.20 * startRezerv) {
      criticalYear = r.yil;
    }
    if (depletionYear === null && r.rezerv === 0) {
      depletionYear = r.yil;
    }
  }

  document.getElementById("criticalThresholdYear").textContent = criticalYear ? criticalYear : "Tehlike Yok";
  document.getElementById("depletionYear").textContent = depletionYear ? depletionYear : "Tehlike Yok";

  // G. SU STRESİ GÖSTERGESİ
  const ratio = finalYearData.rezerv / startRezerv;
  const stressBadge = document.getElementById("stressBadge");
  stressBadge.className = "stress-badge"; // Reset classes

  if (depletionYear !== null || ratio < 0.15) {
    stressBadge.textContent = "Kritik Risk";
    stressBadge.classList.add("critical-risk");
  } else if (ratio < 0.50) {
    stressBadge.textContent = "Yüksek Risk";
    stressBadge.classList.add("high-risk");
  } else if (ratio < 0.80) {
    stressBadge.textContent = "Orta Risk";
    stressBadge.classList.add("medium-risk");
  } else {
    stressBadge.textContent = "Düşük Risk";
    stressBadge.classList.add("low-risk");
  }

  // H. POLİTİKA ÖNERİLERİ
  const recContainer = document.getElementById("dynamicRecommendations");
  recContainer.innerHTML = ""; // Clear

  // 1. Altyapı Kaçak Önerisi
  let leakHtml = "";
  const activeLeakPercent = Math.round(polKacak * 100);
  if (activeLeakPercent > 20) {
    const recResultsLeakage = runScenario(polNufus, polYagis, 0.20, polTasarruf, rezervKatsayi, simulationYears);
    const leakageFinal = recResultsLeakage[recResultsLeakage.length - 1].rezerv;
    
    if (finalYearData.rezerv > 0) {
      const gainPercent = ((leakageFinal - finalYearData.rezerv) / finalYearData.rezerv) * 100;
      leakHtml = `
        <div class="rec-item rec-warning">
          <div class="rec-icon"><i data-lucide="wrench" style="color:var(--accent-orange)"></i></div>
          <div class="rec-text">
            <strong>Altyapı Rehabilitasyonu Önerisi</strong>
            Şebeke kaçak su oranı mevcut %${activeLeakPercent}'den %20'ye düşürülürse, projeksiyon sonu kalan su rezervi <strong>%${gainPercent.toFixed(1)}</strong> oranında artabilir.
          </div>
        </div>`;
    } else {
      const gainVol = (leakageFinal / 1e9).toFixed(3);
      leakHtml = `
        <div class="rec-item rec-danger">
          <div class="rec-icon"><i data-lucide="wrench" style="color:var(--accent-red)"></i></div>
          <div class="rec-text">
            <strong>Altyapı Rehabilitasyonu Önerisi</strong>
            Şebeke kaçak su oranı %20 seviyesine düşürülürse, tükenme riski hafifleyecek ve projeksiyon sonunda ek <strong>${gainVol} Milyar m³</strong> su kaynağı korunmuş olacaktır.
          </div>
        </div>`;
    }
  } else {
    leakHtml = `
      <div class="rec-item rec-success">
        <div class="rec-icon"><i data-lucide="check-circle-2" style="color:var(--accent-green)"></i></div>
        <div class="rec-text">
          <strong>Altyapı Durumu: Optimize</strong>
          Mevcut altyapı kayıp-kaçak oranınız (%${activeLeakPercent}) zaten sürdürülebilir hedef limit olan %20'nin altındadır.
        </div>
      </div>`;
  }

  // 2. Tasarruf Önerisi
  let savingsHtml = "";
  const activeTasarrufPercent = Math.round(polTasarruf * 100);
  const recResultsSavings = runScenario(polNufus, polYagis, polKacak, polTasarruf + 0.10, rezervKatsayi, simulationYears);
  const savingsFinal = recResultsSavings[recResultsSavings.length - 1].rezerv;

  // Check depletion years
  let activeDepletionYear = null;
  let savingsDepletionYear = null;
  for (let i = 0; i < simulationYears.length; i++) {
    if (activeDepletionYear === null && userResults[i].rezerv === 0) activeDepletionYear = userResults[i].yil;
    if (recResultsSavings[i].rezerv === 0) savingsDepletionYear = recResultsSavings[i].yil;
  }

  if (activeDepletionYear !== null) {
    if (savingsDepletionYear === null) {
      savingsHtml = `
        <div class="rec-item rec-danger">
          <div class="rec-icon"><i data-lucide="sparkles" style="color:var(--accent-red)"></i></div>
          <div class="rec-text">
            <strong>Tasarruf Seferberliği Önerisi</strong>
            Kullanıcı tasarruf oranı %10 artırılırsa (%${activeTasarrufPercent} ➔ %${activeTasarrufPercent + 10}), su rezervlerinin <strong>tükenme riski tamamen önlenebilir!</strong>
          </div>
        </div>`;
    } else {
      const delay = savingsDepletionYear - activeDepletionYear;
      if (delay > 0) {
        savingsHtml = `
          <div class="rec-item rec-warning">
            <div class="rec-icon"><i data-lucide="sparkles" style="color:var(--accent-orange)"></i></div>
            <div class="rec-text">
              <strong>Tasarruf Seferberliği Önerisi</strong>
              Tasarruf oranı %10 artırılırsa, su tükenme riski <strong>${delay} yıl geciktirilebilir</strong> (Tükenme yılı: ${savingsDepletionYear}).
            </div>
          </div>`;
      } else {
        const gainVol = (savingsFinal / 1e9).toFixed(3);
        savingsHtml = `
          <div class="rec-item rec-warning">
            <div class="rec-icon"><i data-lucide="sparkles" style="color:var(--accent-orange)"></i></div>
            <div class="rec-text">
              <strong>Tasarruf Seferberliği Önerisi</strong>
              Tasarruf oranı %10 artırılırsa, tükenen rezerv miktarına karşı <strong>${gainVol} Milyar m³</strong> ek güvenlik marjı kazanılır.
            </div>
          </div>`;
      }
    }
  } else {
    const gainPercent = finalYearData.rezerv > 0 ? (((savingsFinal - finalYearData.rezerv) / finalYearData.rezerv) * 100) : 0;
    savingsHtml = `
      <div class="rec-item rec-success">
        <div class="rec-icon"><i data-lucide="sparkles" style="color:var(--accent-green)"></i></div>
        <div class="rec-text">
          <strong>Tasarruf Seferberliği Önerisi</strong>
          Tasarruf oranı %10 artırılırsa, kalan su rezervleriniz projeksiyon sonunda <strong>%${gainPercent.toFixed(1)}</strong> oranında daha fazla korunacaktır.
        </div>
      </div>`;
  }

  // 3. Nüfus Artış Önerisi
  let popHtml = "";
  const activePopGrowthPercent = (polNufus * 100).toFixed(1);
  if (criticalYear !== null) {
    popHtml = `
      <div class="rec-item rec-danger">
        <div class="rec-icon"><i data-lucide="trending-up" style="color:var(--accent-red)"></i></div>
        <div class="rec-text">
          <strong>Demografik Baskı Uyarısı</strong>
          Nüfus artışı mevcut hızda (%${activePopGrowthPercent}) devam ederse, su rezervleri <strong>${criticalYear} yılında</strong> kritik seviyenin (%20) altına inecektir.
        </div>
      </div>`;
  } else {
    popHtml = `
      <div class="rec-item rec-success">
        <div class="rec-icon"><i data-lucide="trending-up" style="color:var(--accent-green)"></i></div>
        <div class="rec-text">
          <strong>Demografik Denge Raporu</strong>
          Mevcut nüfus artış hızı (%${activePopGrowthPercent}) ve uygulanan su yönetimi politikalarıyla, rezervler projeksiyon sonuna kadar güvenli limitlerde kalmaktadır.
        </div>
      </div>`;
  }

  recContainer.innerHTML = leakHtml + savingsHtml + popHtml;

  // I. Grafik Verilerini Güncelle
  document.getElementById("chartTitle").textContent = `${diffYears} Yıllık Su Rezervi Projeksiyonu ve Senaryo Karşılaştırması`;
  initProjectionChart(
    simulationYears,
    userResults.map(r => r.rezerv),
    iyimserResults.map(r => r.rezerv),
    kotumserResults.map(r => r.rezerv)
  );

  // J. Sonuç Tablosunu Doldur
  const tableBody = document.querySelector("#simulationTable tbody");
  tableBody.innerHTML = "";

  userResults.forEach(r => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${r.yil}</strong></td>
      <td>${r.nufus.toLocaleString('tr-TR')}</td>
      <td style="color:${r.rezerv === 0 ? 'var(--accent-red)' : 'var(--text-main)'}">
        ${r.rezerv.toLocaleString('tr-TR', { maximumFractionDigits: 0 })}
      </td>
      <td>${r.tuketim.toLocaleString('tr-TR', { maximumFractionDigits: 0 })}</td>
      <td>${r.kacak.toLocaleString('tr-TR', { maximumFractionDigits: 0 })}</td>
      <td>${r.girdi.toLocaleString('tr-TR', { maximumFractionDigits: 0 })}</td>
    `;
    tableBody.appendChild(tr);
  });

  // Lucide ikonlarını yeni dinamik HTML için yeniden derle
  lucide.createIcons();

  // CSV indirmesi için verileri globalde tutalım
  window.currentSimulationData = {
    results: userResults,
    year: targetYear
  };
}


// ==============================================================================
// 6. INITIALIZATION & TAB SWITCHING
// ==============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Tab Değiştirme Dinamikleri
  const tabs = document.querySelectorAll(".tab-btn");
  const panes = document.querySelectorAll(".tab-pane");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      panes.forEach(p => p.classList.remove("active"));

      tab.classList.add("active");
      const activePane = document.getElementById(tab.dataset.tab);
      activePane.classList.add("active");

      // Grafiklerin boyutlarının canvas içinde düzgün oturması için yeniden çizim tetikle
      if (tab.dataset.tab === "tuikTab") {
        drawTuikNufusChart();
        drawTuikKaynakChart();
        drawIlNufusChart(document.getElementById("ilSecim").value);
      } else if (tab.dataset.tab === "simulationTab") {
        updateSimulation();
      }
    });
  });

  // Slider Etiketlerinin Canlı Güncellenmesi
  const sliders = [
    { id: "nufusArtis", valueId: "nufusArtisValue", suffix: "%" },
    { id: "yagisEtkisi", valueId: "yagisEtkisiValue", suffix: "%" },
    { id: "kacakSu", valueId: "kacakSuValue", suffix: "%" },
    { id: "tasarrufOrani", valueId: "tasarrufOraniValue", suffix: "%" },
    { id: "rezervKatsayi", valueId: "rezervKatsayiValue", suffix: "x" }
  ];

  sliders.forEach(sliderInfo => {
    const el = document.getElementById(sliderInfo.id);
    const valEl = document.getElementById(sliderInfo.valueId);

    el.addEventListener("input", (e) => {
      let val = e.target.value;
      if (parseFloat(val) > 0 && sliderInfo.suffix === "%") {
        valEl.textContent = `+${val}${sliderInfo.suffix}`;
      } else {
        valEl.textContent = `${val}${sliderInfo.suffix}`;
      }
      updateSimulation();
    });
  });

  // Politika kutuları için tetikleyici ekle
  const policies = ["policyAltyapi", "policyTarim", "policySayac", "policyEgitim"];
  policies.forEach(pid => {
    document.getElementById(pid).addEventListener("change", updateSimulation);
  });

  // İl dropdown seçimi tetikleyicisi
  document.getElementById("ilSecim").addEventListener("change", (e) => {
    drawIlNufusChart(e.target.value);
  });

  // Projeksiyon Yılı seçimi tetikleyicisi
  document.getElementById("projeksiyonYili").addEventListener("change", updateSimulation);

  // Rapor Dışa Aktarma Butonları
  document.getElementById("btnDownloadCSV").addEventListener("click", () => {
    if (!window.currentSimulationData) return;
    const { results, year } = window.currentSimulationData;
    let csvContent = "\uFEFF"; // BOM for Turkish characters in Excel
    csvContent += "Yil;Aktif Nufus;Kalan Su Rezervi (m3);Net Tuketim (m3);Sebeke Kaybi/Kacak (m3);Dogal Girdi (m3)\r\n";
    results.forEach(r => {
      csvContent += `${r.yil};${r.nufus};${Math.round(r.rezerv)};${Math.round(r.tuketim)};${Math.round(r.kacak)};${Math.round(r.girdi)}\r\n`;
    });
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `su_simulasyon_raporu_${year}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  document.getElementById("btnPrintReport").addEventListener("click", () => {
    window.print();
  });

  // Verileri yükle ve simülasyonu başlat
  loadCSVData().then(() => {
    updateSimulation();
    // Lucide ikonlarını derle
    lucide.createIcons();
  });
});
