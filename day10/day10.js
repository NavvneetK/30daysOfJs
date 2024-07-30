// Basic Event Handling
document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('basicPara').textContent = 'Text has been changed!';
});

document.getElementById('toggleImage').addEventListener('dblclick', function() {
    this.style.display = this.style.display === 'none' ? 'block' : 'none';
});

// Mouse Events
document.getElementById('mouseDiv').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'yellow';
});

document.getElementById('mouseDiv').addEventListener('mouseout', function() {
    this.style.backgroundColor = 'lightblue';
});

// Keyboard Events
document.getElementById('keydownInput').addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
});

document.getElementById('keyupInput').addEventListener('keyup', function() {
    document.getElementById('displayValue').textContent = this.value;
});

// Form Events
document.getElementById('submitForm').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form data:', new FormData(this));
});

document.getElementById('changeSelect').addEventListener('change', function() {
    document.getElementById('selectedValue').textContent = 'Selected value: ' + this.value;
});

// Event Delegation
document.getElementById('delegationList').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log('Clicked item text:', event.target.textContent);
    }
});

document.getElementById('parentDiv').addEventListener('click', function(event) {
    console.log('Clicked parent element');
});
