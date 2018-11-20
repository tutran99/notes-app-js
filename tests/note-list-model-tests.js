(function(exports) {
  function testStoreNotes() {
    var note = new Note('test1');
    var note2 = new Note('test2');
    var notesArray = [];
    notesArray.push(note)
    notesArray.push(note2)
    this.notesArray = notesArray

    if (notesArray.length !== 2) {
      throw new Error('Expected there to only be two notes.')
    }
  };

  testStoreNotes();
})(this);