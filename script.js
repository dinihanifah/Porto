document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.slider-section');

    sections.forEach(section => {
        const items = section.querySelectorAll('.slider-item');
        const prevBtn = section.querySelector('.prev-btn');
        const nextBtn = section.querySelector('.next-btn');
        let currentIndex = 0;

        function updateSlider() {
            items.forEach(item => item.classList.remove('active'));

            if (items.length > 0) {
                items[currentIndex].classList.add('active');
            }
        }
        
        updateSlider();

        nextBtn.addEventListener('click', () => {
            if (items.length === 0) return;
            currentIndex = (currentIndex + 1) % items.length;
            updateSlider();
        });

        prevBtn.addEventListener('click', () => {
            if (items.length === 0) return;
            
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            updateSlider();
        });
    });
});

(function() {
  emailjs.init("zbPmbDQPMU0y7gygu");
})();

const form = document.getElementById('contact-form');
const status = document.getElementById('status');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('service_vbml3gr', 'template_9ldw6cq', this)
    .then(() => {
      status.innerText = "✅ Pesan berhasil dikirim!";
      form.reset();
    }, (err) => {
      status.innerText = "❌ Gagal mengirim pesan, coba lagi.";
      console.error(err);
    });
});
