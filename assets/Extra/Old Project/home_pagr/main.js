// Fetch and load the JSON data
async function loadData() {
    try {
        const response = await fetch('frameflow-data.json');
        const data = await response.json();
        initializeComponents(data);
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

function initializeComponents(data) {
    renderCommunityGallery(data.communityWork);
    renderFAQ(data.faq);
    renderTestimonials(data.testimonials);
    renderFooter(data.footer);
}

function renderCommunityGallery(data) {
    const galleryContainer = document.getElementById("communityGallery");
    if (!galleryContainer) return;

    // Add title
    const title = document.createElement("h2");
    title.textContent = data.title;
    galleryContainer.parentElement.insertBefore(title, galleryContainer);
    
    data.gallery.forEach(item => {
        const photoDiv = document.createElement("div");
        photoDiv.classList.add("photo");

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.altText;
        photoDiv.appendChild(img);

        const infoDiv = document.createElement("div");
        infoDiv.classList.add("info");

        const name = document.createElement("p");
        name.textContent = item.name;
        infoDiv.appendChild(name);

        const date = document.createElement("span");
        date.textContent = item.date;
        infoDiv.appendChild(date);

        const button = document.createElement("button");
        button.innerHTML = item.profileButton;
        infoDiv.appendChild(button);

        photoDiv.appendChild(infoDiv);
        galleryContainer.appendChild(photoDiv);
    });
}

function renderFAQ(data) {
    const headerContainer = document.getElementById("faqHeader");
    const contentContainer = document.getElementById("faqContent");
    if (!headerContainer || !contentContainer) return;

    // Render header
    headerContainer.innerHTML = `
        <h4>${data.header.title}</h4>
        <h2>${data.header.subtitle}</h2>
    `;

    // Render questions
    data.questions.forEach(item => {
        const details = document.createElement("details");
        details.innerHTML = `
            <summary>${item.question}</summary>
            <p>${item.answer}</p>
        `;
        contentContainer.appendChild(details);
    });
}

function renderTestimonials(data) {
    const section = document.getElementById("testimonialsSection");
    if (!section) return;

    section.innerHTML = `
        <div class="testimonials-header">
            <h6>${data.header.smallTitle}</h6>
            <h1>${data.header.mainTitle}</h1>
            <p class="total-reviews">Total Reviews ${data.header.totalReviews}</p>
        </div>
        <div class="testimonials">
            ${data.items.map(testimonial => `
                <div class="testimonial">
                    <p class="name">${testimonial.name}</p>
                    <p class="location">${testimonial.location}</p>
                    <p class="review">${testimonial.review}</p>
                    <div class="rating">
                        ${'★'.repeat(testimonial.rating)}
                    </div>
                    <div class="social-links">
                        ${testimonial.socialLinks.map(link => `
                            <a href="${link.url}">
                                <img src="${link.icon}" alt="${link.platform}">
                            </a>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderFooter(data) {
    const footerContent = document.querySelector('.footer-content');
    if (!footerContent) return;

    // Render menu
    const menuHtml = `
        <div class="menu">
            ${data.menu.map((item, index) => `
                <span class="menu-item">${item}</span>
                ${index < data.menu.length - 1 ? '<span class="star-separator">★</span>' : ''}
            `).join('')}
        </div>
    `;

    // Render footer links
    const linksHtml = `
        <div class="footer-links">
            ${Object.entries(data.links).map(([key, section]) => `
                <div class="footer-column">
                    <h4>${section.title}</h4>
                    ${section.items.map(item => `
                        <a href="#">${item}</a>
                    `).join('')}
                </div>
            `).join('')}
        </div>
    `;

    // Render social icons
    const socialHtml = `
        <div class="social-icons">
            ${data.socialIcons.map(icon => `
                <a href="#"><img src="${icon.icon}" alt="${icon.platform}"></a>
            `).join('')}
        </div>
    `;

    footerContent.innerHTML = menuHtml + linksHtml + socialHtml;
}

// Initialize the application
document.addEventListener('DOMContentLoaded', loadData);