/**
 * Countries visited — ISO 3166-1 alpha-2 codes (two letters).
 * Edit this list; the biography map highlights these regions.
 * Reference: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
 */
(function () {
  var VISITED = [
    'US',
    'CN',
    'GB',
    'FR',
    'DE',
    'JP',
    'KR',
    'CA',
    'AU',
    'SG',
    'CH',
    'NL',
    'IT',
    'ES',
    'AT'
  ];

  function isDarkTheme() {
    if (document.body && document.body.classList.contains('dark-mode')) return true;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function regionStyles() {
    if (isDarkTheme()) {
      return {
        initial: { fill: '#475569', stroke: '#64748b', strokeWidth: 0.35 },
        hover: { fill: '#64748b' },
        selected: { fill: '#2dd4bf', stroke: '#0f766e', strokeWidth: 0.35 },
        selectedHover: { fill: '#5eead4' }
      };
    }
    return {
      initial: { fill: '#e2e8f0', stroke: '#cbd5e1', strokeWidth: 0.45 },
      hover: { fill: '#cbd5e1' },
      selected: { fill: '#0d9488', stroke: '#0f766e', strokeWidth: 0.35 },
      selectedHover: { fill: '#14b8a6' }
    };
  }

  var mapInstance = null;
  var lastThemeKey = null;

  function destroyMap() {
    if (mapInstance && typeof mapInstance.destroy === 'function') {
      mapInstance.destroy();
    }
    mapInstance = null;
    var el = document.getElementById('visited-map');
    if (el) el.removeAttribute('data-map-ready');
  }

  function initMap() {
    if (typeof window.jsVectorMap !== 'function') return;
    var el = document.getElementById('visited-map');
    if (!el || el.getAttribute('data-map-ready')) return;

    el.setAttribute('data-map-ready', '1');
    var rs = regionStyles();

    mapInstance = new window.jsVectorMap({
      selector: '#visited-map',
      map: 'world',
      backgroundColor: 'transparent',
      draggable: true,
      zoomButtons: false,
      zoomOnScroll: true,
      regionsSelectable: false,
      showTooltip: true,
      selectedRegions: VISITED,
      regionStyle: {
        initial: rs.initial,
        hover: rs.hover,
        selected: rs.selected,
        selectedHover: rs.selectedHover
      }
    });
  }

  function themeKey() {
    return isDarkTheme() ? 'dark' : 'light';
  }

  function syncMapIfNeeded() {
    var k = themeKey();
    if (lastThemeKey === k && mapInstance) return;
    lastThemeKey = k;
    destroyMap();
    initMap();
  }

  function boot() {
    lastThemeKey = null;
    syncMapIfNeeded();
  }

  window.addEventListener('resize', function () {
    if (mapInstance && typeof mapInstance.updateSize === 'function') {
      try {
        mapInstance.updateSize();
      } catch (e) {}
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', syncMapIfNeeded);
  }

  var debounceId = null;
  function debouncedSync() {
    if (debounceId) window.clearTimeout(debounceId);
    debounceId = window.setTimeout(function () {
      debounceId = null;
      syncMapIfNeeded();
    }, 120);
  }

  if (typeof MutationObserver !== 'undefined' && document.body) {
    new MutationObserver(debouncedSync).observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });
  }
})();
