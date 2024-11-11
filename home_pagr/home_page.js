document.addEventListener("DOMContentLoaded", function() {
    fetch('FrameFlowData.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Check the output in your browser's console to ensure data is loaded
            // Further processing or function calls to handle data
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });




    function renderCommunityGallery(data) {
        const galleryContainer = document.getElementById("communityGallery");
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
        const title = document.createElement("h4");
        title.textContent = data.faqHeader.title;
        const subtitle = document.createElement("h2");
        subtitle.textContent = data.faqHeader.subtitle;
        headerContainer.appendChild(title);
        headerContainer.appendChild(subtitle);
        const faqContent = document.getElementById("faqContent");
        data.faqs.forEach(faq => {
            const details = document.createElement("details");
            const summary = document.createElement("summary");
            summary.textContent = faq.question;
            const answer = document.createElement("p");
            answer.textContent = faq.answer;
            details.appendChild(summary);
            details.appendChild(answer);
            faqContent.appendChild(details);
        });
    }

    function renderTestimonials(data) {
        const section = document.getElementById("testimonialsSection");
        const header = document.createElement("div");
        header.innerHTML = `<h6>${data.header.smallTitle}</h6><h1>${data.header.mainTitle}</h1><p class="total-reviews">Total Reviews ${data.header.totalReviews}</p>`;
        section.appendChild(header);
        const testimonialsContainer = document.createElement("div");
        testimonialsContainer.classList.add("testimonials");
        data.testimonials.forEach(testimonial => {
            const testimonialDiv = document.createElement("div");
            testimonialDiv.classList.add("testimonial");
            testimonialDiv.innerHTML = `<p class="name">${testimonial.name}</p><p class="location">${testimonial.location}</p><p class="review">${testimonial.review}</p>`;
            const ratingDiv = document.createElement("div");
            ratingDiv.classList.add("rating");
            for (let i = 0; i < testimonial.rating; i++) {
                const star = document.createElement("span");
                star.classList.add("star");
                star.innerHTML = "&#9733;";
                ratingDiv.appendChild(star);
            }
            testimonialDiv.appendChild(ratingDiv);
            testimonialsContainer.appendChild(testimonialDiv);
        });
        section.appendChild(testimonialsContainer);
    }
});
