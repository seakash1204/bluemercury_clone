var cartArr = JSON.parse(localStorage.getItem("cart-added-product")) || []
console.log(cartArr)
displayCartadded(cartArr)

function displayCartadded(arr) {
    var totalPrice = 0;
    document.querySelector(".cart-product-main-container").innerText = ""
    arr.map(function(ele, ind) {
        var div1 = document.createElement("div")
        div1.setAttribute("class", "cart-container")
        var div2 = document.createElement("div")
        div2.setAttribute("class", "img")
        var img = document.createElement("img")
        img.setAttribute("id", "img")
        img.setAttribute("src", ele.img_url)
        var div3 = document.createElement("div")
        div3.setAttribute("class", "cart-product-details")
        var p1 = document.createElement("p")
        p1.setAttribute("id", "brand")
        var p2 = document.createElement("p")
        p2.setAttribute("id", "desc")
        var div4 = document.createElement("div")
        div4.setAttribute("class", "single-price")
        var p3 = document.createElement("p")
        p3.setAttribute("id", "price")
        var div5 = document.createElement("div")
        div5.setAttribute("class", "quantity-btn")
        var div6 = document.createElement("div")
        div6.setAttribute("class", "min-max")
        var button1 = document.createElement("button")
        var button2 = document.createElement("button")
        var button3 = document.createElement("button")
        button1.setAttribute("id", "min")
        button2.setAttribute("id", "quantity")
        button3.setAttribute("id", "max")
        var div7 = document.createElement("div")
        div7.setAttribute("id", "remove")
        var div8 = document.createElement("div")
        div8.setAttribute("class", "total")
        var p4 = document.createElement("p")
        p4.setAttribute("id", "total-price")
        p1.innerText = ele.brand
        p2.innerText = ele.desc
        p3.innerText = "$" + ele.price
        button1.innerText = "-"
        button2.innerText = ele.quantity
        button3.innerText = "+"
        p4.innerText = "$" + ele.quantity * ele.price
        div2.append(img)
        div3.append(p1, p2)
        div4.append(p3)
        div5.append(div6, div7)
        div6.append(button1, button2, button3)
        div7.append("Remove")
        div8.append(p4)
        div1.append(div2, div3, div4, div5, div8)
        console.log(div1);
        document.querySelector(".cart-product-main-container").append(div1)
        button1.addEventListener("click", function() {
            minusQuanity(ele, ind);
        })
        button3.addEventListener("click", function() {
            plusQuanity(ele, ind)

        })
        div7.addEventListener("click", function() {
            removeEle(ele, ind)
        })
        totalPrice += (ele.quantity * ele.price)
            // console.log(ele.img_url)
    })
    localStorage.setItem("total-price", totalPrice)
    document.getElementById("subprice").innerText = "$" + totalPrice
}


function minusQuanity(ele, ind) {
    if (ele.quantity == 1) {
        cartArr.splice(ind, 1)
        localStorage.setItem("cart-added-product", JSON.stringify(cartArr))
    } else {
        ele.quantity--;
        localStorage.setItem("cart-added-product", JSON.stringify(cartArr))
    }
    displayCartadded(cartArr)
}

function plusQuanity(ele, ind) {

    ele.quantity++;
    localStorage.setItem("cart-added-product", JSON.stringify(cartArr))
    displayCartadded(cartArr)
}

function removeEle(ele, ind) {
    cartArr.splice(ind, 1)
    displayCartadded(cartArr)
    localStorage.setItem("cart-added-product", JSON.stringify(cartArr))

}
// document.getElementById("checkout_button").addEventListener("click",checkOutHere)