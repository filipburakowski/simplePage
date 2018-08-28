const getElement = (selector) => document.querySelector(selector);

const showMoreNodes = Array.from(document.getElementsByClassName('contactForm__showAgreement'));
const navigationButton = getElement('.hamburgerMenu__hamburgerButton');

const toggleInformationVisibility = function () {
    const target = this.getAttribute('data-target');
    const targetElement = getElement(`[data-agree=${target}]`);
    targetElement.classList.toggle('hidden');
};

const toggleMenu = function () {
    const navigationList = getElement('.navigationBar__navigationList');
    navigationList.classList.toggle('open');
};

const addEventsToShowMoreAgreements = () => showMoreNodes.map(
    (element)=>element.addEventListener('click',toggleInformationVisibility)
);


// ------------ ANIMATIONS TO APPEAR WHEN ON SCREEN

const elementsOfSite =  Array.from(document.querySelectorAll('.elementFadeIn'));

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) entry.target.classList.add('animationFadeIn');
    });
});

elementsOfSite.forEach(item => {
    observer.observe(item);
});


// ------------ START SCRIPT

addEventsToShowMoreAgreements();

navigationButton.addEventListener('click',toggleMenu);



