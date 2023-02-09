var wishlistDetails = JSON.parse(localStorage.getItem("cartValue")) || [];



displayData();
function displayData() {
    wishlistDetails.map(function (elem) {
        var productDetails = document.createElement("div");
        var productCategory = document.createElement("p");
        productCategory.textContent = elem.name;
        var productImage = document.createElement("img");
        productImage.setAttribute("src", elem.image_url)
        var productName = document.createElement("h2");
        productName.textContent = elem.pName;
        var productType = document.createElement("p");
        productType.textContent = elem.type;
        var productPrice = document.createElement("p");
        productPrice.textContent = elem.price;

        var addToBag = document.createElement("button");
        addToBag.textContent = "ADD TO BAG";

        productDetails.append(productCategory, productImage, productName, productType, productPrice, addToBag)
        document.querySelector("#wishlistContainer").append(productDetails);
    })
}