// Define an object containing translations for each key in different languages
const translations = {
    'en': {
        'post1-title': 'Hello and welcome to alexpenman.com.au !!',
        'post1-content': 'This is still a work in progress, but feel free to look around!fsfsdf'
    },
    'es': {
        'post1-title': 'Hola y bienvenido a alexpenman.com.au!!',
        'post1-content': 'Hola y bienvenido a alexpenman.com.au!!.'
    },
    'fr': { 
        'post1-title': 'Bonjour et bienvue sur alexpenman.com.au !!',
        'post1-content': 'Bonjour et bienvenue sur alexpenman.com.au !!'            
    },
    'de': {
        'post1-title': 'Hallo und willkommen bei alexpenman.com.au !!',
        'post1-content': 'Hallo und willkommen bei alexpenman.com.au !!'
    },
    'it': {
        'post1-title': 'Ciao e benvenuto su alexpenman.com.au !!',
        'post1-content': 'Ciao e benvenuto su alexpenman.com.au !!'
    },
    'pt': {         
        'post1-title': 'Olá e bem-vindo ao alexpenman.com.au !!',
        'post1-content': 'Olá e bem-vindo ao alexpenman.com.au !!'
    },
    'ne': {
        'post1-title': 'Nederlands !!',
        'post1-content': 'Nederlands !!'
    },
    'zh': {
        'post1-title': '你好，欢迎来到alexpenman.com.au !!',
        'post1-content': '你好，欢迎来到alexpenman.com.au !!'
    },
    'ja': {
        'post1-title': 'こんにちは、alexpenman.com.auへようこそ !!',
        'post1-content': 'こんにちは、alexpenman.com.auへようこそ !!'
    },
    'ko': {
        'post1-title': '안녕하세요, alexpenman.com.au에 오신 것을 환영합니다 !!',
        'post1-content': '안녕하세요, alexpenman.com.au에 오신 것을 환영합니다 !!'
    },
    'ru': {
        'post1-title': 'Привет и добро пожаловать на alexpenman.com.au !!',
        'post1-content': 'Привет и добро пожаловать на alexpenman.com.au !!'
    },
    'ar': {
        'post1-title': 'مرحبًا بكم في alexpenman.com.au !!',
        'post1-content': 'مرحبًا بكم في alexpenman.com.au !!'
    },
    'hi': {
        'post1-title': 'नमस्ते और alexpenman.com.au में आपका स्वागत है !!',
        'post1-content': 'नमस्ते और alexpenman.com.au में आपका स्वागत है !!'
    },
    'sv': {
        'post1-title': 'Hej och välkommen till alexpenman.com.au !!',
        'post1-content': 'Hej och välkommen till alexpenman.com.au !!'
    },
    'po': {
        'post1-title': 'Cześć i witaj na alexpenman.com.au !!',
        'post1-content': 'Cześć i witaj na alexpenman.com.au !!'
    },
    'da': {
        'post1-title': 'Hej og velkommen til alexpenman.com.au !!',
        'post1-content': 'Hej og velkommen til alexpenman.com.au !!'

    },
    'no': {
        'post1-title': 'Hei og velkommen til alexpenman.com.au !!',
        'post1-content': 'Hei og velkommen til alexpenman.com.au !!'
    },
    'he': {
        'post1-title': 'שלום וברוך הבא ל alexpenman.com.au !!',
        'post1-content': 'שלום וברוך הבא ל alexpenman.com.au !!'
    },
    'gr': {
        'post1-title': 'Γεια και καλώς ήρθατε στο alexpenman.com.au !!',
        'post1-content': 'Γεια και καλώς ήρθατε στο alexpenman.com.au !!'
    },
    'in': {
        'post1-title': 'Selamat datang di vlognya',
        'post1-content': 'Selamat datang di vlognya'           
    },
    'tu': {
        'post1-title': 'Merhaba ve alexpenman.com.au\'ya hoş geldiniz !!',
        'post1-content': 'Merhaba ve alexpenman.com.au\'ya hoş geldiniz !!'
    },
    
};
// Function to change the language of the page
function changeLanguage(lang) {
    // Find all elements with a data-key attribute
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        // Update the text content of the element with the translation
        element.textContent = translations[lang][key];
    });

    // Add the YouTube video when the French language is selected
    if (lang === 'fr') {
        addYoutubeVideo('https://www.youtube.com/embed/lpRsjtbsdeU&list=PLZKXrLIMrZOmQnrI3nCD-svIfK_290_p4', 'LanglaisPlusFacile');
    } else {
        removeYoutubeVideo('LanglaisPlusFacile');
    }

    if (lang === 'it') {
        addYoutubeVideo('https://www.youtube.com/embed/rJ1O_MzGoYo', 'ZeroViewsItalian');
    } else {
        removeYoutubeVideo('ZeroViewsItalian');
    }

    if (lang === 'es') {
        addYoutubeVideo('https://www.youtube.com/shorts/UcS5G36fZSE', 'UnPocoDeLaHistoriaDeLaLenguaInglesa');
    } else {
        removeYoutubeVideo('UnPocoDeLaHistoriaDeLaLenguaInglesa');
    }

    if (lang === 'de') {
        addYoutubeVideo('https://www.youtube.com/embed/7JXGw5e4Z0s', 'LearnGerman');
    } else {
        removeYoutubeVideo('LearnGerman');
    }

    if (lang === 'pt') {
        addYoutubeVideo('https://www.youtube.com/embed/4Y5jG8STm2Y', 'LearnPortuguese');
    } else {
        removeYoutubeVideo('Learn Portuguese');
    }

    if (lang === 'ne') {
        addYoutubeVideo('https://www.youtube.com/embed/9JXJQgJ1B4Y', 'LearnDutch');
    } else {
        removeYoutubeVideo('LearnDutch');
    }

    if (lang === 'zh') {
        addYoutubeVideo('https://www.youtube.com/embed/9JXJQgJ1B4Y', 'LearnChinese');
    } else {
        removeYoutubeVideo('LearnChinese');
    }

    if (lang === 'ja') {
        addYoutubeVideo('https://www.youtube.com/embed/9JXJQgJ1B4Y', 'LearnJapanese');
    } else {
        removeYoutubeVideo('LearnJapanese');
    }

    if (lang === 'ko') {
        addYoutubeVideo('https://www.youtube.com/embed/9JXJQgJ1B4Y', 'LearnKorean');
    } else {
        removeYoutubeVideo('LearnKorean');
    }

    if (lang === 'ru') {
        addYoutubeVideo('https://www.youtube.com/embed/9JXJQgJ1B4Y', 'LearnRussian');
    } else {
        removeYoutubeVideo('RussianWithBeFluent');
    }

    if (lang === 'ar') {
        addYoutubeVideo('https://www.youtube.com/embed/9JXJQgJ1B4Y', 'ArabicWithMaha');
    } else {
        removeYoutubeVideo('ArabicWithMaha');
    }

    if (lang === 'hi') {
        addYoutubeVideo('https://www.youtube.com/embed/9JXJQgJ1B4Y', 'HindiWithAwal');

    if (lang === 'sv') {
        addYoutubeVideo('https://www.youtube.com/embed/9JXJQgJ1B4Y', 'SwedishWithLucas');
    } else {
        removeYoutubeVideo('SwedishWithLucas');
    }

    if (lang === 'po') {
        addYoutubeVideo('https://www.youtube.com/embed/9JXJQgJ1B4Y', 'PolishWithPiotr');
    } else {
        removeYoutubeVideo('PolishWithPiotr');
    }

    if (lang === 'da') {
        addYoutubeVideo('https://www.youtube.com/embed/9JXJQgJ1B4Y', 'DanishWithMorten');
    } else {
        removeYoutubeVideo('DanishWithMorten');
    }

    if (lang === 'no') {
        addYoutubeVideo('https://www.youtube.com/embed/9JXJQgJ1B4Y', 'NorwegianWithArnt');
    } else {
        removeYoutubeVideo('NorwegianWithArnt');
    }

    if (lang === 'he') {
        addYoutubeVideo('https://www.youtube.com/embed/9JXJQgJ1B4Y', 'HebrewWithGuy');
    } else {
        removeYoutubeVideo('HebrewWithGuy');
    }

    if (lang === 'gr') {
        addYoutubeVideo('https://www.youtube.com/embed/9JXJQgJ1B4Y', 'GreekWithDanae');
    } else {
        removeYoutubeVideo('GreekWithDanae');
    }

    if (lang === 'in') {
        addYoutubeVideo('https://www.youtube.com/embed/9JXJQgJ1B4Y', 'IndonesianWithFira');
    } else {
        removeYoutubeVideo('IndonesianWithFira');
    }

    if (lang === 'tu') {
        addYoutubeVideo('https://www.youtube.com/embed/9JXJQgJ1B4Y', 'TurkishWithDeniz');
    } else {
        removeYoutubeVideo('TurkishWithDeniz');
    }

    // Save the selected language in the local storage
    localStorage.setItem('lang', lang);

}

function addYoutubeVideo(url, containerId) {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('width', '560');
    iframe.setAttribute('height', '315');
    iframe.setAttribute('src', url);
    iframe.setAttribute('title', 'YouTube video player');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', '');

    // Replace 'container' with the id of the HTML element where you want to add the video
    document.getElementById(containerId).appendChild(iframe);
}

function removeYoutubeVideo(containerId) {
    // Remove the YouTube video when a language other than French is selected
    const container = document.getElementById(containerId);
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// The modified code to add event listeners to the buttons
document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();  // Stop the default behavior
        var lang = this.id;
        changeLanguage(lang);
    });
});