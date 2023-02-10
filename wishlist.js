var wishlistDetails = JSON.parse(localStorage.getItem("wishlist-added-product")) || [];

var obj = {
    name: "xyz"

}
wishlistDetails.push(obj)



displayData(wishlistDetails);

function displayData(wishlistDetails) {
    console.log(wishlistDetails)
    document.getElementById("#wishlistContainer").textContent = "";
    wishlistDetails.map(function(elem) {

        var productDetails = document.createElement("div");
        var productCategory = document.createElement("p");
        productCategory.textContent = elem.brand;
        var productImage = document.createElement("img");
        productImage.setAttribute("src", elem.img_url)
        var productName = document.createElement("h2");
        productName.textContent = elem.name;
        var productType = document.createElement("p");
        productType.textContent = elem.desc;
        var productPrice = document.createElement("p");
        productPrice.textContent = elem.price;

        var addToBag = document.createElement("button");
        addToBag.textContent = "ADD TO BAG";
        addToBag.addEventListener("click", function() {
            bag(elem)
        })
        var removeCart = document.createElement("button");
        removeCart.textContent = "REMOVE FROM WISHLIST"
        removeCart.addEventListener("click", function() {
            removeFromCart(elem)
        });

        productDetails.append(productCategory, productImage, productName, productType, productPrice, addToBag, removeCart)
        document.querySelector("#wishlistContainer").append(productDetails);
    })
}

var cart = JSON.parse(localStorage.getItem("wishlist-added-product")) || []

function bag(elem, i) {
    cart.push(elem)
    localStorage.setItem("cart-added-product", JSON.stringify(cart));

    wishlistDetails.splice(i, 1)
    localStorage.setItem("wishlist-added-product", JSON.stringify(wishlistDetails))
    displayData(wishlistDetails)
}

var baglist = JSON.parse(localStorage.getItem("cartValue")) || []

function remove(elem, i) {
    wishlistDetails.splice(i, 1)
    localStorage.setItem("wislist-added-product", JSON.stringify(wishlistDetails))
    displayData(wishlistDetails)
}