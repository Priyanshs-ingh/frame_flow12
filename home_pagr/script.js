// document.addEventListener('DOMContentLoaded', function() {
//     // Populate Navbar
//     const navbar = document.getElementById('navbar');
//     navbar.innerHTML = `
//         <h1>${data.navigation.logo}</h1>
//         <nav>
//             <ul class="nav-links">
//                 ${data.navigation.links.map(link => `
//                     <li><a href="${link.url}">${link.text}</a></li>
//                 `).join('')}
//             </ul>
//         </nav>
//         <a href="${data.navigation.contactButton.url}" class="contact-btn">${data.navigation.contactButton.text}</a>
//     `;

//     // Populate Hero Section
//     const hero = document.getElementById('hero');
//     hero.innerHTML = `
//         <div class="title-area">
//             <p class="quote">${data.hero.quote}</p>
//             <h2>${data.hero.title}</h2>
//             <div class="category-links">
//                 ${data.hero.categories.map(category => `
//                     <span>&starf;</span><a href="#">${category.name}</a>
//                 `).join('')}
//             </div>
//         </div>
//         <button class="book-button">
//             Book Right Now!
//             <i class="arrow-icon">&#10142;</i>
//         </button>
//     `;

//     // Populate Community Work Section
//     const communityWork = document.getElementById('community-work');
//     communityWork.innerHTML = `
//         <h2>${data.communityWork.title}</h2>
//         <div class="community-gallery">
//             ${data.communityWork.photos.map(photo => `
//                 <div class="photo">
//                     <img src="images/${photo.image}" alt="Community Work">
//                     <div class="info">
//                         <p>${photo.photographer}</p>
//                         <span>${photo.date}</span>
//                         <button>View Profile &#10142;</button>
//                     </div>
//                 </div>
//             `).join('')}
//         </div>
//         <a href="#" class="view-all">View All Works →</a>
//     `;

//     // Populate About Section
//     const about = document.getElementById('about');
//     about.innerHTML = `
//         <h2>${data.about.title}</h2>
//         <h3>${data.about.subtitle}</h3>
//         <div class="about-content">
//             <img src="images/${data.about.image}" alt="About Frame Flow">
//             <div class="about-text">
//                 ${data.about.paragraphs.map(paragraph => `
//                     <p>${paragraph}</p>
//                 `).join('')}
//                 <button>Learn more</button>
//             </div>
//         </div>
//     `;

//     // Populate FAQ Section
//     const faq = document.getElementById('faq');
//     faq.innerHTML = `
//         <div class="faq-header">
//             <h4>${data.faq.title}</h4>
//             <h2>${data.faq.subtitle}</h2>
//         </div>
//         <div class="faq-content">
//             ${createFAQColumns()}
//         </div>
//     `;

//     // Populate Testimonials Section
//     const testimonials = document.getElementById('testimonials');
//     testimonials.innerHTML = `
//         <h6>${data.testimonials.title}</h6>
//         <h1>${data.testimonials.subtitle}</h1>
//         <p class="total-reviews">Total Reviews ${data.testimonials.totalReviews}</p>
//         <div class="testimonials">
//             ${data.testimonials.reviews.map(review => `
//                 <div class="testimonial">
//                     <p class="name">${review.name}</p>
//                     <p class="location">${review.location}</p>
//                     <p class="review">${review.review}</p>
//                     <div class="rating">
//                         ${createStarRating(review.rating)}
//                     </div>
//                     <div class="social-links">
//                         ${data.footer.socialIcons.map(icon => `
//                             <a href="#"><img src="images/${icon.image}" alt="${icon.name}"></a>
//                         `).join('')}
//                     </div>
//                 </div>
//             `).join('')}
//         </div>
//     `;

//     // Populate Footer
//     const footer = document.getElementById('footer');
//     footer.innerHTML = `
//         <div class="footer-content">
//             <div class="menu">
//                 ${data.footer.menu.map((item, index) => `
//                     <span class="menu-item">${item}</span>
//                     ${index < data.footer.menu.length - 1 ? '<span class="star-separator">&#9733;</span>' : ''}
//                 `).join('')}
//             </div>
//             <div class="book-now">
//                 <button class="book-button">BOOK RIGHT NOW!</button>
//             </div>
//             <div class="footer-links">
//                 ${createFooterColumns()}
//             </div>
//             <div class="social-icons">
//                 ${data.footer.socialIcons.map(icon => `
//                     <a href="#"><img src="images/${icon.image}" alt="${icon.name}"></a>
//                 `).join('')}
//             </div>
//         </div>
//     `;
// });

// // Helper Functions
// function createStarRating(rating) {
//     return '★'.repeat(rating) + '☆'.repeat(5 - rating);
// }

// function createFAQColumns() {
//     const midpoint = Math.ceil(data.faq.questions.length / 2);
//     const firstColumn = data.faq.questions.slice(0, midpoint);
//     const secondColumn = data.faq.questions.slice(midpoint);

//     return `
//         <div class="faq-column">
//             ${firstColumn.map(q => `
//                 <details>
//                     <summary>${q.question}</summary>
//                     <p>${q.answer}</p>
//                 </details>
//             `).join('')}
//         </div>
//         <div class="faq-column">
//             ${secondColumn.map(q => `
//                 <details>
//                     <summary>${q.question}</summary>
//                     <p>${q.answer}</p>
//                 </details>
//             `).join('')}
//         </div>
//     `;
// }

// function createFooterColumns() {
//     return Object.entries(data.footer.links).map(([title, links]) => `
//         <div class="footer-column">
//             <h4>${title}</h4>
//             ${links.map(link => `
//                 <a href="#">${link}</a>
//             `).join('')}
//         </div>
//     `).join('');
// }





fetch('content.json')
    .then(response => response.json())
    .then(data => {
        // Header
        document.getElementById('site-title').textContent = data.header.title;
        const navLinks = document.getElementById('nav-links');
        data.header.navLinks.forEach(link => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${link.link}">${link.text}</a>`;
            navLinks.appendChild(li);
        });
        const contactBtn = document.getElementById('contact-btn');
        contactBtn.textContent = data.header.contactBtn.text;
        contactBtn.href = data.header.contactBtn.link;

        // Hero Section
        document.getElementById('hero-quote').textContent = data.hero.quote;
        document.getElementById('hero-title').textContent = data.hero.title;
        const categoryLinks = document.getElementById('category-links');
        data.hero.categories.forEach(category => {
            const span = document.createElement('span');
            span.innerHTML = `&#9733; <a href="${category.link}">${category.text}</a>`;
            categoryLinks.appendChild(span);
        });
        document.getElementById('book-button').textContent = data.hero.bookButton;

        // Populate other sections similarly...
    })
    .catch(error => console.error('Error loading content:', error));
