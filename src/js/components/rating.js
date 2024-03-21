const startRatings = document.querySelectorAll('.star-rating');
function ratingInit() {
  if (startRatings.length < 0) return;
  
  startRatings.forEach(starRating => {
    const stars = starRating.querySelectorAll('.star');
    const ratingInput = starRating.querySelector('.rating-value');

    starRating.addEventListener('click', event => {
        if (event.target.classList.contains('star')) {
            const ratingValue = parseInt(event.target.dataset.value);
            ratingInput.value = ratingValue;
            updateStars(stars, ratingValue);
        }
    });

    starRating.addEventListener('mouseover', event => {
        if (event.target.classList.contains('star')) {
            const ratingValue = parseInt(event.target.dataset.value);
            updateStars(stars, ratingValue);
        }
    });

    starRating.addEventListener('mouseout', () => {
        const currentRating = parseInt(ratingInput.value);
        updateStars(stars, currentRating);
    });
  });

  function updateStars(stars, rating) {
    if (!isNaN(rating)) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }
  }
}
ratingInit()
