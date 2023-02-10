    let slideIndex = 1;
    showSlides(slideIndex);

    function slideShow(n) {
        showSlides(slideIndex += n)
    }

    function showSlides(n) {
        let i;
        let slides = document.querySelectorAll("#slides")
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "flex"
    }
    let dotIndex = 1;

    function currentSlide(n) {
        dotSlide(dotIndex = n);
    }

    function doIt() {
        document.querySelector(".overlay-content").style.visibility = "visible"
        console.log("hii")


    }
    document.querySelector("#closeIcon").addEventListener("click", closesearch)

    function closesearch() {
        document.querySelector(".overlay-content").style.visibility = "hidden"

    }

    function dotSlide(n) {
        let i;
        let slides = document.querySelectorAll(".picSlide")
        let dots = document.querySelectorAll(".dot")
        console.log(slides[0])
        if (n > slides.length) {
            dotIndex = 1
        }
        if (n < 1) {
            dotIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[dotIndex - 1].style.display = "block";
        dots[dotIndex - 1].className += " active";
    }