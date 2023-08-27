import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');


form.addEventListener("input", throttle(savedUserData), 500);
form.addEventListener("submit", throttle(cleanedStorage), 500);


 /***************check, whether there is data in the local storage, 
if it is so, - fill in the form fields with this data*******************/


const storedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

    
    if (storedData) {

        const { email, message } = storedData;
        emailInput.value = email;
        messageInput.value = message;

    } else { 

        emailInput.value = "";
        messageInput.value = "";
    }
    
    
/**********************************************************************/


function savedUserData(evt) {

    evt.preventDefault();

   const { email, message } = evt.currentTarget.elements;
    
    if (email.value === "" || message.value === "") {
        console.log("Please fill in all the fields!");
        return;
    }

        const info = {
            email: email.value,
            message: message.value
        }
        
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(info)); 

}


function cleanedStorage(evt) {

    evt.preventDefault();

    const cleanedData = {
        email: emailInput.value,
        message: messageInput.value,
    }

        localStorage.removeItem(LOCALSTORAGE_KEY);
        console.log(cleanedData);
        evt.currentTarget.reset();            

}
