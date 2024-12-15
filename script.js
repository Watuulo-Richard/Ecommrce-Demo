const singleDetailProductContainer = document.querySelector('.product-details-container')


// showing the spinner
document.addEventListener('DOMContentLoaded', ()=>{
    const spinnerLoader = document.querySelector('.loading')
    const mainContainer = document.querySelector(".main-container");
    spinnerLoader.classList.remove('hidden')
    mainContainer.classList.add("hidden");
    
})
//remove spinner
window.addEventListener('load', ()=>{
    const spinnerLoader = document.querySelector('.loading')
    const mainContainer = document.querySelector(".main-container");
    setTimeout(() => {
        spinnerLoader.style.display = 'none';
        mainContainer.classList.remove("hidden");
    }, 3000);
    
})



async function fetchingASingleProduct(){
    const productId = new URLSearchParams(window.location.search).get('id')
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
    const singleFetchedProduct = await response.json()
    console.log(singleFetchedProduct, productId)
    displaySingleProductOnUI(singleFetchedProduct)
}
fetchingASingleProduct()

function displaySingleProductOnUI(singleFetchedProduct) {
    singleDetailProductContainer.innerHTML = ''
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="products-image">
                <img src="${singleFetchedProduct.image}" alt="${singleFetchedProduct.title}">
            </div>
            <div class="products-details">
                <div class="product-details-heading">
                    <h2>Product Details</h2>
                </div>
                <div class="product-details-heading-container">
                    <div class="product-details-text">
                        <p>Brand/Category</p>
                        <h3>${singleFetchedProduct.category}</h3>
                    </div>
                    <div class="sale-image">
                        <img src="./Images/3dMe.png" alt="">
                    </div>
                </div>
                <div class="product-subHeading">
                    <h3>${singleFetchedProduct.price}</h3>
                    <p>+ shipping & handling</p>
                </div>
                <div class="detail-buttons">
                    <button type="button" class="btn buy-now">Buy now</button>
                    <button type="button" class="btn add-cart"><i class="fa-solid fa-cart-arrow-down"></i> Add to cart</button>
                </div>
                <div class="how-we-work">
                    <div class="one">
                        <i class="fa-solid fa-cube"></i>Express next-day delivery
                    </div>
                    <div class="two">
                        <i class="fa-regular fa-clock"></i> Order within 24 hours
                    </div>
                </div>
                <div class="description">
                    <h3>Description</h3>
                    <p>${singleFetchedProduct.description}</p>
                </div>
            </div>
        `
        singleDetailProductContainer.appendChild(div)
    
}