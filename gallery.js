document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.gallery-item img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((image,idx)) => {
            if (idx=== index) {
                image.style.display = 'block'
            } else {image.style.display = 'none'};

        }
    });
}

    showImage(currentIndex);

    function showNextImage () {}

