const langEl = document.querySelectorAll('.lang-btn');
const titleEl = document.querySelector('h1');
const post1Title = document.querySelector('#post1 h2');
const post1Content = document.querySelector('#post1 p');

const lang = {
    'en': {
        'post1-title': 'Blog Post Title',
        'post1-content': 'This is a sample blog post content in English.'
    },
    'es': {
        'post1-title': 'Título del Post del Blog',
        'post1-content': 'Este es un ejemplo de contenido de post de blog en Español.'
    }
};

langEl.forEach(el => {
    el.addEventListener('click', () => {
        // Change the language of the posts
        post1Title.textContent = lang[el.id]['post1-title'];
        post1Content.textContent = lang[el.id]['post1-content'];
        
        // Update the lang attribute of the html tag
        document.documentElement.lang = el.id;
    });
});
