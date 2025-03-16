document.addEventListener('DOMContentLoaded', function () {
    const detayBtnlar = document.querySelectorAll('.detay-btn');
    const kapatBtnlar = document.querySelectorAll('.kapat-btn');

    detayBtnlar.forEach(btn => {
        btn.addEventListener('click', function () {
            const kart = this.closest('.kategori-kart, article, .etkinlik-kart'); // En yakın kapsayıcıyı bul
            const detayIcerik = kart ? kart.querySelector('.detay-icerik') : null; // Kapsayıcı içinde .detay-icerik'i bul
            if (detayIcerik) {
                detayIcerik.classList.toggle('active'); // active sınıfını ekle/çıkar
            } else {
                console.error('Detay içeriği bulunamadı!', this);
            }
        });
    });

    kapatBtnlar.forEach(btn => {
        btn.addEventListener('click', function () {
            const detayIcerik = this.parentElement; // Kapat butonunun üst elementi .detay-icerik
            detayIcerik.classList.remove('active'); // active sınıfını kaldır
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Detay butonuna tıklama eventi
    document.querySelectorAll(".detay-btn").forEach(button => {
        button.addEventListener("click", function() {
            const detayIcerik = this.nextElementSibling;
            if (detayIcerik.style.display === "block") {
                detayIcerik.style.display = "none";
            } else {
                detayIcerik.style.display = "block";
            }
        });
    });

    // Kapat butonuna tıklama eventi
    document.querySelectorAll(".kapat-btn").forEach(button => {
        button.addEventListener("click", function() {
            this.parentElement.style.display = "none";
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const detayBtnlar = document.querySelectorAll('.detay-btn');
    const kapatBtnlar = document.querySelectorAll('.kapat-btn');

    detayBtnlar.forEach(btn => {
        btn.addEventListener('click', function () {
            const kart = this.closest('.kategori-kart, article, .etkinlik-kart');
            const detayIcerik = kart ? kart.querySelector('.detay-icerik') : null;
            if (detayIcerik) {
                detayIcerik.classList.toggle('active');
            } else {
                console.error('Detay içeriği bulunamadı!', this);
            }
        });
    });

    kapatBtnlar.forEach(btn => {
        btn.addEventListener('click', function () {
            const detayIcerik = this.parentElement;
            detayIcerik.classList.remove('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const detayBtnlar = document.querySelectorAll('.detay-btn');
    const kapatBtnlar = document.querySelectorAll('.kapat-btn');

    detayBtnlar.forEach(btn => {
        btn.addEventListener('click', function () {
            const article = this.closest('article'); // Butonun en yakın üst elementi olan article'ı bul
            const detayIcerik = article.querySelector('.detay-icerik'); // Article içindeki detay-icerik'i bul
            if (detayIcerik) {
                detayIcerik.classList.toggle('active'); // active sınıfını ekle/çıkar
            } else {
                console.error('Detay içeriği bulunamadı!', this);
            }
        });
    });

    kapatBtnlar.forEach(btn => {
        btn.addEventListener('click', function () {
            const detayIcerik = this.closest('.detay-icerik'); // Kapat butonunun üst elementi .detay-icerik
            if (detayIcerik) {
                detayIcerik.classList.remove('active'); // active sınıfını kaldır
            }
        });
    });
});

