document.addEventListener('click', function(e) {
  if (e.target.matches('.site-nav a')) {
    var toggle = document.getElementById('nav-toggle');
    if (toggle) toggle.checked = false;
  }
});

const form = document.querySelector('.visszajelzes-form');

if (form) {
  form.addEventListener('submit', function(event) {
      let hibak = [];

      const nevInput = document.getElementById('name');
      if (nevInput.value === "") {
          hibak.push("A név megadása kötelező!");
      }

      const emailInput = document.getElementById('email');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailInput.value === "") {
          hibak.push("Az e-mail cím megadása kötelező!");
      } else if (!emailRegex.test(emailInput.value)) {
          hibak.push("Kérjük, adj meg egy érvényes e-mail címet!");
      }

      const resztvesz = document.querySelector('input[name="attend"]:checked');
      if (!resztvesz) {
          hibak.push("Kérlek, jelezd, hogy részt veszel-e!");
      }

      const vendegekInput = document.getElementById('guests');
      const vendegekSzam = Number(vendegekInput.value);
      if (vendegekInput.value === "" || vendegekSzam < 1 || vendegekSzam > 10) {
          hibak.push("A vendégek száma 1 és 10 között lehet!");
      }

      const szallas = document.querySelector('input[name="szallas"]:checked');
      if (!szallas) {
          hibak.push("Kérlek válassz, hogy kérsz-e szállást!");
      }

      const etel = document.querySelector('input[name="food"]:checked');
      if (!etel) {
          hibak.push("Kérlek válassz az agapé opciók közül!");
      }

      if (hibak.length > 0) {
          event.preventDefault();
          alert(hibak.join("\n"));
      }
  });
}



document.addEventListener('DOMContentLoaded', function() {
  var galleryContainer = document.getElementById('gallery');
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var caption = document.getElementById('caption');
  var closeBtn = document.getElementById('close');
  var prevBtn = document.getElementById('prev');
  var nextBtn = document.getElementById('next');
  
  if (!galleryContainer) return;
  
  var images = [
    { src: "kepek/1.jpg", alt: '1'},
    { src: "kepek/2.jpg", alt: '2'},
    { src: "kepek/3.jpg", alt: '3'},
    { src: "kepek/4.jpg", alt: '4'},
    { src: "kepek/5.jpg", alt: '5'},
    { src: "kepek/6.jpg", alt: '6'}
  ];
  
  var currentIndex = 0;
  
  images.forEach(function(img, index) {
    var thumbImg = document.createElement('img');
    thumbImg.src = img.src;
    thumbImg.alt = img.alt;
    thumbImg.className = 'gallery-thumb';
    thumbImg.onclick = function() { openLightbox(index); };
    galleryContainer.appendChild(thumbImg);
  });
  
  function openLightbox(index) {
    currentIndex = index;
    lightbox.classList.add('active');
    updateLightbox();
  }
  
  function closeLightbox() {
    lightbox.classList.remove('active');
  }
  
  function updateLightbox() {
    var img = images[currentIndex];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    caption.textContent = img.caption;
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox();
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox();
  }
  
  closeBtn.addEventListener('click', closeLightbox);
  nextBtn.addEventListener('click', nextImage);
  prevBtn.addEventListener('click', prevImage);
  
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', function(e) {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') closeLightbox();
  });
});

