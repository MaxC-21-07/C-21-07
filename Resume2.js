document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopButton = document.getElementById("scroll-to-top");
    
    scrollToTopButton.addEventListener("click", function() {
        // Прокручуємо сторінку наверх
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
