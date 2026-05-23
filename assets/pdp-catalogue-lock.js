(() => {
  const PRODUCT_ROOT_SELECTOR = '.product-main-shell';

  const replaceTextNodes = (root, pattern, replacement) => {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) {
      nodes.push(walker.currentNode);
    }
    nodes.forEach((node) => {
      if (!node.nodeValue || !pattern.test(node.nodeValue)) return;
      node.nodeValue = node.nodeValue.replace(pattern, replacement);
    });
  };

  const enforceCatalogueLock = () => {
    const root = document.querySelector(PRODUCT_ROOT_SELECTOR);
    if (!root) return;

    root.querySelectorAll('.p-now').forEach((node) => {
      node.textContent = 'Price to be confirmed';
      node.classList.add('is-placeholder');
    });
    root.querySelectorAll('.p-price').forEach((node) => {
      node.classList.add('is-placeholder');
    });
    root.querySelectorAll('.p-was, .p-save, .p-price-note, .product-qty-wrap').forEach((node) => {
      node.remove();
    });

    const previewNotes = [...root.querySelectorAll('.product-preview-note')];
    if (previewNotes.length > 0) {
      previewNotes[0].textContent = 'This product is being prepared for launch.';
      previewNotes.slice(1).forEach((node) => node.remove());
    }

    const purchaseNote = root.querySelector('.product-purchase-note');
    if (purchaseNote) {
      purchaseNote.textContent = 'Price to be confirmed. This product is being prepared for launch.';
    }

    const actionButton = root.querySelector('.product-main-add');
    if (actionButton) {
      actionButton.textContent = 'Price to be confirmed';
      actionButton.disabled = true;
      actionButton.setAttribute('aria-disabled', 'true');
      actionButton.setAttribute('aria-label', 'Price to be confirmed. This product is being prepared for launch.');
    }

    const reassuranceItems = root.querySelectorAll('.product-reassurance-item');
    if (reassuranceItems.length >= 3) {
      const detailItem = reassuranceItems[2];
      const icon = detailItem.querySelector('svg');
      detailItem.textContent = '';
      if (icon) detailItem.appendChild(icon);
      detailItem.append(' Browse details, wishlist, checkout, and payments stay disabled here.');
    }

    replaceTextNodes(root, /Add to Cart/gi, 'Browse details');
    replaceTextNodes(root, /Not available to buy yet/gi, 'Price to be confirmed');
    replaceTextNodes(root, /Preview only/gi, 'Price to be confirmed');
  };

  const init = () => {
    enforceCatalogueLock();
    const root = document.querySelector(PRODUCT_ROOT_SELECTOR);
    if (!root) return;

    const observer = new MutationObserver(() => {
      enforceCatalogueLock();
    });
    observer.observe(root, { childList: true, subtree: true, characterData: true });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }

  document.addEventListener('shopify:section:load', enforceCatalogueLock);
  window.addEventListener('pageshow', enforceCatalogueLock);
})();
