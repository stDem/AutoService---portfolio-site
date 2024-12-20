const form = document.querySelector('.form');
const formFieldsets = document.querySelectorAll('.form__fieldset');
const formBtnPrev = document.querySelector('.form__btn_prev');
const formBtnNext = document.querySelector('.form__btn_next');
const formBtnSubmit = document.querySelector('.form__btn_submit');

let currentStep = 0;

const updateFieldsetVisibility = ()=>{ // activate or disable 'next" button
    for (let i = 0; i < formFieldsets.length; i++) {
        (i === currentStep)? formFieldsets[i].classList.add('form__fieldset_active'):formFieldsets[i].classList.remove('form__fieldset_active')
    };

    if(currentStep===0){
        formBtnPrev.style.display = 'none';
        formBtnNext.style.display = '';
        formBtnSubmit.style.display = 'none';
    }

    else if(currentStep===formFieldsets.length-1){
        formBtnPrev.style.display = '';
        formBtnNext.style.display = 'none';
        formBtnSubmit.style.display = '';
    }
    else{
        formBtnPrev.style.display = '';
        formBtnNext.style.display = '';
        formBtnSubmit.style.display = 'none';
    }
};

formBtnNext.addEventListener('click', ()=>{
    if(currentStep<formFieldsets.length-1){
        currentStep+=1;
        updateFieldsetVisibility();
    }
});

formBtnPrev.addEventListener('click', ()=>{
    if(currentStep>0){
        currentStep-=1;
        updateFieldsetVisibility();
    }
});

updateFieldsetVisibility();