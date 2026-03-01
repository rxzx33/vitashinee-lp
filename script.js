document.addEventListener("DOMContentLoaded", function () {
    console.log("Vitashinee Landing Page Loaded");

    // Smooth scroll (jika nanti ada link anchor ke bawah)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll untuk semua link yang diawali dengan #
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Tambahkan ini di dalam DOMContentLoaded script.js Anda
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

window.addEventListener('scroll', function () {
    const floatingBtn = document.getElementById('floatingWA');

    // Jika scroll lebih dari 400px, munculkan tombol
    if (window.pageYOffset > 400) {
        floatingBtn.classList.add('show');
    } else {
        floatingBtn.classList.remove('show');
    }
});

// --- Logika Interaksi FAQ Accordion ---
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        // Cek apakah item yang di-klik sedang aktif (terbuka)
        const isActive = item.classList.contains('active');

        // Opsional: Jika ingin FAQ lain tertutup otomatis saat satu FAQ dibuka
        faqItems.forEach(otherItem => {
            otherItem.classList.remove('active');
            otherItem.querySelector('.faq-answer').style.maxHeight = null;
        });

        // Jika item tadi belum aktif, maka buka
        if (!isActive) {
            item.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});