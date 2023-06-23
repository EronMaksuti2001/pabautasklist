
function shuffleValues() {
  const form = document.getElementById("myForm");
  const checkboxes = form.getElementsByClassName("option");
  const checkboxesArr = Array.prototype.slice.call(checkboxes);
  checkboxesArr.sort(function() {
    return 0.5 - Math.random();
  });

  for (let i = 0; i < checkboxesArr.length; i++) {
    form.prepend(checkboxesArr[i]);
  }
}

function changeValues() {
  const checkboxWrapper = document.getElementsByClassName('option');
  const newValues = ["New Value 1", "New Value 2", "New Value 3", "New Value 4"];

  for (var i = 0; i < checkboxWrapper.length; i++) {
    checkboxWrapper[i].children[0].value = newValues[i];
    checkboxWrapper[i].children[1].innerText = newValues[i];
  }
}

function showSelectedValues() {
  var checkboxes = document.getElementsByTagName("input");
  var selectedValues = [];

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selectedValues.push(checkboxes[i].value);
    } 
  }

  var selectedValuesElement = document.getElementById("selectedValues");
  selectedValuesElement.innerHTML = "Selected Values: " + selectedValues.join(", ");
}