// Function to save checkbox state to localStorage
function saveCheckboxState(id, isChecked) {
    localStorage.setItem(id, isChecked);
}

// Function to load checkbox state from localStorage
function loadCheckboxState(id) {
    return localStorage.getItem(id) === 'true';
}

// Function to initialize checkboxes
function initializeCheckboxes() {
    document.querySelectorAll('.checkbox').forEach(checkbox => {
        const id = checkbox.id;
        checkbox.checked = loadCheckboxState(id); // Set the initial state based on localStorage

        // Add event listener to save state when checkbox is clicked
        checkbox.addEventListener('change', () => {
            saveCheckboxState(id, checkbox.checked);
        });
    });
}

// Initialize checkboxes on page load
window.addEventListener('DOMContentLoaded', initializeCheckboxes);