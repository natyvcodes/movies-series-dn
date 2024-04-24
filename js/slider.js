let currentIndex = 0

document.querySelector('.prev-button').addEventListener('click', () => {
   navigate(-1)
});

document.querySelector('.next-button').addEventListener('click', () => {
   navigate(1)
});
setInterval(() => {
    navigate(1);
  }, 6000);
  
  


function navigate(direction) {
   const galleryContainer = document.querySelector('.gallery-container')
   const totalImages = document.querySelectorAll('.gallery-item').length
   currentIndex = (currentIndex + direction + totalImages) % totalImages
   const offset = -currentIndex * 100

   galleryContainer.style.transform = `translateX(${offset}%)`
}