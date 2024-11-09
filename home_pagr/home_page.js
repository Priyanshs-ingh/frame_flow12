document.addEventListener("DOMContentLoaded", function() {
    // Fetch the JSON data from 'home.json' and then render the page content
    fetch('home.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => renderPage(data.website)) // Use 'renderPage' to handle the fetched JSON data
        .catch(error => console.error('Error loading the JSON data:', error));

    function createElement(tag, text, className) {
        const element = document.createElement(tag);
        if (text) element.textContent = text;
        if (className) element.className = className;
        return element;
    }

    function renderPage(website) {
        const container = document.getElementById('jsonData');
        
        // Navbar
        const navbar = createElement('div', '', 'navbar');
        const title = createElement('h1', website.header.title);
        navbar.appendChild(title);

        const navList = createElement('ul', '', 'nav-links');
        website.header.navigation.forEach(item => {
            const listItem = createElement('li', '');
            const link = createElement('a', item.name);
            link.href = item.link;
            listItem.appendChild(link);
            navList.appendChild(listItem);
        });
        navbar.appendChild(navList);

        const contactButton = createElement('a', website.header.contactButton.text, 'contact-btn');
        contactButton.href = website.header.contactButton.link;
        navbar.appendChild(contactButton);
        container.appendChild(navbar);

        // Hero Section with Image
        const heroSection = createElement('div', '', 'hero');
        const titleArea = createElement('div', '', 'title-area');
        const quote = createElement('p', website.main.hero.subtitle, 'quote');
        titleArea.appendChild(quote);
        const heroTitle = createElement('h2', website.main.hero.title);
        titleArea.appendChild(heroTitle);

        const categoryLinks = createElement('div', '', 'category-links');
        website.main.hero.categories.forEach(category => {
            const link = createElement('a', category.name);
            link.href = "#";
            const span = createElement('span', '★ ');
            link.insertBefore(span, link.firstChild);
            categoryLinks.appendChild(link);
        });
        titleArea.appendChild(categoryLinks);
        heroSection.appendChild(titleArea);

        // Correct the variable declaration and ensure it exists before trying to access it
if (website.main.hero.button && website.main.hero.button.text) {
    const bookButton = createElement('button', website.main.hero.button.text, 'book-button');
    heroSection.appendChild(bookButton);
}

        if (website.main.hero.image) {
            const heroImage = createElement('img', '', 'hero-image');
            heroImage.src = website.main.hero.image;
            heroSection.appendChild(heroImage);
        }
        container.appendChild(heroSection);

        // Community Work Section
        const communityWorkSection = createElement('section', '', 'community-work');
        const communityTitle = createElement('h2', website.communityWork.title);
        communityWorkSection.appendChild(communityTitle);

        const communityGallery = createElement('div', '', 'community-gallery');
        website.communityWork.gallery.forEach(photo => {
            const photoDiv = createElement('div', '', 'photo');
            const img = createElement('img');
            img.src = photo.image;
            img.alt = photo.alt;
            photoDiv.appendChild(img);

            const infoDiv = createElement('div', '', 'info');
            const name = createElement('p', photo.name);
            const date = createElement('span', photo.date);
            const viewButton = createElement('button', 'View Profile ➔');
            infoDiv.appendChild(name);
            infoDiv.appendChild(date);
            infoDiv.appendChild(viewButton);
            photoDiv.appendChild(infoDiv);

            communityGallery.appendChild(photoDiv);
        });
        communityWorkSection.appendChild(communityGallery);
        container.appendChild(communityWorkSection);

        // About Section
        const aboutSection = createElement('section', '', 'about-frame-flow');
        const aboutTitle = createElement('h2', website.aboutSection.title);
        const aboutSubtitle = createElement('h3', website.aboutSection.subtitle);
        const aboutContent = createElement('div', '', 'about-content');

        const aboutImage = createElement('img');
        aboutImage.src = website.aboutSection.image;
        aboutImage.alt = "About Frame Flow";

        const aboutTextDiv = createElement('div', '', 'about-text');
        website.aboutSection.description.forEach(paragraph => {
            const p = createElement('p', paragraph);
            aboutTextDiv.appendChild(p);
        });
        const learnMoreButton = createElement('button', website.aboutSection.button.text);
        aboutTextDiv.appendChild(learnMoreButton);

        aboutContent.appendChild(aboutImage);
        aboutContent.appendChild(aboutTextDiv);
        aboutSection.appendChild(aboutTitle);
        aboutSection.appendChild(aboutSubtitle);
        aboutSection.appendChild(aboutContent);
        container.appendChild(aboutSection);

        // FAQ Section
        const faqSection = createElement('section', '', 'faq-section');
        const faqHeader = createElement('div', '', 'faq-header');
        const faqTitle = createElement('h4', website.faqSection.title);
        const faqSubtitle = createElement('h2', website.faqSection.subtitle);
        faqHeader.appendChild(faqTitle);
        faqHeader.appendChild(faqSubtitle);
        faqSection.appendChild(faqHeader);

        const faqContent = createElement('div', '', 'faq-content');
        website.faqSection.questions.forEach(faq => {
            const faqItem = createElement('details');
            const summary = createElement('summary', faq.question);
            const answer = createElement('p', faq.answer);
            faqItem.appendChild(summary);
            faqItem.appendChild(answer);
            faqContent.appendChild(faqItem);
        });
        faqSection.appendChild(faqContent);
        container.appendChild(faqSection);

        // Footer
        const footer = createElement('footer', '');
        const footerText = createElement('p', website.footer.text);
        footer.appendChild(footerText);

        const footerMenu = createElement('div', '', 'menu');
        website.footer.menu.forEach(item => {
            const menuItem = createElement('span', item.name, 'menu-item');
            footerMenu.appendChild(menuItem);
            const separator = createElement('span', '★', 'star-separator');
            footerMenu.appendChild(separator);
        });
        footer.appendChild(footerMenu);

        const bookButton = createElement('button', website.footer.bookButton.text, 'book-button');
        footer.appendChild(bookButton);

        website.footer.socialMedia.forEach(media => {
            const icon = createElement('img', '', 'social-icon');
            icon.src = media.icon;
            footer.appendChild(icon);
        });
        container.appendChild(footer);
    }
});
