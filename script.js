const aAdmiral = document.getElementById('aAdmiral');
const aThieves = document.getElementById('aThieves');
const aPatriotic = document.getElementById('aPatriotic');

const slideLeft = document.getElementById('slideLeft');
const slideAdmiral = document.getElementById('dotsAdmiral');
const slideThieves = document.getElementById('dotsThieves');
const slidePatriotic = document.getElementById('dotsPatriotic');
const slideRight = document.getElementById('slideRight');

const mobileSlide = document.getElementById('mobileSlide');
const mobileLeft = document.getElementById('mobileLeft');
const mobileRight = document.getElementById('mobileRight');

document.addEventListener('DOMContentLoaded', () => {slideUrl('imgAdmiral', 'tableAdmiral', dotsAdmiral)});

aAdmiral.addEventListener('click', () => {slideUrl('imgAdmiral', 'tableAdmiral', dotsAdmiral)});
aThieves.addEventListener('click', () => {slideUrl('imgThieves', 'tableThieves', dotsThieves)});
aPatriotic.addEventListener('click', () => {slideUrl('imgPatriotic', 'tablePatriotic', dotsPatriotic)});

slideAdmiral.addEventListener('click', () => {slideUrl('imgAdmiral', 'tableAdmiral', dotsAdmiral)});
slideThieves.addEventListener('click', () => {slideUrl('imgThieves', 'tableThieves', dotsThieves)});
slidePatriotic.addEventListener('click', () => {slideUrl('imgPatriotic', 'tablePatriotic', dotsPatriotic)});

slideRight.addEventListener('click', slideDotsRight);
slideLeft.addEventListener('click', slideDotsLeft);


mobileLeft.addEventListener('click', slideDotsLeft);
mobileRight.addEventListener('click', slideDotsRight);


function deleteActive(){
    let activAll = document.querySelectorAll('.active');
    let dotsAll = document.querySelectorAll('.al');
    if (activAll.length != 0){
        for (let i = 0, len = activAll.length; i < len; i++){
            activAll[i].classList.remove('active');
        };
    };
    for(let i = 0, len = dotsAll.length; i < len; i++){
        dotsAll[i].classList.add('dots');
    };
};

function slideUrl(img, table, dots){
    deleteActive();
    document.getElementById(img).classList.add('active');
    document.getElementById(table).classList.add('active');
    dots.classList.remove('dots');
    mobileSlide.style.backgroundImage = `url(images/${document.getElementById(img).classList[1]}.jpg)`;
};

function slideDotsRight(){
    let displayActiv = +document.querySelector('.active').classList[1].charAt(3);
    if (displayActiv == 3){
        deleteActive();
        document.querySelector('.img1').classList.add('active');
        document.querySelector('.tab1').classList.add('active');
        mobileSlide.style.backgroundImage = `url(images/img1.jpg)`;
        document.querySelector('.dots1').classList.remove('dots');
    } else{
        deleteActive();
        document.querySelector(`.img${displayActiv + 1}`).classList.add('active');
        document.querySelector(`.tab${displayActiv + 1}`).classList.add('active');
        mobileSlide.style.backgroundImage = `url(images/img${displayActiv + 1}.jpg)`;
        document.querySelector(`.dots${displayActiv + 1}`).classList.remove('dots');
    };
};
function slideDotsLeft(){
    let displayActiv = +document.querySelector('.active').classList[1].charAt(3);
    if (displayActiv == 1){
        deleteActive();
        document.querySelector('.img3').classList.add('active');
        document.querySelector('.tab3').classList.add('active');
        mobileSlide.style.backgroundImage = `url(images/img3.jpg)`;
        document.querySelector('.dots3').classList.remove('dots');
    } else{
        deleteActive();
        document.querySelector(`.img${displayActiv - 1}`).classList.add('active');
        document.querySelector(`.tab${displayActiv - 1}`).classList.add('active');
        mobileSlide.style.backgroundImage = `url(images/img${displayActiv - 1}.jpg)`;
        document.querySelector(`.dots${displayActiv - 1}`).classList.remove('dots');
    };
};
