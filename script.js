"use strict";

const faqCard = document.createElement('div');


const _body = document.querySelector('body');
const topImage = document.querySelector('.top-image');
const centerBox = document.querySelector('.center-box');


const faqs = [
    {
        question: 'What is Frontend Mentor, and how will it help me?',
        answer: 'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript.',
        isOpen: true
    },
    {
        question: 'Is Frontend Mentor free?',
        answer: 'Yes, it offers both free and premium challenges.',
        isOpen: false
    },
    {
        question: 'Can I use Frontend Mentor projects in my portfolio?',
        answer: 'Absolutely! You can showcase these projects as part of your portfolio.',
        isOpen: false
    },
    {
        question: 'How can I get help if I\'m stuck on a challenge?',
        answer: 'You can join the Frontend Mentor community for support.',
        isOpen: false
    }
];

faqs.forEach(faq => {
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item';

    const faqHeader = document.createElement('div');
    faqHeader.className = 'd-flex justify-content-between align-items-center';
    faqHeader.style.display = 'flex';
    faqHeader.style.alignItems = 'center';
    faqHeader.style.justifyContent = 'space-between';

    const faqQuestion = document.createElement('p');
    faqQuestion.className = 'faq-question';
    faqQuestion.textContent = faq.question;

    const faqToggle = document.createElement('span');
    faqToggle.className = 'faq-toggle';
    faqToggle.innerHTML = faq.isOpen
        ? '<img src="./assets/images/icon-minus.svg" alt="minus" class="toggle-icon">'
        : '<img src="./assets/images/icon-plus.svg" alt="plus" class="toggle-icon">';

    faqHeader.appendChild(faqQuestion);
    faqHeader.appendChild(faqToggle);
    faqQuestion.style.font = 'bold 12px / 1 sans-serif';
    faqQuestion.style.fontWeight = 'bold';
    faqQuestion.style.fontSize = '1rem';
    faqQuestion.style.border = '368px 6px';
    faqQuestion.style.margin = '20px';

    const faqAnswer = document.createElement('p');
    faqAnswer.className = 'faq-answer';
    faqAnswer.textContent = faq.answer;
    faqAnswer.style.display = faq.isOpen ? 'block' : 'none';
    faqAnswer.style.marginLeft = '20px';
    faqHeader.addEventListener('click', () => {
        const isVisible = faqAnswer.style.display === 'block';
        faqAnswer.style.display = isVisible ? 'none' : 'block';
        faqToggle.innerHTML = isVisible
            ? '<img src="./assets/images/icon-plus.svg" alt="plus" class="toggle-icon">'
            : '<img src="./assets/images/icon-minus.svg" alt="minus" class="toggle-icon">';
    });

    faqItem.appendChild(faqHeader);
    faqItem.appendChild(faqAnswer);
    faqCard.appendChild(faqItem);
});

// Hepsini güzelce ortaya toplamak için
faqCard.className = 'faq-card';
document.getElementById('container').appendChild(faqCard);


_body.style.margin = '0px';
_body.style.padding = '0px';
_body.style.fontFamily = 'Arial, Sans-serif';
_body.style.backgroundColor = '#f9f9f9';
_body.style.display = 'flex';
_body.style.flexDirection = 'column';
_body.style.alignItems = 'center';
_body.style.justifyContent = 'flex-start';
_body.style.height = '100vh';

topImage.style.width = '100%';
topImage.style.maxHeight = '300px';
topImage.style.objectFit = 'cover';

centerBox.style.backgroundColor = '#fff';
centerBox.style.borderRadius = '23px';
centerBox.style.padding = '2rem';
centerBox.style.maxWidth = '800px';
centerBox.style.width = '95%';
centerBox.style.marginTop = '-50px';
centerBox.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
