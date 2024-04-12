// Define an object containing translations for each key in different languages
const translations = {
    'en': {
        'post1-title': 'Hello and welcome to alexpenman.com.au !!',
        'post1-content': 'This is still a work in progress, but feel free to look around!'
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
}

// Add click event listeners to all language buttons
document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const lang = button.getAttribute('id'); // Get the language code from the button's id
        changeLanguage(lang); // Change the page language
    });
});