(() => {
  const STORAGE_KEY = 'mzansi-wishlist-v1';
  let delegated = false;

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
  const getCount = () => readStore().length;

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
      saved ? `Remove ${title} from saved items` : `Add ${title} to saved items`
    );
    btn.classList.toggle('is-saved', saved);
  };

  const syncButton = (btn) => {
    if (!btn || !btn.dataset.productHandle) return;
    setLabel(btn, isSaved(btn.dataset.productHandle));
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
      syncAll();
      return;
    }
    store.push({ handle: item.handle, title: item.title, url: item.url });
    writeStore(store);
    syncHandle(item.handle);
    syncAll();
  };

  const syncAll = () => {
    document.querySelectorAll('[data-wishlist-toggle]').forEach((btn) => {
      syncButton(btn);
    });
    const count = getCount();
    document.querySelectorAll('[data-wishlist-count]').forEach((node) => {
      node.textContent = String(count);
    });
    document.querySelectorAll('[data-wishlist-header-state]').forEach((node) => {
      node.classList.toggle('is-saved', count > 0);
    });
  };

  const handleDelegatedClick = (event) => {
    const btn = event.target.closest('[data-wishlist-toggle]');
    if (!btn || !document.contains(btn)) return;
    event.preventDefault();
    event.stopPropagation();
    toggle(btn);
  };

  const init = () => {
    syncAll();
    if (delegated) return;
    delegated = true;
    document.addEventListener('click', handleDelegatedClick);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  document.addEventListener('shopify:section:load', init);
  window.addEventListener('pageshow', syncAll);
})();
