// booking.js
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var lesson = document.getElementById('lesson').value;
    var date = document.getElementById('date').value;

    console.log('Name: ' + name);
    console.log('Lesson: ' + lesson);
    console.log('Date: ' + date);
});



const translations = {

    'en': {
        'post1-title': 'JS IS WORKING !!',
        'post1-content': 'JavaScript IS WORKING !!',
        'dateGame-button': 'Play Date Game'
    },
    'es': {
        'post1-title': 'SUCESS SUCCESS SUCCESS !!',
        'post1-content': 'YOU WIN!!!!.'
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
    }
}



// Get the selected language from the local storage 
const lang = localStorage.getItem('lang') || 'en';
changeLanguage(lang);

function changeLanguage(lang) {
    // Find all elements with a data-key attribute
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            // Update the text content of the element with the translation
            element.textContent = translations[lang][key];
        } else {
            console.log('No translations found for language:', lang);
        }
        if (key === 'dateGame-button') {
            element.textContent = translations[lang][key];
            element.addEventListener('click', function() {
                window.location.href = 'dateGame.html';
            });
        } else {
            element.textContent = translations[lang][key];
        }
    });
}



