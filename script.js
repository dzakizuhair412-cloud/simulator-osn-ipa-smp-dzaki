// Bank Soal Terintegrasi (5 Paket x 20 Soal Olimpiade)
const questionsData = {
    1: [
        { id: 1, category: "Biologi", q: "Bagian sel yang berfungsi sebagai tempat respirasi seluler untuk menghasilkan energi (ATP) adalah...", o: ["Lisosom", "Mitokondria", "Ribosom", "Badan Golgi"], a: 1 },
        { id: 2, category: "Biologi", q: "Karakteristik pembuluh darah vena yang membedakannya secara fungsional dari arteri adalah...", o: ["Dinding tebal dan elastis", "Membawa darah kaya oksigen", "Memiliki katup di sepanjang pembuluh", "Aliran darah meninggalkan jantung"], a: 2 },
        { id: 3, category: "Biologi", q: "Hubungan simbiosis antara tanaman leguminosa dengan bakteri Rhizobium menguntungkan karena bakteri...", o: ["Mengubah oksigen menjadi air", "Memfiksasi nitrogen bebas dari udara", "Menghasilkan hormon pertumbuhan", "Melindungi akar dari serangan jamur"], a: 1 },
        { id: 4, category: "Biologi", q: "Enzim ptialin yang disekresikan oleh kelenjar ludah bekerja optimal memecah amilum pada kondisi...", o: ["Sangat asam (pH < 2)", "Sangat basa (pH > 10)", "Netral cenderung lemah (pH sekitar 6.8)", "Suhu ekstrem di atas 60°C"], a: 2 },
        { id: 5, category: "Biologi", q: "Proses filtrasi darah pada nefron ginjal manusia terjadi di dalam bagian...", o: ["Glomerulus", "Tubulus Kontortus Proksimal", "Lengkung Henle", "Tubulus Kolektivus"], a: 0 },
        { id: 6, category: "Biologi", q: "Hormon tumbuhan yang berperan dominan dalam memicu pematangan buah adalah...", o: ["Auksin", "Sitokinin", "Giberelin", "Etilen"], a: 3 },
        { id: 7, category: "Biologi", q: "Pada ekosistem perairan, fenomena eutrofikasi akibat akumulasi pupuk fosfat dapat menyebabkan...", o: ["Penurunan populasi alga", "Peningkatan drastis kadar oksigen", "Ledakan pertumbuhan tanaman air dan penurunan cahaya", "Peningkatan keanekaragaman jenis ikan"], a: 2 },
        
        { id: 8, category: "Fisika", q: "Sebuah benda bergerak lurus berubah beraturan dari diam dengan percepatan tetap 3 m/s². Jarak yang ditempuh benda setelah 4 detik adalah...", o: ["6 meter", "12 meter", "24 meter", "48 meter"], a: 2 },
        { id: 9, category: "Fisika", q: "Beban bermassa 50 kg diangkat menggunakan katrol bergerak tunggal. Gaya minimal yang diperlukan (g = 10 m/s²) adalah...", o: ["125 N", "250 N", "500 N", "1000 N"], a: 1 },
        { id: 10, category: "Fisika", q: "Sepotong es bermassa 200 gram pada suhu 0°C dileburkan menjadi air pada suhu 0°C. Jika kalor lebur es 80 kal/g, kalor yang diperlukan adalah...", o: ["16.000 kalori", "8.000 kalori", "4.000 kalori", "200 kalori"], a: 0 },
        { id: 11, category: "Fisika", q: "Gelombang bunyi merambat di udara dengan cepat rambat 340 m/s. Jika frekuensi sumber bunyi 680 Hz, panjang gelombangnya adalah...", o: ["0.2 meter", "0.5 meter", "2.0 meter", "5.0 meter"], a: 1 },
        { id: 12, category: "Fisika", q: "Sebuah benda diletakkan 15 cm di depan cermin cekung yang memiliki jarak fokus 10 cm. Sifat bayangan yang terbentuk adalah...", o: ["Nyata, terbalik, diperkecil", "Nyata, terbalik, diperbesar", "Maya, tegak, diperbesar", "Maya, tegak, diperkecil"], a: 1 },
        { id: 13, category: "Fisika", q: "Empat buah hambatan yang masing-masing bernilai 4 Ohm dirangkai secara paralel. Hambatan pengganti total rangkaian adalah...", o: ["1 Ohm", "4 Ohm", "8 Ohm", "16 Ohm"], a: 0 },
        { id: 14, category: "Fisika", q: "Tekanan hidrostatis yang dialami seorang penyelam pada kedalaman 20 meter (massa jenis air = 1000 kg/m³, g = 10 m/s²) adalah...", o: ["20.000 Pa", "100.000 Pa", "200.000 Pa", "250.000 Pa"], a: 2 },

        { id: 15, category: "Kimia", q: "Zat tunggal yang tidak dapat diuraikan lagi menjadi zat lain yang lebih sederhana melalui reaksi kimia biasa dinamakan...", o: ["Unsur", "Senyawa", "Koloid", "Campuran Homogen"], a: 0 },
        { id: 16, category: "Kimia", q: "Berikut ini yang merupakan contoh perubahan kimia yang disertai pembentukan gas dan perubahan warna adalah...", o: ["Lilin menyala mendidih", "Besi berkarat terpapar udara lembab", "Pita magnesium dibakar dalam oksigen", "Garam dilarutkan dalam air"], a: 2 },
        { id: 17, category: "Kimia", q: "Indikator lakmus merah akan berubah warna menjadi biru jika diteteskan ke dalam larutan senyawa kimia...", o: ["Asam Klorida (HCl)", "Natrium Hidroksida (NaOH)", "Asam Cuka (CH3COOH)", "Air Suling Murni"], a: 1 },
        { id: 18, category: "Kimia", q: "Metode pemisahan campuran yang paling tepat digunakan untuk memperoleh air murni dari larutan garam air laut adalah...", o: ["Filtrasi", "Kromatografi", "Distilasi", "Sublimasi"], a: 2 },
        { id: 19, category: "Kimia", q: "Lambang unsur untuk Kalium, Kalsium, dan Tembaga secara berturut-turut adalah...", o: ["K, Ca, Cu", "Ka, Ca, Te", "P, Ca, Cu", "K, Cl, Fe"], a: 0 },
        { id: 20, category: "Kimia", q: "Partikel subatomik yang bermuatan negatif dan bergerak mengelilingi inti atom dalam tingkat energi tertentu adalah...", o: ["Proton", "Neutron", "Elektron", "Positron"], a: 2 }
    ],
    2: [
        { id: 1, category: "Biologi", q: "Fungsi utama jaringan xilem pada tumbuhan vaskular adalah mengangkut...", o: ["Hasil fotosintesis dari daun", "Air dan garam mineral dari akar", "Oksigen dari stomata", "Cadangan makanan ke buah"], a: 1 },
        { id: 2, category: "Biologi", q: "Penyakit anemia disebabkan karena kurangnya pengikatan oksigen yang berkaitan erat dengan defisiensi unsur...", o: ["Kalsium", "Zat Besi", "Magnesium", "Yodium"], a: 1 },
        { id: 3, category: "Biologi", q: "Organel sel tumbuhan yang mengandung pigmen klorofil untuk fotosintesis adalah...", o: ["Kloroplas", "Leukoplas", "Kromoplas", "Vakuola"], a: 0 },
        { id: 4, category: "Biologi", q: "Uji makanan menggunakan reagen Biuret menunjukkan warna ungu. Hal ini menandakan makanan mengandung...", o: ["Glukosa", "Amilum", "Protein", "Lemak"], a: 2 },
        { id: 5, category: "Biologi", q: "Sendi yang memungkinkan gerakan bebas ke segala arah pada tubuh manusia disebut...", o: ["Sendi Engsel", "Sendi Peluru", "Sendi Putar", "Sendi Pelana"], a: 1 },
        { id: 6, category: "Biologi", q: "Pernyataan yang tepat tentang pembelahan meiosis adalah...", o: ["Menghasilkan sel anakan diploid (2n)", "Terjadi pada sel tubuh/somatik", "Menghasilkan 4 sel anak haploid (n)", "Tidak terjadi pindah silang gen"], a: 2 },
        { id: 7, category: "Biologi", q: "Bagian otak manusia yang berfungsi sebagai pusat keseimbangan dan koordinasi gerakan motorik adalah...", o: ["Otak besar (Cerebrum)", "Otak kecil (Cerebellum)", "Sumsum lanjutan", "Talamus"], a: 1 },
        
        { id: 8, category: "Fisika", q: "Jika daya sebuah lampu adalah 40 Watt dan dinyalakan selama 2 jam, energi listrik yang diserap lampu tersebut adalah...", o: ["80 Joule", "2.400 Joule", "144.000 Joule", "288.000 Joule"], a: 2 },
        { id: 9, category: "Fisika", q: "Sebuah mobil bermassa 1000 kg melaju dengan kecepatan 20 m/s. Energi kinetik mobil tersebut adalah...", o: ["10.000 J", "20.000 J", "200.000 J", "400.000 J"], a: 2 },
        { id: 10, category: "Fisika", q: "Alat optik loop menggunakan sebuah lensa positif. Agar menghasilkan bayangan maya dan diperbesar, benda harus diletakkan...", o: ["Di antara F dan 2F", "Tepat di titik fokus (F)", "Di antara lensa dan titik fokus (F)", "Lebih jauh dari 2F"], a: 2 },
        { id: 11, category: "Fisika", q: "Bimetal yang dipanaskan akan melengkung ke arah logam yang memiliki...", o: ["Koefisien muai panjang lebih besar", "Koefisien muai panjang lebih kecil", "Massa jenis lebih besar", "Titik lebur lebih tinggi"], a: 1 },
        { id: 12, category: "Fisika", q: "Suatu fluida mengalir pada pipa dengan luas penampang 10 cm² dengan kecepatan 2 m/s. Jika pipa menyempit menjadi 5 cm², kecepatannya menjadi...", o: ["1 m/s", "4 m/s", "8 m/s", "10 m/s"], a: 1 },
        { id: 13, category: "Fisika", q: "Menurut Hukum Newton III, gaya aksi dan reaksi bekerja pada...", o: ["Satu benda yang sama dan searah", "Dua benda berbeda dan berlawanan arah", "Satu benda dengan besar berbeda", "Fluida statis saja"], a: 1 },
        { id: 14, category: "Fisika", q: "Mistar, jangka sorong, dan mikrometer sekrup berturut-turut memiliki ketelitian...", o: ["1 mm; 0,1 mm; 0,01 mm", "0,5 mm; 0,05 mm; 0,005 mm", "1 cm; 0,1 cm; 0,01 cm", "0,1 mm; 0,01 mm; 0,001 mm"], a: 0 },

        { id: 15, category: "Kimia", q: "Gas yang paling melimpah strukturnya di dalam atmosfer bumi kita adalah...", o: ["Oksigen", "Karbon Dioksida", "Nitrogen", "Argon"], a: 2 },
        { id: 16, category: "Kimia", q: "Larutan asam memiliki karakteristik nilai pH yaitu...", o: ["pH = 7", "pH > 7", "pH < 7", "pH antara 8 hingga 14"], a: 2 },
        { id: 17, category: "Kimia", q: "Pasangan molekul senyawa berikut yang benar adalah...", o: ["O2 dan H2", "H2O dan CO2", "N2 dan NaCl", "He dan Cl2"], a: 1 },
        { id: 18, category: "Kimia", q: "Proses pembuatan garam dapur dari air laut memanfaatkan prinsip pemisahan...", o: ["Sublimasi", "Kristalisasi/Evaporasi", "Filtrasi", "Sentrifugasi"], a: 1 },
        { id: 19, category: "Kimia", q: "Pernyataan yang benar mengenai atom netral adalah...", o: ["Jumlah proton sama dengan neutron", "Jumlah proton sama dengan elektron", "Jumlah elektron sama dengan neutron", "Inti atom bermuatan negatif"], a: 1 },
        { id: 20, category: "Kimia", q: "Garam dapur memiliki rumus kimia resmi yaitu...", o: ["NaOH", "HCl", "NaCl", "CaCO3"], a: 2 }
    ]
};

// Pengganda data otomatis untuk Paket 3, 4, 5 (agar seluruh paket terisi penuh)
questionsData[3] = JSON.parse(JSON.stringify(questionsData[1]));
questionsData[4] = JSON.parse(JSON.stringify(questionsData[2]));
questionsData[5] = JSON.parse(JSON.stringify(questionsData[1]));

// State Management Aplikasi
let currentPaket = null;
let currentQuestionIndex = 0;
let userAnswers = {}; 
let raguState = {}; 
let timerInterval = null;
let totalSeconds = 3600; // 60 menit = 3600 detik

function startSimulation(paketNumber) {
    currentPaket = paketNumber;
    currentQuestionIndex = 0;
    userAnswers = {};
    raguState = {};
    totalSeconds = 3600;

    document.getElementById("home-screen").classList.remove("active");
    document.getElementById("result-screen").classList.remove("active");
    document.getElementById("quiz-screen").classList.add("active");

    document.getElementById("current-paket-title").innerText = "Simulasi OSN IPA - Paket " + paketNumber;

    renderNumberNav();
    loadQuestion();
    startTimer();
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            alert("Waktu pengerjaan telah habis!");
            calculateResults();
        } else {
            totalSeconds--;
            let mins = Math.floor(totalSeconds / 60);
            let secs = totalSeconds % 60;
            document.getElementById("timer").innerText = 
                (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs;
        }
    }, 1000);
}

function renderNumberNav() {
    const grid = document.getElementById("number-nav-grid");
    grid.innerHTML = "";
    const questions = questionsData[currentPaket];

    questions.forEach((q, idx) => {
        const box = document.createElement("div");
        box.classList.add("num-box");
        box.innerText = idx + 1;
        
        if (idx === currentQuestionIndex) {
            box.classList.add("active");
        } else if (raguState[idx]) {
            box.classList.add("ragu");
        } else if (userAnswers[idx] !== undefined) {
            box.classList.add("filled");
        }

        box.onclick = () => {
            currentQuestionIndex = idx;
            loadQuestion();
            renderNumberNav();
        };
        grid.appendChild(box);
    });
}

function loadQuestion() {
    const questions = questionsData[currentPaket];
    const currentQuestion = questions[currentQuestionIndex];

    document.getElementById("question-counter").innerText = `Soal ${currentQuestionIndex + 1} dari ${questions.length}`;
    document.getElementById("question-category").innerText = currentQuestion.category;
    document.getElementById("question-text").innerText = currentQuestion.q;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    const prefixes = ["A", "B", "C", "D"];
    currentQuestion.o.forEach((optionText, idx) => {
        const item = document.createElement("div");
        item.classList.add("option-item");
        if (userAnswers[currentQuestionIndex] === idx) {
            item.classList.add("selected");
        }

        item.onclick = () => { selectOption(idx); };
        item.innerHTML = `
            <div class="option-prefix">${prefixes[idx]}</div>
            <div class="option-content">${optionText}</div>
        `;
        optionsContainer.appendChild(item);
    });

    if (currentQuestionIndex === questions.length - 1) {
        document.getElementById("btn-next").classList.add("hidden");
        document.getElementById("btn-finish").classList.remove("hidden");
    } else {
        document.getElementById("btn-next").classList.remove("hidden");
        document.getElementById("btn-finish").classList.add("hidden");
    }

    const btnRagu = document.getElementById("btn-flag");
    if (raguState[currentQuestionIndex]) {
        btnRagu.classList.add("active-ragu");
    } else {
        btnRagu.classList.remove("active-ragu");
    }
}

function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    renderNumberNav();
    loadQuestion();
}

function toggleRagu() {
    raguState[currentQuestionIndex] = !raguState[currentQuestionIndex];
    renderNumberNav();
    loadQuestion();
}

function nextQuestion() {
    if (currentQuestionIndex < questionsData[currentPaket].length - 1) {
        currentQuestionIndex++;
        loadQuestion();
        renderNumberNav();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
        renderNumberNav();
    }
}

function confirmFinish() {
    let unanswered = 0;
    const total = questionsData[currentPaket].length;
    for (let i = 0; i < total; i++) {
        if (userAnswers[i] === undefined) unanswered++;
    }

    let confirmMsg = "Apakah Anda yakin ingin mengakhiri simulasi ujian ini?";
    if (unanswered > 0) {
        confirmMsg += `\n(Peringatan: Masih ada ${unanswered} soal yang belum Anda jawab).`;
    }

    if (confirm(confirmMsg)) {
        clearInterval(timerInterval);
        calculateResults();
    }
}

function calculateResults() {
    const questions = questionsData[currentPaket];
    let correctTotal = 0;
    let wrongTotal = 0;
    let emptyTotal = 0;

    let stats = {
        "Biologi": { correct: 0, total: 0 },
        "Fisika": { correct: 0, total: 0 },
        "Kimia": { correct: 0, total: 0 }
    };

    questions.forEach((q, idx) => {
        let category = q.category;
        stats[category].total++;

        if (userAnswers[idx] === undefined) {
            emptyTotal++;
        } else if (userAnswers[idx] === q.a) {
            correctTotal++;
            stats[category].correct++;
        } else {
            wrongTotal++;
        }
    });

    let finalScore = Math.round((correctTotal / questions.length) * 100);
    document.getElementById("final-score").innerText = finalScore;
    document.getElementById("total-correct").innerText = correctTotal;
    document.getElementById("total-wrong").innerText = wrongTotal;
    document.getElementById("total-empty").innerText = emptyTotal;

    for (let cat in stats) {
        let catCorrect = stats[cat].correct;
        let catTotal = stats[cat].total;
        let pct = catTotal > 0 ? Math.round((catCorrect / catTotal) * 100) : 0;

        let idPrefix = cat.toLowerCase();
        document.getElementById(`${idPrefix}-pct`).innerText = pct + "%";
        document.getElementById(`${idPrefix}-bar`).style.width = pct + "%";
        document.getElementById(`${idPrefix}-detail`).innerText = `Benar ${catCorrect} dari ${catTotal} soal`;
    }

    document.getElementById("quiz-screen").classList.remove("active");
    document.getElementById("result-screen").classList.add("active");
}

function backToHome() {
    document.getElementById("result-screen").classList.remove("active");
    document.getElementById("home-screen").classList.add("active");
}
