(() => {
  const root = document.querySelector('[data-product-options]');
  const gallery = document.querySelector('[data-product-gallery]');
  if (!root) return;

  const dataEl = root.querySelector('[data-product-options-json]');
  if (!dataEl) return;

  let payload;
  try {
    payload = JSON.parse(dataEl.textContent);
  } catch {
    return;
  }

  const { options = [], variants = [] } = payload;
  const selected = options.map((opt) => opt.selected || (opt.values[0] ?? ''));

  const optionGroups = [...root.querySelectorAll('[data-option-index]')];

  const findVariant = () =>
    variants.find((variant) =>
      variant.options.every((value, index) => value === selected[index])
    );

  const variantAvailable = (optionIndex, value) =>
    variants.some(
      (variant) =>
        variant.available &&
        variant.options[optionIndex] === value &&
        variant.options.every((optValue, idx) => idx === optionIndex || optValue === selected[idx])
    );

  const syncButtons = () => {
    optionGroups.forEach((group) => {
      const optionIndex = Number(group.dataset.optionIndex);
      group.querySelectorAll('[data-option-value]').forEach((btn) => {
        const value = btn.dataset.optionValue;
        const available = variantAvailable(optionIndex, value);
        const active = selected[optionIndex] === value;
        btn.classList.toggle('is-active', active);
        btn.classList.toggle('is-unavailable', !available);
        btn.disabled = !available;
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
    });
  };

  const updateGalleryForVariant = (variant) => {
    if (!gallery || !variant?.featuredSrc) return;
    const mainImg = gallery.querySelector('[data-gallery-main-image]');
    const matchingThumb = gallery.querySelector(`[data-gallery-thumb][data-media-src="${variant.featuredSrc}"]`);
    if (matchingThumb) {
      matchingThumb.click();
      return;
    }
    if (mainImg) {
      mainImg.src = variant.featuredSrc;
      if (variant.featuredAlt) mainImg.alt = variant.featuredAlt;
    }
  };

  optionGroups.forEach((group) => {
    const optionIndex = Number(group.dataset.optionIndex);
    group.querySelectorAll('[data-option-value]').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (btn.disabled) return;
        selected[optionIndex] = btn.dataset.optionValue;
        syncButtons();
        const variant = findVariant();
        if (variant) updateGalleryForVariant(variant);
      });
    });
  });

  syncButtons();
})();
