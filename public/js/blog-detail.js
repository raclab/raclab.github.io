// blog-detail.js
// Loads the specific blog post from URL parameter and injects bilingual content

function renderBlogDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('id');

    const contentDiv = document.getElementById('blog-content');
    const lang = (typeof I18N !== 'undefined' ? I18N.currentLang : localStorage.getItem('raclab_lang')) || 'en';

    if (blogId && blogData[blogId]) {
        const blog = blogData[blogId];

        // Update page title natively
        document.getElementById('page-title').textContent = blog.title[lang] + ' - RACLAB Blog';

        // Translation for dynamic buttons
        const btnText = lang === 'en' ? 'Back to Blog' : 'Blog Sayfasına Dön';

        // Build HTML
        let contentHTML = `
            <div class="blog-detail">
                <img src="${blog.image}" alt="${blog.title[lang]}">
                <h1>${blog.title[lang]}</h1>
                <small class="date">${blog.date[lang]}</small>
        `;

        // Add paragraphs
        blog.content[lang].forEach(paragraph => {
            contentHTML += `<p>${paragraph}</p>`;
        });

        contentHTML += `
                <a href="blog.html" class="back-btn"><i class="fa-solid fa-arrow-left"></i> ${btnText}</a>
            </div>
        `;

        contentDiv.innerHTML = contentHTML;

    } else {
        // Blog not found
        const errorTitle = lang === 'en' ? 'Blog Post Not Found' : 'Blog yazısı bulunamadı.';
        const errorBtn = lang === 'en' ? 'Back to Blog' : 'Blog Sayfasına Dön';

        contentDiv.innerHTML = `
            <div class="error-message">
                <h1>404</h1>
                <p>${errorTitle}</p>
                <a href="blog.html" class="back-btn"><i class="fa-solid fa-arrow-left"></i> ${errorBtn}</a>
            </div>
        `;
    }
}

// Render initially
document.addEventListener('DOMContentLoaded', renderBlogDetail);

// Hook into the i18n switcher event
document.addEventListener('languageChanged', renderBlogDetail);
