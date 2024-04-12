// Define an object containing translations for each key in different languages
const translations = {
    'en': {
        'post1-title': 'Blog Post Title',
        'post1-content': 'This is a sample blog post content in English.'
    },
    'es': {
        'post1-title': 'Título del Post del Blog',
        'post1-content': 'Este es un ejemplo de contenido de un post del blog en Español.'
    },
    // Add more languages here...
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