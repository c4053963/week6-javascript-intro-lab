(() => {
    let url = window.location.href;
    
    // Extract just the filename from the URL by splitting on '/' and taking the last part
    // e.g., "https://example.com/pages/about.html" becomes "about.html"
    let filename = url.split('/').pop();
    if (!filename) filename = 'index.html';
    let allLinks = document.querySelectorAll('nav ul li a');
    allLinks.forEach(link => {
        let linkHref = link.getAttribute('href');
        let thisName = linkHref.split('/').pop();
        if (!thisName) thisName = 'index.html';
        if (thisName === filename) {
            link.parentElement.classList.add('currentPage');
        }
    });
})();