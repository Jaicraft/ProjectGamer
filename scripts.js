// Add a click event listener to the navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior
        const target = event.target.getAttribute('href');
        loadPage(target);
    });
});

// Function to load the target page
function loadPage(target) {
    const contentDiv = document.createElement('div');
    contentDiv.id = 'content';
    document.body.appendChild(contentDiv);

    // Add a placeholder for the target page
    const placeholder = document.createElement('h1');
    placeholder.textContent = `${target} page is under construction`;
    contentDiv.appendChild(placeholder);
}
