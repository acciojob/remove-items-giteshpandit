//your JS code here. If required.
document.getElementById('removeBtn').addEventListener('click', function() {
  // Get the select element
  const colorSelect = document.getElementById('colorSelect');
  
  // Get the selected option
  const selectedOption = colorSelect.options[colorSelect.selectedIndex];
  
  // Remove the selected option
  colorSelect.removeChild(selectedOption);
});

