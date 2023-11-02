// Get the selected values from local storage
const selectedValues = JSON.parse(localStorage.getItem('selectedValues'));

// Display the selected values
const selectedValuesDiv = document.querySelector('#selectedValues');

if (selectedValues) {
    const selectedOptions = document.createElement('div');

    for (const key in selectedValues) {
        const value = selectedValues[key];
        const optionText = document.createElement('p');
        optionText.textContent = `${key}: ${value}`;
        selectedOptions.appendChild(optionText);
    }

    selectedValuesDiv.appendChild(selectedOptions);
} else {
    selectedValuesDiv.innerHTML = '<p>No options selected.</p>';
}
