fetch("https://kea-alt-del.dk/t7/api/products/1163")
    .then(response=>response.json())
    .then(data=>showProduct(data));


    function showProduct(product){
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
        document.querySelector("main").appendChild(copy);
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