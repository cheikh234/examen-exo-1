function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const noteList = document.getElementById('List');
    noteList.innerHTML = '';  

    
    for (let i = 0; i < notes.length; i++) {
        const li = document.createElement('li');
        li.textContent = notes[i];

        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Supprimer';
        deleteBtn.onclick = function() {
            deleteNote(i); 
        };

        li.appendChild(deleteBtn);
        noteList.appendChild(li);
    }
}


function addNote() {
    const noteInput = document.getElementById('Entreee');
    const noteText = noteInput.value.trim(); 

    if (noteText !== "") {  
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push(noteText);  
        localStorage.setItem('notes', JSON.stringify(notes));  

        noteInput.value = '';  
        loadNotes();  
    }
}






function deleteNote(index) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.splice(index, 1);  
    localStorage.setItem('notes', JSON.stringify(notes));  
    loadNotes();  
}







document.getElementById('ajouternote').addEventListener('click', addNote);


loadNotes();
