async function fetchcallback() {
    let res = "";
    const url = 'https://real-time-amazon-data.p.rapidapi.com/search?query=Phone&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL&is_prime=false&deals_and_discounts=NONE';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '95bc5cf205msh7f97037baccc849p1766cbjsnfd6151a4f2fb',
            'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const jsData = await response.json();
        jsData.data.products.forEach(cv => {
            res = res + `
                <div class="product-card">
                    <div class="imageclass">
                        <img src="${cv.product_photo}"  >
                    </div>
                    <div class="details">
                        <div class="basicinfo">
                            <div class="title"> ${cv.product_title} </div>
                            <div class="rating"> ⭐ ${cv.product_star_rating} </div>
                            <div class="price">  ${cv.product_price} </div>
                            <button class="buy-btn" onclick="window.open('${cv.product_url}', '_blank')"> Buy Now </button>
                        </div>
                    </div>
                </div>
            `;
            console.log(cv.product_title);
        });
        document.getElementById("output").innerHTML = res;
    }
    catch (error) {
        console.error(error);
    }
}