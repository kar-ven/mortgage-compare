function loadGoogleTranslate() {
  var gt = document.createElement('script');
  gt.type = 'text/javascript';
  gt.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  document.body.appendChild(gt);
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    autoDisplay: false
  }, 'google_translate_element');
}

function translateTo(lang) {
  if (!window.google || !window.google.translate) {
    loadGoogleTranslate();
    setTimeout(() => {
      doTranslate(lang);
    }, 1000); // wait for load
  } else {
    doTranslate(lang);
  }
}

function doTranslate(lang) {
  const frame = document.querySelector('iframe.goog-te-menu-frame');
  if (frame) {
    const innerDoc = frame.contentDocument || frame.contentWindow.document;
    const langLinks = innerDoc.querySelectorAll('.goog-te-menu2-item span.text');
    for (let i = 0; i < langLinks.length; i++) {
      if (langLinks[i].innerText.toLowerCase().includes(lang)) {
        langLinks[i].click();
        break;
      }
    }
  } else {
    setTimeout(() => doTranslate(lang), 500);
  }
}
