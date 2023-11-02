function isDesktop() {
    return window.innerWidth >= 1200; 
}


function checkDeviceType() {
    if (!isDesktop()) {
        alert("Please switch to a desktop to access this website.");
    }
}
window.onload = checkDeviceType;




// Function to check if an element is in the viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add active class to elements in viewport
function activateAnimations() {
    var elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    
    elementsToAnimate.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('active');
        }
    });
}

// Listen for scroll events and activate animations
window.addEventListener('scroll', activateAnimations);
window.addEventListener('load', activateAnimations); // Activate animations on page load

// Call the activateAnimations function to check if any elements are in the viewport on page load
activateAnimations();






