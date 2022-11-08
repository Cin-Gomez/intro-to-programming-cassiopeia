const today = new Date();
const thisYear = today.getFullYear();
const footer =document.querySelector('footer');
const copyright =document.createElement('p');
copyright.innerHTML = `Cinthya Gomez ${thisYear}`;
footer.appendChild(copyright);


function createNewList(sectionId, items) {
    const section = document.querySelector(sectionId);
    const ul = section.querySelector('ul');
    for (let i =0; i < items.length; i++){
        const listItem = document.createElement('li');
        const item = items[i];
        if (item.name){
            const repoLink = document.createElement('a');
            repoLink.href = item.url;
            repoLink.innerText = item.name;
            listItem.appendChild(repoLink);
        } else {
            listItem.innerText = item;
        }
        ul.appendChild(listItem);
    }
}


// Skills List
    const skills =['Microsoft Office', 'JavaScript', 'Data Analysis', 'Spreadsheets: Excel & Google Sheet',]

    createNewList('#skills', skills);


// Leave a Message Section
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

// Edit Button

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

   messageSection.setAttribute('style', 'display:block');

   messageForm.reset();
});

function onRemoveButtonClick(event) {
    const entry = event.target.parentNode;
    entry.remove();

}

// Link to repositories

function onSuccess(repositories) {
    const repos = repositories. map( repo =>(
        {name : repo.name,
        url: repo.html_url
    }
    ));
    createNewList('#projects', repos);
    console.log(repos);
}

// API Fetch Request

fetch('https://api.github.com/users/Cin-Gomez/repos')
.then((response) => response.json())
.then(onSuccess);