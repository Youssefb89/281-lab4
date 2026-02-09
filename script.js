// 1. Define the colors provided in the lab manual
const colors = [
    '#ff7eb9', // Pink
    '#ff65a3', // Darker Pink
    '#7afcff', // Light Blue
    '#feff9c', // Light Yellow
    '#fff740'  // Yellow
];

// Keep track of which color to use next (starts at 0)
let colorIndex = 0;

// 2. Select the DOM elements we need to interact with
const postBtn = document.getElementById('postBtn');
const titleInput = document.getElementById('noteTitle');
const contentInput = document.getElementById('noteContent');
const notesContainer = document.getElementById('notesContainer');

// 3. Listen for the "Click" event on the Post button
postBtn.addEventListener('click', function() {
    
    // Get the values from the input fields
    const title = titleInput.value;
    const content = contentInput.value;

    // Simple validation: Ensure at least one field has text
    if (title.trim() === "" && content.trim() === "") {
        alert("Please enter a title or content for your note!");
        return;
    }

    // 4. Create the new Note element (A Bootstrap Card)
    const newNote = document.createElement('div');
    newNote.className = 'card shadow-sm mb-3'; // Bootstrap classes for styling
    newNote.style.width = '18rem'; // Set a fixed width like the example
    
    // Set the background color from our array
    newNote.style.backgroundColor = colors[colorIndex];

    // 5. Construct the HTML inside the note
    // We add a 'burn-btn' class to the button so we can find it later
    newNote.innerHTML = `
        <div class="card-body">
            <h5 class="card-title fw-bold">${title}</h5>
            <p class="card-text">${content}</p>
            <button class="btn btn-danger burn-btn">
                <i class="fas fa-fire"></i>
            </button>
        </div>
    `;

    // 6. Add "Burn" functionality (Delete)
    // Find the button *inside* the note we just created
    const burnBtn = newNote.querySelector('.burn-btn');
    
    // Add a click listener to remove this specific note
    burnBtn.addEventListener('click', function() {
        newNote.remove();
    });

    // 7. Add the new note to the container on the page
    notesContainer.appendChild(newNote);

    // 8. Prepare for the next note
    // Increment the color index, and loop back to 0 if we hit the end
    colorIndex++;
    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }

    // Clear the input fields so the user can type a new note
    titleInput.value = '';
    contentInput.value = '';
});