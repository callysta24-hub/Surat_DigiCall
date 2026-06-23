// ==================== ENGINE 1: DATABASE UTAMA SURAT ====================
const databaseSurat = {
    "nicole": {
        foto: "nicole.jpeg",
        pesan: "Hai Nicole! makasih ya udah menjadi temen gua di kelas xu1 ini. awalnya cuma karena videoin lu tidur eh gatau tiba tiba deket wkwk, sangat senang rasanya bisa deket dan bertemu sama lu dikelas 10 ini. gua kayaknya bakal feeling lonely pas bbq karena ga ada elu, ya gimana yaaa selalu ada lu disamping gua pas bbq terus nanti engga, rasanya kaya njirlahh sedih. nanti bakal beda jadwal, bisa jadi juga jarang ketemu nantinya?? maafin atas semua kesalahan gua kepada lu ya. semangat yaa, jangan suka nyalahin diri sendiri yh, semuanya bukan salah lu kok. i always proud of u btw, semangat selalu. kalo hari lu berat, ingat!!! i'm hereee"
    },
    "tyas": {
        foto: "tyas.jpeg",
        pesan: "Halo Tyas! makasih ya udah mw dengerin cerita gua belakangan ini, huhu mantan terindah guweh.. makasih sudah menertawakan jokes jokes gua. maaf ya kalo gua se judes itu. gua minta maaf ya atas semua perilaku gua yang menyakiti hati lu atau gimana gitu, sorry tyas. semangat selalu ya dan jadilah lebih rajin lg dikelas barunya, ihhh pgn gua unyel unyel, gemess bngt tyasss"
    },
    "sali": {
        foto: "sali.jpeg",
        pesan: "Hai Sali! makasih sudah selalu memberiikan saran kalo gua lagi bingung, makasih juga my love my chairmate sayang bngt gua ama lu, makasih yh udah ngajarin kalo gua ga ngert wlaupun dngn marah marahnya itu hmssmss... semangat terus wakempk yg mengerikan"
    },
    "qory": {
        foto: "qory.jpeg",
        pesan: "Halo Qory! maaf ya kor kalo gua ada salah sama luu, duhayyy temen less. Thank you for being the person who never gets tired of explaining the numbers I couldn't understand. Thank you for your patience, your kindness, and your time. I truly appreciate every lesson you've shared. Wishing you nothing but happiness and success. semangat bendaharaQ"
    },
    "caca": {
        foto: "caca.jpeg",
        pesan: "Hai Caca! makasih ya caa, walaupun kita cuma pernah duduk bareng bentar, tapi lu baik banget. makasih juga udah jajanin gua, dan peduli padahal ga nyuruh wkwkwk. tetep jadi ca yang baik, walaupun kadang suka ga enakan sama orang. sama jangan berubah ya, tetep jadi bocil yang peduli ya. jangan mau kalo dikasih permen sama orang asink wkwkwk. semangat terus ya ca, semoga semua hal baik dateng ke lu"
    },
    "alifah": {
        foto: "alifah.jpeg",
        pesan: "Halo Alifah! makasih ya udah jadi temen yang kocak, sabar, dan selalu mau dengerin curhatan gua. maaf juga kalo respon gua kadang ga sesuai harapan. sedih sih nanti kalo udah ga sekelas, siapa lagi yang mau ngetawain jokes gua, ga ada lagi yg bisa nanggepin jokes gua, gk ada yg bisa buat gua ketawa lagi. terus gua ga punya alasan lagi buat mampir ke barisan pojok atau langsung nunjukin video delshel sama orine yang lewat fyp gua wkwkwk. selamat hape baruuu, dan semangat teruss lipahhh"
    },
    "fatiyah": {
        foto: "fatiyah.jpeg",
        pesan: "Hai Fatiyah! makasih ya udah selalu mau dengerin cerita sama curhatan gua, padahal kadang isinya ga jelas wkwkwk. maaf ya kalo selama ini gua sering keliatan kesel, cuek, atau kesannya ga peduli sama lu. maaf juga kalo gua pernah jahat atau tanpa sadar nyakitin hati lu. makasih ya udah selalu baik sama orang-orang. semoga lu selalu dikelilingi hal-hal baik juga. oh iya, jangan lupa aktif di mm woiii!!"
    },
    "callysta": {
        foto: "callysta.jpg",
        pesan: "Halo Callysta! ⭐ Makasih ya udah selalu nyambung dan seru banget kalau diajak ngobrolin banyak hal. Hubungan persahabatan kita ini berharga banget buat aku. Stay awesome dan jangan pernah lupa sama kebaikanmu sendiri ya! ✦"
    }
};

let targetPesan = "";

function startJourney() {
    const inputNode = document.getElementById("nameInput");
    const namaTeman = inputNode.value.trim().toLowerCase();

    if (namaTeman === "") {
        alert("Ketik nama km duls donk!!");
        return;
    }

    // 🔒 PROTEKSI UTAMA: Cek apakah nama terdaftar di databaseSurat
    if (!databaseSurat[namaTeman]) {
        alert("Ups! wkwkkwk ga terdafar, bukan temen gweh lu");
        return; // Menghentikan fungsi agar tidak bisa masuk ke halaman berikutnya
    }

    // Jika lolos pengecekan, pasang foto dan pesan sesuai nama yang diketik
    const imgElement = document.getElementById("friendPhoto");
    targetPesan = databaseSurat[namaTeman].pesan;
    imgElement.src = databaseSurat[namaTeman].foto;

    // Format Kapital Teks Judul
    const namaKapital = inputNode.value.trim().charAt(0).toUpperCase() + inputNode.value.trim().slice(1);
    document.getElementById("greetingTitle").innerText = `Hai, ${namaKapital}!`;
    document.getElementById("photoCaption").innerText = `${namaKapital} & guatuh`;

    // Putar musik otomatis
    const bgMusic = document.getElementById("bgMusic");
    bgMusic.play().catch(() => console.log("Autoplay ditahan browser."));

    // Pindah ke halaman amplop
    document.getElementById("sceneIntro").classList.add("hidden");
    document.getElementById("sceneEnvelope").classList.remove("hidden");
}

// ==================== ENGINE 3: ENVELOPE OPENING (SMOOTH TRANSITION) ====================
function openEnvelope() {
    const mainEnvelope = document.getElementById("mainEnvelope");
    if (mainEnvelope.classList.contains("open")) return;

    mainEnvelope.classList.add("open");

    setTimeout(() => {
        document.getElementById("sceneEnvelope").classList.add("hidden");
        document.getElementById("sceneContent").classList.remove("hidden");
        
        // 🎉 Letusan confetti tepat saat kata-kata terbuka
        confetti({
            particleCount: 120,
            spread: 70,
            origin: { y: 0.6 }
        });

        // Jalankan mesin ketik otomatis
        ketikEfek(targetPesan);
    }, 400); 
}

function ketikEfek(teks) {
    const elemenTeks = document.getElementById("suratTeks");
    elemenTeks.innerHTML = ""; 
    let i = 0;
    function ketik() {
        if (i < teks.length) {
            elemenTeks.innerHTML += teks.charAt(i);
            i++;
            setTimeout(ketik, 20);
        }
    }
    ketik();
}

// ==================== ENGINE 4: KONTROL AUDIO BACKSOUND ====================
function toggleMusic() {
    const audio = document.getElementById("bgMusic");
    const status = document.getElementById("musicStatus");
    if (audio.paused) {
        audio.play();
        status.innerText = "ON";
    } else {
        audio.pause();
        status.innerText = "OFF";
    }
}

// ==================== ENGINE 5: INTERAKTIF KLIK LILIN ====================
function blowCandle() {
    const flame = document.getElementById("flame");
    if (!flame) return;

    flame.style.display = "none"; 
    
    confetti({ particleCount: 50, angle: 60, spread: 50, origin: { x: 0.1 } });
    confetti({ particleCount: 50, angle: 120, spread: 50, origin: { x: 0.9 } });

    alert("yeuh lilinnya mati. Keren, have a wonderful day!");
}