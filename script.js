// Select all benefit cards
const benefitCards = document.querySelectorAll('.benefit-card');

// Add hover effect on each card
benefitCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Optional: Alert on clicking "Explore this Benefit"
const exploreLinks = document.querySelectorAll('.explore-link');
exploreLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        alert("Explore this Benefit - Feature coming soon!");
    });
});
// Intersection Observer for smooth animations
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-in'); // Add the class to trigger animation
                observer.unobserve(entry.target); // Stop observing the element
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the element is in the viewport
    });

    // Target all elements with the 'animate-slide-in' class
    const elementsToAnimate = document.querySelectorAll('.animate-slide-in');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});
// Get the toggle switch element
const themeSwitch = document.getElementById("theme-switch");

// Check the current theme in localStorage (if any)
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "light") {
    document.body.classList.add("light-theme");
    themeSwitch.checked = true; // Set the switch to 'on' state
}

// Add an event listener for when the theme switch is clicked
themeSwitch.addEventListener("change", function() {
    if (themeSwitch.checked) {
        // Apply light theme
        document.body.classList.add("light-theme");
        localStorage.setItem("theme", "light"); // Save the preference
    } else {
        // Remove light theme and use default dark theme
        document.body.classList.remove("light-theme");
        localStorage.removeItem("theme"); // Remove the preference
    }
});
