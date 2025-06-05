function translateTo(language) {
  const languages = {
    dutch: 'nl',
    german: 'de',
    french: 'fr',
  };
  const langCode = languages[language];
  const frame = document.querySelector('iframe.goog-te-banner-frame');
  const select = document.querySelector('.goog-te-combo');
  if (select && langCode) {
    select.value = langCode;
    select.dispatchEvent(new Event('change'));
  } else {
    console.error('Google Translate not loaded yet');
  }
}

// Load Google Translate dynamically
function loadGoogleTranslate() {
  const gt = document.createElement('script');
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

window.onload = loadGoogleTranslate;
