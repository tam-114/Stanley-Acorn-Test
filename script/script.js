// Reivews carousel
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0
        
        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
        
    })
})

// Chair carousel

document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel-item");

    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel-btn"></span>`;
    });

    carousel.insertAdjacentHTML("beforeend", `
        <div class="carousel-nav">
            ${ buttonsHtml.join("") }
        </div>
    `);
    
    const buttons = carousel.querySelectorAll(".carousel-btn");

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            //unselect all items
            items.forEach(item => item.classList.remove("carousel-item-selected"));
            buttons.forEach(button => button.classList.remove("carousel-btn-selected"));

            items[i].classList.add("carousel-item-selected");
            buttons.classList.add("carousel-btn-selected");
        })
    });
})
