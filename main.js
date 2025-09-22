
let index = -1;
onload = () =>{
        document.body.classList.remove("container");    

};

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
