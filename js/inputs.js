var allInputs = $(':input');
allInputs.each(function(inp) {
  var inType = ($(this).attr('type'));
  if (inType == undefined) {
    inType = ($(this).attr('name'))
    var value = getValueEntered($(this));
    $(this).val(value);
    setValueEntered($(this));
  }
  else {
    console.log(inType);
    var value = getValueEntered($(this));
    if (inType == 'checkbox') {
      $(this).prop("checked", value)
    }
    else {
      $(this).val(value);
    }
  }
  // create event listener
  $(this).on("change", setValueEntered);
});

/*
 * Returns the value entered field from the current list item.
 */
function getValueEntered(inp) {
  var li = inp.parent();
  var current = li.find('span');
  return current.text();
}

/*
 * Sets the Value Entered field in the current list item to the input value.
 */
function setValueEntered(evt) {
  var inp = $(this);
  var li = inp.parent();
  var current = li.find('span');
  if (inp.attr('type') == 'checkbox') {
    if (inp.prop("checked")) {
      current.text("true");
    }
    else {
      current.text("false");
    }
  }
  else {
    current.text(inp.val());
  }
}