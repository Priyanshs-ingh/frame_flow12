
// Fetch pricing data from the JSON file
let pricingData = {};

fetch('pricingData.json')
    .then(response => response.json())
    .then(data => {
        pricingData = data;
        showPricing('basic');  // Show default pricing on page load
    })
    .catch(error => console.error("Error loading pricing data:", error));

function showPricing(tier) {
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.tab-button[onclick="showPricing('${tier}')"]`).classList.add('active');

    const pricingContent = document.getElementById('pricingContent');
    const data = pricingData[tier];
    
    if (data) {
        pricingContent.innerHTML = `
            <div class="pricing-content">
                <h2>${tier.charAt(0).toUpperCase() + tier.slice(1)}</h2>
                <br>
                <div class="price">${data.price}</div>
                <br>
                <p>${data.description}</p>
                <div class="delivery-time">🕒 ${data.delivery}</div>
                <br>
                <ul class="features">
                    ${data.features.map(feature => `<li>✔️ ${feature}</li>`).join('')}
                </ul>
            </div>
        `;
    } else {
        pricingContent.innerHTML = `<p>No data available for this tier.</p>`;
    }
}
