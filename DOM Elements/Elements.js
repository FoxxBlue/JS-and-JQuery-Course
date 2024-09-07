const heading = document.getElementById('mainHeading');
heading.textContent = "Salutations elementary";

const paragraphs = document.getElementsByTagName('p');
for(const paragraph of paragraphs){
    paragraph.style.color = 'orange';
}

const intro = document.getElementsByClassName('intro-Par')[0];
intro.textContent = "discovery of magical elements";

const firstPar = document.querySelector('h1');
firstPar.style.fontSize = '64px';

heading.setAttribute('class', 'main-title');

const newPar = document.createElement('p');
newPar.textContent = 'A new Par';

document.body.appendChild(newPar);