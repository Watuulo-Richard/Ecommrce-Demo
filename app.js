
const productsContainer = document.querySelector(".products-container")
const API = 'https://fakestoreapi.com/products'

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
async function fetchingAPIData(){
    try {
        const response = await fetch(API)
        const fetchedData = await response.json()
        console.log(fetchedData)
        displayFetchedDataOnUI(fetchedData)
    }catch(error){
        console.log('Something Went Wrong, Take A Look At Your Code Again...!!!', error)
    }
}
fetchingAPIData()
function displayFetchedDataOnUI(data){
    data.forEach((product)=>{
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="products-item">
                <div class="product-title">
                    <h3 class='line-clamp'>${product.title}</h3>
                </div>
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="product-price">
                    <p>$${product.price}</p>
                    <a href="./detailsPage.html?id=${product.id}" class="btn">View Product Details</a>
                </div>
            </div>
        `
        productsContainer.appendChild(div)
    })
}

