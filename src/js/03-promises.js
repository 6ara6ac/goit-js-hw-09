import Notiflix from 'notiflix';

const formData = document.querySelector ('.form');
formData.addEventListener ('submit', onSubmitClick)


function createPromise(position, delay) {
  return new Promise ((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(()=>{ 
    if (shouldResolve) {
    resolve ({position, delay})
  } else {
    reject ({position, delay})
  }}, delay)
})
};



function onSubmitClick(event) {
  event.preventDefault();

   const formEL = {
    delayEl: Number(formData.delay.value),
    stepEl: Number(formData.step.value),
    amountEl: Number(formData.amount.value)
  }
  
  for (let position = 1; position <= formEL.amountEl; position++){
  const delay = formEL.delayEl + formEL.stepEl * (position - 1);
  createPromise(position, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}
}

