alert("Thank you for visiting Ruby-Doo's website!!")

document.addEventListener('DOMContentLoaded', () => {
    // Select all images in the gallery
    const images = document.querySelectorAll('.gallery img');

    // Add click event listener to each image
    images.forEach(image => {
        image.addEventListener('click', () => {
            // Open the image in a new tab
            window.open(image.src, '_blank');
        });
    });
});