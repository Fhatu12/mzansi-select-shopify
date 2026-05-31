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

  const normalizeImageUrl = (value) => {
    if (!value) return '';
    return String(value).replace(/^https?:/, '').trim();
  };

  const updateGalleryForVariant = (variant) => {
    if (!gallery || !variant?.featuredSrc) return;
    const featuredMediaId = variant.featuredMediaId ? String(variant.featuredMediaId) : '';
    let matchingThumb = null;

    if (featuredMediaId) {
      matchingThumb = gallery.querySelector(`[data-gallery-thumb][data-media-id="${featuredMediaId}"]`);
    }

    if (!matchingThumb) {
      const wantedSrc = normalizeImageUrl(variant.featuredSrc);
      matchingThumb = [...gallery.querySelectorAll('[data-gallery-thumb]')].find((thumb) =>
        normalizeImageUrl(thumb.dataset.mediaSrc) === wantedSrc
      );
    }

    if (matchingThumb) {
      matchingThumb.click();
      return;
    }
    // Respect the Liquid-rendered gallery cap: do not swap in media that isn't rendered as a thumb.
    // This keeps navigation/zoom bounded to the same set of media items.
    return;
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
