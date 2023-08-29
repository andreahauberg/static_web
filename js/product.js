const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
    .then(response => response.json())
    .then(data => showProductDetail(data)); // Renamed function

function showProductDetail(product){ // Renamed function
    console.log(product);
    document.querySelector("h3").textContent = product.productdisplayname;
    document.querySelector(".brand").textContent = product.brandname;
    document.querySelector(".type").textContent = product.articletype;
    document.querySelector(".price").textContent = product.price;
    document.querySelector(".production").textContent = product.productionyear;
    document.querySelector(".gender").textContent = product.gender;
    document.querySelector(".season").textContent = product.season;

    document.querySelector(
        ".product img"
    ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    // Removed the erroneous line: document.querySelector("main").appendChild(copy);
}

// gender	"Men"
// category	"Apparel"
// subcategory	"Topwear"
// articletype	"Tshirts"
// season	"Summer"
// productionyear	2011
// usagetype	"Sports"
// productdisplayname	"Sahara Team India Fanwear Round Neck Jersey"
// price	895
// discount	null
// brandname	"Nike"
// soldout	0