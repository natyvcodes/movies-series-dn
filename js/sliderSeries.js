
const slidesContainer = document.getElementById("slides-container");
        const slides = document.querySelectorAll(".slide");
        const prevButton = document.getElementById("slide-arrow-prev");
        const nextButton = document.getElementById("slide-arrow-next");
        const slideWidth = slides[0].clientWidth;
        const totalSlides = slides.length;
        let currentSlide = 0;

        nextButton.addEventListener("click", () => {
            currentSlide++;
            if (currentSlide >= totalSlides) {
                currentSlide = 0;
                slidesContainer.scrollLeft = 0;
            } else {
                slidesContainer.scrollLeft += slideWidth;
            }
        });

        prevButton.addEventListener("click", () => {
            currentSlide--;
            if (currentSlide < 0) {
                currentSlide = totalSlides - 1;
                slidesContainer.scrollLeft = slideWidth * (totalSlides - 1);
            } else {
                slidesContainer.scrollLeft -= slideWidth;
            }
        });