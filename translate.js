function loadGoogleTranslateScript(callback) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = '//translate.google.com/translate_a/element.js?cb=' + callback;
  document.head.appendChild(script);
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'nl,de,fr',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

// Load the Google Translate script and init
loadGoogleTranslateScript('googleTranslateElementInit');

function translateTo(lang) {
  const langMap = {
    dutch: 'nl',
    german: 'de',
    french: 'fr'
  };
  const select = document.querySelector('.goog-te-combo');
  if (select) {
    select.value = langMap[lang];
    select.dispatchEvent(new Event('change'));
  }
}

