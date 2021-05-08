if("serviceWorker" in navigator){
    // register service worker
    navigator.serviceWorker.register("service-worker.js");
}

let noteCount = Number(window.localStorage.getItem('noteCount'));
if(!noteCount){
    window.localStorage.setItem('noteCount', '0');
}

function createNote(noteTitle,noteBody){
    document.getElementById('no-notes').classList.add('hidden');
    
    let li = document.createElement('li');
   
    let a = document.createElement('a');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let xButton = document.createElement('Button');
    
    let h2TN = document.createTextNode(noteTitle);
    let pTN = document.createTextNode(noteBody);
    let xText = document.createTextNode("X");

    h2.appendChild(h2TN);
    p.appendChild(pTN);
    xButton.appendChild(xText)

    xButton.classList.add("delete");
    //xButton.addEventListener('onclick');

    a.appendChild(h2)
    a.appendChild(xButton)
    a.appendChild(p)

    a.setAttribute("href", "#");

    li.appendChild(a);

    let uList = document.getElementById("notes");
    uList.appendChild(li);

}

function createNoteFromInput(e){
    e.preventDefault();

    let noteTitle = document.getElementById('new-note-title-input').value;
    let noteBody = document.getElementById('new-note-body-input').value;

    document.getElementById('new-note-title-input').value = "";
    document.getElementById('new-note-body-input').value = "";

    // if the note title exist then append new note body
    if(window.localStorage.getItem(noteTitle)){
        // save the note body
        let noteBodyPrev = window.localStorage.getItem(noteTitle); 
        noteBody = noteBodyPrev + " " + noteBody ;
        window.localStorage.setItem(noteTitle, noteBody);   
        
        // refresh the note on the screen        
        let ul = document.getElementById("notes").childNodes
        for(let i = 1; i < ul.length ;i++){
            if ( ul[i].childNodes[0].childNodes[0].innerText == noteTitle ){
                ul[i].childNodes[0].childNodes[2].innerText = noteBody;
            }
        }   
    }
    else{
        noteCount += 1;
        window.localStorage.setItem('noteCount', noteCount); 
        window.localStorage.setItem(noteTitle, noteBody);
    
        createNote(noteTitle,noteBody);
        
    }

    
}

function removeItem(e){
    if ( e.target.classList.contains("delete"))
    {
        if(confirm("Are you sure you wanna delete the note?"))
        {
            let li = e.target.parentElement.parentElement;
            let ul = document.getElementById('notes');
            ul.removeChild(li);

            noteCount -= 1;
            window.localStorage.setItem("noteCount", noteCount);
            window.localStorage.removeItem (e.target.previousElementSibling.innerText );

            if (ul.childElementCount == 0)
            {
                noteCount = 0;
                window.localStorage.setItem("noteCount", noteCount);
                document.getElementById('no-notes').className = "";
            }
        }
       
    }
        
}

function fetchNotes(){
    for(i= 0; i <= noteCount; i++){
        let noteTitle = window.localStorage.key(i);
        let noteBody = window.localStorage.getItem(noteTitle); 
    
        if (noteTitle != 'noteCount' && noteTitle)
            createNote(noteTitle, noteBody);
    }    
}

fetchNotes();

document
    .getElementById('inputForm')
    .addEventListener("submit", createNoteFromInput, false)


document.getElementById('notes').addEventListener('click', removeItem);

