$(document).ready(function() {


    saveNote = function() {
        const notes = $(".note textarea");
        const data = Array.from(notes).map(note => note.value);
        const colorList = Array.from($(".note")).map(note => $(note).css("background-color"));
        const headerColorList = Array.from($(".note .header")).map(header => $(header).css("background-color"));
        const textColorList = Array.from($(".note textarea")).map(text => $(text).css("color"));

        if(data.length === 0) {
            localStorage.removeItem("notes");
            localStorage.removeItem("noteColors");
            localStorage.removeItem("headerColors");
            localStorage.removeItem("textColors");
        }else{
            localStorage.setItem("notes", JSON.stringify(data));
            localStorage.setItem("noteColors", JSON.stringify(colorList));
            localStorage.setItem("headerColors", JSON.stringify(headerColorList));
            localStorage.setItem("textColors", JSON.stringify(textColorList));  
        }
    }   

    deleteNote = function(element) {
       element.closest(".note").remove();
       saveNote();
    }

    changeColor = function(element) {
        const note_color = ["#f28b82", "#fff475", "#ccff90", "#a7ffeb", "#cbf0f8", "#aecbfa", "#d7aefb", "#2c2c2c"];
        const header_color = ["#a32c2c", "#c29716", "#8f721d", "#508838", "#357a85", "#4175a5", "#655194","#0f0f0f"];
        const text_color = ["#5c0000", "#614700", "#635d19", "#345920", "#2c6551", "#2b4f58", "#202124","#fff"];
        const randomColor = note_color[Math.floor(Math.random() * note_color.length)];
        $(element).closest(".note").css("background-color", randomColor);
        $(element).closest(".note").find(".header").css("background-color", header_color[note_color.indexOf(randomColor)]);
        $(element).closest(".note").find("textarea").css("color", text_color[note_color.indexOf(randomColor)]);
        saveNote();
    }
    addNote = function() {
        $("#main").append(`
        <div draggable="true" class="note">
            <div class="header">
                <i class="fa-solid fa-palette" onclick="changeColor(this)"></i>
                <div class="icons">
                    <i class="fa-solid fa-floppy-disk" onclick="saveNote(this)">aa</i>
                    <i class="fa-solid fa-trash-can" onclick="deleteNote(this)">aa</i>
                </div> 
            </div>
            <textarea oninput="saveNote()"></textarea>
        </div>
        `);
    }

 lsNotes = JSON.parse(localStorage.getItem("notes"));
 if(lsNotes) {
    lsNotes.forEach(noteText => {
        addNote();
        const notes = $(".note textarea");
        const lastNote = notes[notes.length - 1];
        lastNote.value = noteText;
        const noteColors = JSON.parse(localStorage.getItem("noteColors"));
        const headerColors = JSON.parse(localStorage.getItem("headerColors"));
        const textColors = JSON.parse(localStorage.getItem("textColors"));
        $(lastNote).closest(".note").css("background-color", noteColors[notes.length - 1]);
        $(lastNote).closest(".note").find(".header").css("background-color", headerColors[notes.length - 1]);
        $(lastNote).closest(".note").find("textarea").css("color", textColors[notes.length - 1]);
        
    });       
}
});
