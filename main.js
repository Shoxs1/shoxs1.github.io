
let index = -1;
onload = () =>{
        document.body.classList.remove("container");    

};
window.addEventListener('load', function () {
    const scrollTarget = document.body.scrollHeight * 0.7;
    window.scrollTo({
        top: scrollTarget,
        behavior: 'smooth' // o 'auto' si no querés animación
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const finalBlock = document.querySelector('.message');
  const items = document.querySelectorAll('.boxi');
  let currentIndex = 0; // empieza desde el penúltimo

  finalBlock.addEventListener('click', function () {
    if (currentIndex < items.length) {
      items[currentIndex].classList.add('show');
      currentIndex++;
    }
  });
});
