// Task 1
document.getElementById('para').textContent = 'I am Navneet Kaur.';

// Task 2
document.querySelector('#divcolorchange').style.backgroundColor = 'grey';

// Task 3
const newDiv = document.createElement('div');
newDiv.textContent = 'New div has been added';
document.body.appendChild(newDiv);

// Task 4
const newLi = document.createElement('li');
newLi.textContent = 'NoterAI';
document.getElementById('list').appendChild(newLi);

// Task 5
const rem = document.getElementById('remove');
rem.parentNode.removeChild(rem);

// Task 6
const list = document.getElementById('list');
list.removeChild(list.lastElementChild);

// Task 7
document.getElementById('img').setAttribute('src', 'panorama.jpg');

// Task 8
document.getElementById('toggleClassButton').addEventListener('click', function() {
    document.getElementById('myDiv').classList.toggle('highlight');
});

// Task 9
document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('textPara').textContent = 'Text has been changed!';
});

// Task 10
document.getElementById('borderDiv').addEventListener('mouseover', function() {
    this.classList.add('bordered');
});
document.getElementById('borderDiv').addEventListener('mouseout', function() {
    this.classList.remove('bordered');
});
