var product = JSON.parse(localStorage.getItem("product"))
document.getElementById("product-img1").setAttribute("src", product[0].img_url)
document.getElementById("product-img2").setAttribute("src", product[0].img_url)
document.getElementById("brand-name").innerText = product[0].brand.toUpperCase()
document.getElementById("product-name").innerText = product[0].name
document.getElementById("product-price").innerText = "$" + product[0].price
document.getElementById("product-desc").innerText = product[0].desc


// document.getElementById("p-info-desc").innerText = product[0].desc



// let i = 1;
// document.getElementById("product-info").addEventListener("click", dropDown)

// function dropDown() {
//     if (i == 1) {
//         document.getElementById("product-info-dropdown").style.display = "block"
//         document.getElementById("plus").style.display = "none"
//         document.getElementById("minus").style.display = "inline"
//         i = 2;
//     } else {
//         document.getElementById("product-info-dropdown").style.display = "none"
//         document.getElementById("plus").style.display = "inline"

//         document.getElementById("minus").style.display = "none"
//         i = 1;

//     }
// }

// let j = 1;
// document.getElementById("product-info2").addEventListener("click", dropDown2)

// function dropDown2() {
//     if (j == 1) {
//         document.getElementById("product-info-dropdown2").style.display = "block"
//         document.getElementById("plus2").style.display = "none"
//         document.getElementById("minus2").style.display = "block"
//         j = 2;
//     } else {
//         document.getElementById("product-info-dropdown2").style.display = "none"
//         document.getElementById("plus2").style.display = "block"

//         document.getElementById("minus2").style.display = "none"
//         j = 1;

//     }
// }


// let K = 1;
// document.getElementById("product-info3").addEventListener("click", dropDown3)

// function dropDown3() {
//     if (K == 1) {
//         document.getElementById("product-info-dropdown3").style.display = "block"
//         document.getElementById("plus3").style.display = "none"
//         document.getElementById("minus3").style.display = "block"
//         K = 2;
//     } else {
//         document.getElementById("product-info-dropdown3").style.display = "none"
//         document.getElementById("plus3").style.display = "block"

//         document.getElementById("minus3").style.display = "none"
//         K = 1;

//     }
// }


// let L = 1;
// document.getElementById("product-info4").addEventListener("click", dropDown4)

// function dropDown4() {
//     if (L == 1) {
//         document.getElementById("product-info-dropdown4").style.display = "block"
//         document.getElementById("plus4").style.display = "none"
//         document.getElementById("minus4").style.display = "block"
//         L = 2;
//     } else {
//         document.getElementById("product-info-dropdown4").style.display = "none"
//         document.getElementById("plus4").style.display = "block"

//         document.getElementById("minus4").style.display = "none"
//         console.log("dfsdaf")
//         L = 1;

//     }
// }

// minus button
document.getElementById("min-btn").addEventListener("click", minusQuantity)

function minusQuantity() {
    var quantity = document.getElementById("quantity-btn").innerText
    console.log(quantity)

    if (quantity > 1) {
        document.getElementById("quantity-btn").innerText = quantity - 1;
    }
}


//plus button


document.getElementById("max-btn").addEventListener("click", plusQuantity)

function plusQuantity() {

    var quantity = document.getElementById("quantity-btn").innerText;
    document.getElementById("quantity-btn").innerText = (parseInt(quantity) + parseInt(1));
}


// add to cart function

var cartArray = JSON.parse(localStorage.getItem("cart-added-product")) || []
var x = document.getElementById("cart-btn").innerText
document.getElementById("cart-btn").addEventListener("click", addtocart)


function addtocart() {
    var x = document.getElementById("cart-btn").innerText
    console.log(x);
    if (x == "ADD TO BAG") {
        var name = document.getElementById("product-name").innerText
        var brand = document.getElementById("brand-name").innerText
        var quantity = document.getElementById("quantity-btn").innerText
        var price = product[0].price
        var desc = document.getElementById("product-desc").innerText
        img = product[0].img_url

        console.log(name, brand, quantity, price, desc)
        var obj = {
            name: name,
            brand: brand,
            quantity: quantity,
            price: price,
            desc: desc,
            img_url: img
        }
        cartArray.push(obj)

        console.log(cartArray)
        localStorage.setItem("cart-added-product", JSON.stringify(cartArray))
        document.getElementById("cart-btn").innerText = "ADDED TO BAG"
    } else {
        alert("ALREADY ADDED TO CART")
    }

}


// wishlist
var wishlistArray = JSON.parse(localStorage.getItem("wishlist-added-product")) || []

document.getElementById("wishlist-btn").addEventListener("click", addtowishlist)

var loveIcon = 1;

function addtowishlist() {
    if (loveIcon == 1) {
        var name = document.getElementById("product-name").innerText
        var brand = document.getElementById("brand-name").innerText
        var quantity = document.getElementById("quantity-btn").innerText
        var price = document.getElementById("product-price").innerText
        var desc = document.getElementById("product-desc").innerText
        img = product[0].img_url
        console.log(name, brand, quantity, price, desc)
        var obj = {
            name: name,
            brand: brand,
            quantity: quantity,
            price: price,
            desc: desc,
            img_url: img
        }
        wishlistArray.push(obj)
        console.log(wishlistArray);

        localStorage.setItem("wishlist-added-product", JSON.stringify(wishlistArray))
        loveIcon = 2;
        document.getElementById("wishlist-btn").style.color = "#12284c"
    }
}

function gotoppage() {
    console.log("hii")
    window.location.replace("file:///D:/MAIN%20PROJECT/bluemercury_clone/html/productpage.html")
}


function gotoeventpage() {
    console.log("hii")
    window.location.replace("file:///D:/MAIN%20PROJECT/bluemercury_clone/html/index.html")
}