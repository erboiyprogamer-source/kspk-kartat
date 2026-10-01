/* =====================================================================
   custom.markers.js — KAYNNISTIN (yokartta)
   ---------------------------------------------------------------------
   Tama tiedosto EI sisalla merkkilogiikkaa. Se vain lataa jaetun
   koodin sivustorepon puolelta:
     kspk-kotisivut/assets/js/map-markers.js

   uNmINeD ei ylikirjoita tata tiedostoa renderoidessaan, joten se saa
   jaada tanne pysyvasti. Jos se jostain syysta katoaa, menetat vain
   nama rivit — eika sitakaan huomaa sivuston kartta.html:ssa, joka
   ruiskuttaa saman koodin iframeen varmistuksena.

   Jos karttojen osoite joskus muuttuu, muuta vain SRC alla.
   ===================================================================== */
window.KSPK_MAP = { allowBrowserZoom: false };

(function () {
  var SRC = 'https://erboiyprogamer-source.github.io/kspk-kotisivut/assets/js/map-markers.js';
  if (window.__kspkMarkersLoaded) return;
  window.__kspkMarkersLoaded = true;
  var s = document.createElement('script');
  s.src = SRC;
  s.async = false;
  document.head.appendChild(s);
})();
