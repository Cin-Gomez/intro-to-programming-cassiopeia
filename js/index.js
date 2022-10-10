const today = new Date();
const thisYear = today.getFullYear();
const footer =document.querySelector('footer');
const copyright =document.createElement('p');
copyright.innerHTML = `Cinthya Gomez ${thisYear}`;
footer.appendChild(copyright);

const skills =['Microsoft Office', 'JavaScript', 'Data Analysis', 'Spreadsheets: Excel & Google Sheet',];
const skillsSection =document.querySelector('#skills');
const ul =skillsSection.querySelector('ul');
for (let i =0; i < skills.length; i++){
    const skill =document.createElement('li');
    skill.innerText = skills[i];
    skillsSection.appendChild(skill);
}
const messageForm = document.querySelector('[name = leave_message]');
messageForm.addEventListener('submit', function(event){
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
   console.log(`name: ${name}, email: ${email}, message: ${message}`);

   const messageSection = document.querySelector('#messages');

   const messageList= messageSection.querySelector('ul');
   const newMessage = document.createElement('li');
   newMessage.innerHTML = `<a href="mailto:${email}">${name}</a><span> wrote: ${message} </span>`;

   const removeButton = document.createElement('button');
   removeButton.setAttribute('type', 'button');
   removeButton.innerText = 'remove';
   removeButton.addEventListener('click', function() {
        newMessage.remove();
   });


   const editButton =document.createElement('button')
   editButton.innerText = 'Edit'
   editButton.setAttribute('type','button')
   editButton.addEventListener('click', function(event){
    newMessage.remove();
    const nameElement = document.querySelector('[name = name]')
    nameElement.value =name;
    const emailElement = document.querySelector('[name =email]')
    emailElement.value =email;
    const messageElement = document.querySelector('[name = message]')
    messageElement.value =message;
   });



    
   newMessage.appendChild(removeButton);
   newMessage.appendChild(editButton);
   messageList.appendChild(newMessage);

   messageForm.reset();
});

function onRemoveButtonClick(event) {
    const entry = event.target.parentNode;
    entry.remove();
}
