var wishlistDetails = JSON.parse(localStorage.getItem("cart-added-product")) || [];

displayData(wishlistDetails);
function displayData(wishlistDetails) {
    wishlistDetails.map(function (elem) {
        document.getElementById("#wishlistContainer").textContent = "";
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
        addToBag.addEventListener("click", function(){
            bag(elem)
        })
        var removeCart = document.createElement("button");
        removeCart.textContent = "REMOVE FROM WISHLIST"
        removeCart.addEventListener("click", function(){
            removeFromCart(elem)
        });

        productDetails.append(productCategory, productImage, productName, productType, productPrice, addToBag, removeCart)
        document.querySelector("#wishlistContainer").append(productDetails);
    })
}

var cart = JSON.parse(localStorage.getItem("cart-added-product")) || []
function bag(elem, i){
    cart.push(elem)
    localStorage.setItem("move-to-cart", JSON.stringify(cart));

    wishlistDetails.splice(i, 1)
    localStorage.setItem("cart-added-product", JSON.stringify(wishlistDetails))
    displayData(wishlistDetails)
}

var baglist = JSON.parse(localStorage.getItem("cartValue")) || []
function remove(elem, i){
    wishlistDetails.splice(i, 1)
    localStorage.setItem("currentpage", JSON.stringify(wishlistDetails))
    displayData(wishlistDetails)
}
