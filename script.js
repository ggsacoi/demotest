const article = document.querySelector('article');

    article.addEventListener('click', () => {
        article.classList.toggle('active');
    });