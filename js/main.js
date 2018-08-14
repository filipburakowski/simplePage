const getElement = (selector) => document.querySelector(selector);

const arrayClassName = Array.from(document.getElementsByClassName('contactForm__showAgreement'));
const navigationButton = getElement('.hamburger-menu');

const toggleInformationVisibility = function () {
    const target = this.getAttribute('data-target');
    const targetElement = getElement(`[data-agree=${target}]`);
    targetElement.classList.toggle('hidden');
};

const toggleMenu = function () {
    const navigationList = getElement('.navigationList');
    navigationList.classList.toggle('open');
};

const addEventsToShowMoreAgreements = () => arrayClassName.map(
    (element)=>element.addEventListener('click',toggleInformationVisibility)
);


// ------------ ANIMACJE

// const companyDetails = getElement('.companyInformation');
//
// function returnElementPositionFromTopScreen (element) {
//     let offsetElementFromTop = element.offsetTop;
//     let scrollFromTop = document.scrollingElement.scrollTop;
//     return offsetElementFromTop-scrollFromTop;
// }
//
// function elementFadeInWhenOnScreen (element) {
//     let windowHeight = window.innerHeight;
//     let elementTopDistanceFromTopDocument = returnElementPositionFromTopScreen(element);
//     let elementHeight = element.clientHeight;
//     if ((elementTopDistanceFromTopDocument+elementHeight/4)<=windowHeight)
//         {element.classList.add('animationFadeIn')}
// }

const elementsOfSite =  Array.from(document.querySelectorAll('.elementFadeIn'));

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) entry.target.classList.add('animationFadeIn');
    });
});

elementsOfSite.forEach(item => {
    observer.observe(item);
});


// ------------ POBIERANIE


// const sectionContainer = getElement('.makeSmaller');
//
// const fetchData = () => (
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then((response)=>response.json())
//         .then((data)=>data.map((post)=>presentData(post))
//         )
//         .catch((error)=>console.log(error))
// );

// const fetchData = () => (
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then((response)=>response.json())
//         .then((data)=>data.map((post)=>presentData(post)))
//         .catch((error)=>console.log(error))
// );
//
// function presentData (post) {
//     const postContainer = createAndReturnElement('div','');
//     postContainer.appendChild(createAndReturnElement('h2', post.id + ' ' + post.title));
//     postContainer.appendChild(createAndReturnElement('p', post.body));
//     sectionContainer.appendChild(postContainer);
// }
//
// function createAndReturnElement (elementType, text) {
//     const element  = document.createElement(elementType);
//     element.innerHTML = text;
//     return element
// }

// -------------- WYSYŁANIE
// const form = getElement('.contactForm');
// const submitButton = getElement('.contactForm__input--submit');
//
// submitButton.addEventListener('click', (event) => sendForm(event));
//
// function prepareAndReturnFormData () {
//     const formData = new FormData(form);
//     const messageText = getElement('.contactForm__textArea').value;
//     const messageTopic = getElement('.contactForm__select').value;
//     formData.append('messageText',messageText);
//     formData.append('messageTopic',messageTopic);
//     return formData;
// }
//
// function sendForm (event) {
//     event.preventDefault();
//     const formData = prepareAndReturnFormData();
//     fetch(formData.action, {
//         method: 'GET',
//         data: formData,
//     })
//         .then((response)=>
//         console.log(...formData)
//         );
//     // alert('Formularz wysłany')
//     form.classList.add('hidden')
// }
//
// function replaceFormAfterSend () {
//
// }







// START SCRIPT

// fetchData();
addEventsToShowMoreAgreements();
// elementFadeInWhenOnScreen(companyDetails);

navigationButton.addEventListener('click',toggleMenu);
// document.addEventListener('scroll',()=>elementFadeInWhenOnScreen(companyDetails));



