const itemFaq = document.querySelectorAll('.item-faq');
const flechaFoward = document.querySelectorAll('.faq-seta-foward');
const flechaDown = document.querySelectorAll('.faq-seta-down');

itemFaq.forEach(itemFaq => {
    itemFaq.addEventListener("click", event => {
        itemFaq.classList.toggle("active");
    });
});

flechaDown.forEach(flecha => {
    flecha.addEventListener("click", () => {
        flecha.classList.toggle("active");
    });
});



flechaFoward.forEach(flecha => {
    flecha.addEventListener("click", () => {
        flecha.classList.toggle("active");
    });
});
