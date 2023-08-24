fetch("https://kea-alt-del.dk/t7/api/products?limit=4")
    .then((res) => res.json())
    .then((data) => {
        data.forEach(showProduct);
    });

function showProduct(data){
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector("h2").textContent = data.productdisplayname;
    copy.querySelector(".soldout").textContent = data.soldout;
    copy.querySelector(".discount").textContent = data.discount;
    copy.querySelector(
        "img"
    ).src = `https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp`;
    document.querySelector("main").appendChild(copy);
}