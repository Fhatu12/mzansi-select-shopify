(() => {
  const STORAGE_KEY = 'mzansi-wishlist-v1';

  const readStore = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  };

  const writeStore = (items) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items.slice(0, 50)));
    } catch {
      /* quota or private mode */
    }
  };

  const normalise = (btn) => ({
    handle: btn.dataset.productHandle,
    title: btn.dataset.productTitle || '',
    url: btn.dataset.productUrl || ''
  });

  const isSaved = (handle) => readStore().some((item) => item.handle === handle);

  const setLabel = (btn, saved) => {
    const title = btn.dataset.productTitle || 'this product';
    btn.setAttribute('aria-pressed', saved ? 'true' : 'false');
    btn.setAttribute(
      'aria-label',
      saved ? `Remove ${title} from wishlist` : `Add ${title} to wishlist`
    );
    btn.classList.toggle('is-saved', saved);
  };

  const syncHandle = (handle) => {
    const saved = isSaved(handle);
    document.querySelectorAll(`[data-wishlist-toggle][data-product-handle="${handle}"]`).forEach((btn) => {
      setLabel(btn, saved);
    });
  };

  const toggle = (btn) => {
    const item = normalise(btn);
    if (!item.handle) return;
    const store = readStore();
    const idx = store.findIndex((entry) => entry.handle === item.handle);
    if (idx >= 0) {
      store.splice(idx, 1);
      writeStore(store);
      syncHandle(item.handle);
      return;
    }
    store.push({ handle: item.handle, title: item.title, url: item.url });
    writeStore(store);
    syncHandle(item.handle);
  };

  const init = () => {
    document.querySelectorAll('[data-wishlist-toggle]').forEach((btn) => {
      if (!btn.dataset.productHandle) return;
      setLabel(btn, isSaved(btn.dataset.productHandle));
      if (btn.dataset.wishlistBound === 'true') return;
      btn.dataset.wishlistBound = 'true';
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        toggle(btn);
      });
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  document.addEventListener('shopify:section:load', init);
})();
