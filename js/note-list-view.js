(function (exports) {
  function viewNotes(storeNotes) {
    return storeNotes();
  };
  exports.viewNotes = viewNotes
})(this);

Note.prototype.viewList = function () {
  return '<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul'
};
