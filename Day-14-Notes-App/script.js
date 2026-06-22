const noteInput = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const notesContainer = document.getElementById("notesContainer");
let notes = JSON.parse(localStorage.getItem("notes")) || [];
function saveNotes(){
    localStorage.setItem("notes", JSON.stringify(notes));
}
function renderNotes(){
    notesContainer.innerHTML = "";
    notes.forEach((note,index)=>{
        notesContainer.innerHTML += `
        <div class="note">
            <p>${note}</p>
            <button class="delete" onclick="deleteNote(${index})">
                Delete
            </button>
        </div>
        `;
    });
}

addBtn.addEventListener("click",()=>{
    if(noteInput.value.trim()===""){
        alert("Please write a note!");
        return;
    }
    notes.push(noteInput.value);
    saveNotes();
    renderNotes();
    noteInput.value = "";
});

function deleteNote(index){
    notes.splice(index,1);
    saveNotes();
    renderNotes();
}
renderNotes();