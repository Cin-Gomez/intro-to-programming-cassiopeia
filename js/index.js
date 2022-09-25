const today = new Date();
const thisYear = today.getFullYear();
const footer =document.querySelector('footer');
const skillsSection = document.querySelector('.skills');
const skillsList = skillsSection.querySelector('ul');

let copyright = document.createElement('p');
copyright.innerHTML = 'Cinthya Gomez' + ' ' + thisYear;
footer.appendChild(copyright);

let skills =['Microsoft Office', 'JavaScript', 'Data Analysis', 'Spreadsheets: Excel & Google Sheet',];
for (let i =0; i < skills.length; i++){
    let item =document.createElement('li');
    item.innerHTML = skills[i];
    skillsList.appendChild(item);
}