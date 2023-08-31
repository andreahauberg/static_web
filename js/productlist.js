const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products/?limit=10&category=" + category)
    .then((res) => res.json())
    .then((data) => {
        data.forEach(showProduct);
    });

function showProduct(data){
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector("h2").textContent = data.productdisplayname;

    if (data.soldout === 0) {
        copy.querySelector(".soldout span").textContent = "Udsolgt";
    } else {
        copy.querySelector(".soldout").style.display = "none";
    }

    if (data.discount !== null) {
        copy.querySelector(".discount span").textContent = data.discount;
    } else {
        copy.querySelector(".discount").style.display = "none";
    }
    copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp`;

    copy.querySelector(".read-more").setAttribute("href", `product.html?id=${data.id}`);

    document.querySelector("main").appendChild(copy);
}
