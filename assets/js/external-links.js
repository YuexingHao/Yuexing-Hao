// Open off-site links and downloadable files in a new tab, so the page stays put.
// Same-site pages (nav, blog, press, ...) keep opening in the current tab.
(function () {
  var here = window.location;
  var fileRe = /\.(pdf|docx?|pptx?|xlsx?|zip|png|jpe?g|gif|svg|txt|csv|bib)$/i;
  var links = document.querySelectorAll('a[href]');
  for (var i = 0; i < links.length; i++) {
    var a = links[i];
    var href = a.getAttribute('href') || '';
    if (!href || href.charAt(0) === '#') continue;
    if (/^(mailto|tel|javascript):/i.test(href)) continue;
    var url;
    try { url = new URL(href, here.href); } catch (e) { continue; }
    if (url.protocol !== 'http:' && url.protocol !== 'https:') continue;
    var offSite = url.origin !== here.origin;
    var isFile = fileRe.test(url.pathname);
    if (!offSite && !isFile) continue;
    a.setAttribute('target', '_blank');
    var rel = (a.getAttribute('rel') || '').split(/\s+/).filter(Boolean);
    if (rel.indexOf('noopener') === -1) rel.push('noopener');
    a.setAttribute('rel', rel.join(' '));
  }
})();
