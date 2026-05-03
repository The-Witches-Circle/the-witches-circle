document.querySelectorAll('.email-link, .social-icon-btn[data-user]').forEach(function(link) {
  var addr = link.dataset.user + '@' + link.dataset.domain;
  link.href = 'mailto:' + addr;
});

(function () {
  var trailer = document.getElementById('trailer');
  trailer.addEventListener('click', function () {
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/UNbVmLb0vMw?autoplay=1';
    iframe.title = 'DOPROS — Official Trailer';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:0;';
    trailer.innerHTML = '';
    trailer.appendChild(iframe);
    trailer.style.cursor = 'default';
  });
})();

(function () {
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var imgs = Array.from(document.querySelectorAll('.screenshots img'));
  var current = 0;

  function show(index) {
    current = (index + imgs.length) % imgs.length;
    lightboxImg.src = imgs[current].src;
    lightboxImg.alt = imgs[current].alt;
    lightbox.classList.add('active');
  }

  imgs.forEach(function (img, i) {
    img.addEventListener('click', function () { show(i); });
  });

  document.getElementById('lightbox-prev').addEventListener('click', function (e) {
    e.stopPropagation();
    show(current - 1);
  });

  document.getElementById('lightbox-next').addEventListener('click', function (e) {
    e.stopPropagation();
    show(current + 1);
  });

  lightbox.addEventListener('click', function () {
    lightbox.classList.remove('active');
  });

  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') lightbox.classList.remove('active');
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
})();
