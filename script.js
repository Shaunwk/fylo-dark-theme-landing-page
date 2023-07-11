const submitButton = document.querySelector('.submit-button');
const errorContainer = document.querySelector('.error-container')



submitButton.addEventListener('click', function(){
    let errorMessageText = "Please enter a valid email address";

   errorContainer.textContent = errorMessageText;
   
});

