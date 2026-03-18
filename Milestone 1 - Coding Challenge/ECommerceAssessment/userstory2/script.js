const productContainer = document.getElementById("products");
const loading = document.getElementById("loading");
const categoryFilter = document.getElementById("categoryFilter");
const priceSort = document.getElementById("priceSort");

let allProducts = [];

// FETCH API with async/await
async function fetchProducts() {
    try {
        const response = await fetch("products.json");

        if (!response.ok) {
            throw new Error("Network response not ok");
        }

        const data = await response.json();
        allProducts = data;

        loading.style.display = "none";
        displayProducts(allProducts);

    } catch (error) {
        loading.textContent = "Failed to load products. Please try again.";
        loading.classList.remove("text-primary");
        loading.classList.add("text-danger");
    }
}

// DYNAMIC DOM RENDERING
function displayProducts(products) {
    productContainer.innerHTML = "";

    products.forEach(product => {
        const col = document.createElement("div");
        col.className = "col-md-3";

        col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="${product.image}" 
                     class="card-img-top"
                     style="height:160px; object-fit:cover;">
                <div class="card-body text-center">
                    <h6>${product.title}</h6>
                    <p class="text-muted">${product.category}</p>
                    <p class="fw-bold text-success">$${product.price}</p>
                </div>
            </div>
        `;

        productContainer.appendChild(col);
    });
}

// FILTER + SORT
function applyFilters() {
    let filtered = [...allProducts];

    const selectedCategory = categoryFilter.value;
    const selectedSort = priceSort.value;

    if (selectedCategory !== "all") {
        filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (selectedSort === "low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (selectedSort === "high") {
        filtered.sort((a, b) => b.price - a.price);
    }

    displayProducts(filtered);
}

categoryFilter.addEventListener("change", applyFilters);
priceSort.addEventListener("change", applyFilters);

fetchProducts();
