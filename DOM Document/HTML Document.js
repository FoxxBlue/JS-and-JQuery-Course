const documentObject = document;
console.log(documentObject);

document.title = 'New Title';
document.getElementById('mainHeading').textContent = 'Greetings, Document';

const newParagraph = document.createElement('p');
newParagraph.textContent = 'A new paragraph  has been edited';
document.body.appendChild(newParagraph);

const firstPar = document.querySelector('p');
firstPar.style.color = 'blue';

document.getElementById('mainHeading').addEventListener('click', () =>{
alert('Heading Click');
})