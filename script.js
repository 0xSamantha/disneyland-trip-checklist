function updateScore() {
    // Get all checkboxes with specific classes
    const rideCheckboxes = document.querySelectorAll('.ride-checkbox');
    const foodCheckboxes = document.querySelectorAll('.food-checkbox');
  
    // Update their states in localStorage
    saveCheckboxState(rideCheckboxes);
    saveCheckboxState(foodCheckboxes);
  
    // Calculate total score
    calculateTotalScore();
  }
  
  function saveCheckboxState(checkboxes) {
    checkboxes.forEach(function(checkbox) {
      const isChecked = checkbox.checked ? 'checked' : 'unchecked';
      localStorage.setItem(checkbox.id, isChecked);
    });
  }
  
  function loadCheckboxState() {
    const allCheckboxes = document.querySelectorAll('.ride-checkbox, .food-checkbox');
  
    allCheckboxes.forEach(function(checkbox) {
      const savedState = localStorage.getItem(checkbox.id);
      if (savedState === 'checked') {
        checkbox.checked = true;
      }
    });
  
    // Update score after loading
    calculateTotalScore();
  }
  
  function calculateTotalScore() {
    const allCheckboxes = document.querySelectorAll('.ride-checkbox, .food-checkbox');
    let totalChecked = 0;
    const totalCheckboxes = allCheckboxes.length;
  
    allCheckboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        totalChecked++;
      }
    });
  
    // Calculate score out of 100
    const score = Math.round((totalChecked / totalCheckboxes) * 100);
  
    // Save the total score in localStorage
    localStorage.setItem('totalScore', score);
  }
  
  window.onload = loadCheckboxState;
  