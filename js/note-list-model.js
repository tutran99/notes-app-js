(function(exports) {
  function storeNotes() {
    var note = new Note(text)
    var notesArray = [];
    notesArray.push(note)
  };
  
  exports.storeNotes = storeNotes;
})(this);