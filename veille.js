document.getElementById('sort').addEventListener('change', function() {
    const sortValue = this.value;
    const articles = Array.from(document.querySelectorAll('.article'));

    if (sortValue === 'asc') {
        // Tri par note croissante
        articles.sort((a, b) => a.getAttribute('data-rating') - b.getAttribute('data-rating'));
    } else if (sortValue === 'desc') {
        // Tri par note décroissante
        articles.sort((a, b) => b.getAttribute('data-rating') - a.getAttribute('data-rating'));
    } else {
        // Si "Par défaut" est sélectionné, trier par l'ordre initial (data-index)
        articles.sort((a, b) => a.getAttribute('data-index') - b.getAttribute('data-index'));
    }

    // Réorganise les articles dans le DOM
    const articlesContainer = document.getElementById('articles');
    articles.forEach(article => articlesContainer.appendChild(article));
});

window.onscroll = () => {

    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);}