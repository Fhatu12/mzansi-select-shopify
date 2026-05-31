(() => {
  const STORAGE_KEY = 'mzansi-wishlist-v1';
  const MAX_ITEMS = 50;
  let delegated = false;
  let drawerBound = false;

  const uniqByHandle = (items) => {
    const seen = new Set();
    return items.filter((item) => {
      if (!item || !item.handle || seen.has(item.handle)) return false;
      seen.add(item.handle);
      return true;
    });
  };

  const sanitiseItem = (item) => {
    if (!item || typeof item !== 'object') return null;
    const handle = typeof item.handle === 'string' ? item.handle.trim() : '';
    if (!handle) return null;
    return {
      handle,
      title: typeof item.title === 'string' ? item.title : '',
      url: typeof item.url === 'string' ? item.url : '',
      image: typeof item.image === 'string' ? item.image : ''
    };
  };

  const readStore = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(parsed)) return [];
      const cleaned = uniqByHandle(parsed.map(sanitiseItem).filter(Boolean)).slice(0, MAX_ITEMS);
      if (JSON.stringify(parsed) !== JSON.stringify(cleaned)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cleaned));
      }
      return cleaned;
    } catch {
      return [];
    }
  };

  const writeStore = (items) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(uniqByHandle(items).slice(0, MAX_ITEMS)));
    } catch {
      /* quota or private mode */
    }
  };

  const normaliseFromButton = (btn) => sanitiseItem({
    handle: btn.dataset.productHandle,
    title: btn.dataset.productTitle || '',
    url: btn.dataset.productUrl || '',
    image: btn.dataset.productImage || ''
  });

  const isSaved = (handle) => readStore().some((item) => item.handle === handle);

  const setLabel = (btn, saved) => {
    const title = btn.dataset.productTitle || 'this product';
    btn.setAttribute('aria-pressed', saved ? 'true' : 'false');
    btn.setAttribute('aria-label', saved ? `Remove ${title} from saved items` : `Add ${title} to saved items`);
    btn.classList.toggle('is-saved', saved);
  };

  const renderDrawerItems = () => {
    const list = document.querySelector('[data-wishlist-drawer-list]');
    const empty = document.querySelector('[data-wishlist-empty]');
    if (!list || !empty) return;

    const store = readStore();
    list.innerHTML = '';
    empty.hidden = store.length > 0;

    store.forEach((item) => {
      const row = document.createElement('li');
      row.className = 'wishlist-drawer-item';
      row.innerHTML = `
        <a class="wishlist-drawer-link" href="${item.url || '/products/' + item.handle}">${item.title || item.handle}</a>
        <button type="button" class="wishlist-drawer-remove" data-wishlist-remove="${item.handle}" aria-label="Remove ${item.title || item.handle} from saved items">Remove</button>
      `;
      list.appendChild(row);
    });
  };

  const syncAll = () => {
    document.querySelectorAll('[data-wishlist-toggle]').forEach((btn) => {
      const handle = btn.dataset.productHandle;
      if (handle) setLabel(btn, isSaved(handle));
    });

    const count = readStore().length;
    document.querySelectorAll('[data-wishlist-count]').forEach((node) => {
      node.textContent = String(count);
    });
    document.querySelectorAll('[data-wishlist-header-state]').forEach((node) => {
      node.classList.toggle('is-saved', count > 0);
    });

    renderDrawerItems();
  };

  const toggle = (btn) => {
    const item = normaliseFromButton(btn);
    if (!item) return;
    const store = readStore();
    const idx = store.findIndex((entry) => entry.handle === item.handle);

    if (idx >= 0) {
      store.splice(idx, 1);
    } else {
      store.push(item);
    }

    writeStore(store);
    syncAll();
  };

  const getDrawerEls = () => ({
    drawer: document.querySelector('[data-wishlist-drawer]'),
    panel: document.querySelector('[data-wishlist-panel]'),
    backdrop: document.querySelector('[data-wishlist-backdrop]'),
    triggers: document.querySelectorAll('[data-wishlist-open]')
  });

  const setDrawerOpen = (open) => {
    const { drawer, triggers } = getDrawerEls();
    if (!drawer) return;
    drawer.classList.toggle('is-open', open);
    drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
    document.body.classList.toggle('wishlist-drawer-open', open);
    triggers.forEach((trigger) => trigger.setAttribute('aria-expanded', open ? 'true' : 'false'));
    if (open) renderDrawerItems();
  };

  const bindDrawer = () => {
    if (drawerBound) return;
    const { drawer, panel, backdrop, triggers } = getDrawerEls();
    if (!drawer || !panel || !backdrop || !triggers.length) return;

    drawerBound = true;
    triggers.forEach((trigger) => {
      trigger.addEventListener('click', (event) => {
        event.preventDefault();
        setDrawerOpen(true);
      });
    });

    drawer.addEventListener('click', (event) => {
      const removeBtn = event.target.closest('[data-wishlist-remove]');
      if (removeBtn) {
        const handle = removeBtn.getAttribute('data-wishlist-remove');
        const next = readStore().filter((item) => item.handle !== handle);
        writeStore(next);
        syncAll();
        return;
      }
      const closeBtn = event.target.closest('[data-wishlist-close]');
      if (closeBtn || (event.target === backdrop && !panel.contains(event.target))) {
        setDrawerOpen(false);
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setDrawerOpen(false);
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
    bindDrawer();
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
