document.getElementById('btn-en').addEventListener('click', function() {
    setLanguage('en');
});

document.getElementById('btn-es').addEventListener('click', function() {
    setLanguage('es');
});

function setLanguage(lang) {
    if (lang === 'en') {
        document.getElementById('content-en').style.display = '';
        document.getElementById('content-es').style.display = 'none';
    } else if (lang === 'es') {
        document.getElementById('content-en').style.display = 'none';
        document.getElementById('content-es').style.display = '';
    }
    localStorage.setItem('selectedLanguage', lang);
}

function getStoredLanguage() {
    const storedLang = localStorage.getItem('selectedLanguage');
    if (storedLang) {
        setLanguage(storedLang);
    }
}

// Initialize the website with the stored language preference
getStoredLanguage();
