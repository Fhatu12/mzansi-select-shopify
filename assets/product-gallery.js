(() => {
  const gallery = document.querySelector('[data-product-gallery]');
  if (!gallery) return;

  const main = gallery.querySelector('[data-gallery-main]');
  const mainImg = gallery.querySelector('[data-gallery-main-image]');
  const zoomPane = gallery.querySelector('[data-gallery-zoom-pane]');
  const thumbs = [...gallery.querySelectorAll('[data-gallery-thumb]')];
  const prevBtn = gallery.querySelector('[data-gallery-prev]');
  const nextBtn = gallery.querySelector('[data-gallery-next]');
  const media = thumbs.map((thumb) => ({
    id: thumb.dataset.mediaId,
    src: thumb.dataset.mediaSrc,
    alt: thumb.dataset.mediaAlt || '',
    width: thumb.dataset.mediaWidth,
    height: thumb.dataset.mediaHeight
  })).filter((item) => item.src);

  if (!mainImg || media.length === 0) return;

  let activeIndex = Math.max(
    0,
    media.findIndex((item) => item.id && item.id === mainImg.dataset.mediaId)
  );

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

  const setActive = (index) => {
    activeIndex = (index + media.length) % media.length;
    const item = media[activeIndex];
    mainImg.src = item.src;
    mainImg.srcset = `${item.src} 1200w`;
    mainImg.alt = item.alt;
    if (item.width) mainImg.width = item.width;
    if (item.height) mainImg.height = item.height;
    mainImg.dataset.mediaId = item.id || '';
    thumbs.forEach((thumb, thumbIndex) => {
      const selected = thumbIndex === activeIndex;
      thumb.classList.toggle('is-active', selected);
      thumb.setAttribute('aria-selected', selected ? 'true' : 'false');
      if (selected) {
        thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });
    if (prevBtn) prevBtn.disabled = media.length < 2;
    if (nextBtn) nextBtn.disabled = media.length < 2;
  };

  thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => setActive(index));
    thumb.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setActive(index);
      }
    });
  });

  prevBtn?.addEventListener('click', () => setActive(activeIndex - 1));
  nextBtn?.addEventListener('click', () => setActive(activeIndex + 1));

  gallery.addEventListener('keydown', (event) => {
    if (media.length < 2) return;
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      setActive(activeIndex - 1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      setActive(activeIndex + 1);
    }
  });

  const clearZoom = () => {
    if (!zoomPane) return;
    zoomPane.style.backgroundImage = '';
    zoomPane.style.backgroundPosition = '';
    zoomPane.style.opacity = '0';
  };

  const updateZoom = (event) => {
    if (!zoomPane || !finePointer.matches || media.length === 0) return;
    const rect = main.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    zoomPane.style.backgroundImage = `url("${mainImg.src}")`;
    zoomPane.style.backgroundPosition = `${x}% ${y}%`;
    zoomPane.style.opacity = '1';
  };

  if (finePointer.matches && !reducedMotion.matches) {
    main.addEventListener('mousemove', updateZoom);
    main.addEventListener('mouseleave', clearZoom);
  }

  setActive(activeIndex);
})();
