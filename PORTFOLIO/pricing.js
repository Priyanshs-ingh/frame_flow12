// Fetch pricing data from the JSON file
fetch('pricingData.json')
    .then(response => response.json())
    .then(pricingData => {
        function showPricing(tier) {
            document.querySelectorAll('.tab-button').forEach(button => {
                button.classList.remove('active');
            });
            document.querySelector(`.tab-button[onclick="showPricing('${tier}')"]`).classList.add('active');
        
            const pricingContent = document.getElementById('pricingContent');
            const data = pricingData[tier];
            
            pricingContent.innerHTML = `
                <div class="pricing-content">
                    <h2>${tier.charAt(0).toUpperCase() + tier.slice(1)}</h2>
                    <div class="price">${data.price}</div>
                    <p>${data.description}</p>
                    <div class="delivery-time">🕒 ${data.delivery}</div>
                    <ul class="features">
                        ${data.features.map(feature => `<li>✔️ ${feature}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        // Default pricing on page load
        document.addEventListener("DOMContentLoaded", () => showPricing('basic'));
    })
    .catch(error => console.error("Error loading pricing data:", error));
