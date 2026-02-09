const colors = [
    '#ff7eb9',
    '#ff65a3',
    '#7afcff',
    '#feff9c',
    '#fff740'
];

let colorIndex = 0;

const postBtn = document.getElementById('postBtn');
const titleInput = document.getElementById('noteTitle');
const contentInput = document.getElementById('noteContent');
const notesContainer = document.getElementById('notesContainer');

postBtn.addEventListener('click', function() {
    
    const title = titleInput.value;
    const content = contentInput.value;

    if (title.trim() === "" && content.trim() === "") {
        alert("Please enter a title or content for your note!");
        return;
    }

    const newNote = document.createElement('div');
    newNote.className = 'card shadow-sm mb-3';
    newNote.style.width = '18rem';
    
    newNote.style.backgroundColor = colors[colorIndex];

    newNote.innerHTML = `
        <div class="card-body">
            <h5 class="card-title fw-bold">${title}</h5>
            <p class="card-text">${content}</p>
            <button class="btn btn-danger burn-btn">
                <i class="fas fa-fire"></i>
            </button>
        </div>
    `;

    const burnBtn = newNote.querySelector('.burn-btn');
    
    burnBtn.addEventListener('click', function() {
        newNote.remove();
    });

    notesContainer.appendChild(newNote);

    colorIndex++;
    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }

    titleInput.value = '';
    contentInput.value = '';
});