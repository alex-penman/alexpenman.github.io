console.log('Script is running');

// Rest of your code...

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



// Object with YouTube videos for each language
const videos = {
    'en': 'https://www.youtube.com/embed/v=vmEuTH3E3FE&t=1s',
    'es': 'https://www.youtube.com/embed/UcS5G36fZSE',
    'fr': 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    'de': 'https://www.youtube.com/embed/3tBqdKGiqnI',
    'it': 'https://www.youtube.com/embed/rJ1O_MzGoYo',
    'pt': 'https://www.youtube.com/embed/FmMj0Qj84bI',
    'ne': 'https://www.youtube.com/embed/3tBqdKGiqnI',
    'zh': 'https://www.youtube.com/embed/3tBqdKGiqnI',
    'ja': 'https://www.youtube.com/embed/3tBqdKGiqnI',
    'ko': 'https://www.youtube.com/embed/3tBqdKGiqnI',
    'ru': 'https://www.youtube.com/embed/3tBqdKGiqnI',
    'ar': 'https://www.youtube.com/embed/3tBqdKGiqnI',
    'hi': 'https://www.youtube.com/embed/3tBqdKGiqnI',
    'sv': 'https://www.youtube.com/embed/3tBqdKGiqnI',
    'po': 'https://www.youtube.com/embed/Mudr4WtRimg',
    'da': 'https://www.youtube.com/embed/3tBqdKGiqnI',
    'no': 'https://www.youtube.com/embed/3tBqdKGiqnI',
    'he': 'https://www.youtube.com/embed/_tSnSN27Zy0',
    'gr': 'https://www.youtube.com/embed/3tBqdKGiqnI',
    'in': 'https://www.youtube.com/embed/gTaBOPNWyCk',
    'tu': 'https://www.youtube.com/embed/3tBqdKGiqnI',

    // ... add more languages here ...
};

// Get the selected language from the local storage 
const lang = localStorage.getItem('lang') || 'en';
changeLanguage(lang);

function changeLanguage(lang) {
    // Find all elements with a data-key attribute
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        // Update the text content of the element with the translation
        element.textContent = translations[lang][key];
    });

    // Look up the video for the selected language
    const video = videos[lang];
    if (video) {
        updateYoutubeVideo(video, 'video1');
    } else {
        console.log('No video found for language:', lang);
    }
}

function updateYoutubeVideo(url, containerId) {
    // Remove any existing video
    const container = document.getElementById(containerId);
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Add the new video
    var iframe = document.createElement('iframe');
    iframe.setAttribute('width', '560');
    iframe.setAttribute('height', '315');
    iframe.setAttribute('src', url);
    iframe.setAttribute('title', 'YouTube video player');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', '');

    container.appendChild(iframe);
}

// The modified code to add event listeners to the buttons
document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();  // Stop the default behavior
        var lang = this.id;
        console.log('Button clicked, language:', lang);  // Add this line
        changeLanguage(lang);
    });
});