fetch("https://kea-alt-del.dk/t7/api/categories")
    .then(res => res.json())
    .then(showCategories)

    function showCategories(cats){ // Renamed function
        cats.forEach(showCategory)
    }

    function showCategory(cat){
        const template = document.querySelector("template").content;

        const clone = template.cloneNode(true);

        clone.querySelector("a").textContent=cat.category;
        clone.querySelector("a").href = `productlist.html?category=${cat.category}`;

        document.querySelector("#categories").appendChild(clone);
    }
