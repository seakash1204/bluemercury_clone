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