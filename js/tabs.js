// tabs
function openCity(evt, cityName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// form validation

const $ = selector => document.querySelector(selector);
let spanMessage = [];

function validateForm(form) {
    let isValid = true;
    let nameRegEx = /^[a-zA-Z ]{2,30}$/;
    let emailRegEx = /^\S+@\S+\.\S+$/;
    let phoneRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    form.querySelectorAll("input").forEach(input => {
        let validationType = input.getAttribute('validation-type');
        let required = input.getAttribute('required') != null;
        let value = input.value;


        if (validationType == "name") {

            let isElementValid = !required || nameRegEx.test(value);
            if(isElementValid) {
                input.nextElementSibling.innerHTML = "";
            } else {
                input.nextElementSibling.innerHTML = "Enter your first name (use only latin letters)";
                input.focus();
            }
            isValid = isValid && isElementValid;
        }
        if (validationType == "phone") {

            let isElementValid = !required || phoneRegEx.test(value);

            if(isElementValid) {
                input.nextElementSibling.innerHTML = "";
            } else {
                input.nextElementSibling.innerHTML = "Enter your phone number (use numbers, + and -)";
                input.focus();
            }
            isValid = isValid && isElementValid;
        }
        if (validationType == "email") {

            let isElementValid = !required || emailRegEx.test(value);

            if(isElementValid) {
                input.nextElementSibling.innerHTML = "";
            } else {
                input.nextElementSibling.innerHTML = "Enter your email (enter email in format xxx@xxx.xx)";
                input.focus();
            }
            isValid = isValid && isElementValid;
        }
    });
    return isValid;
}

let subButton = $("#sendData");
let form = $("#personal-info");
let successMessageTag = $('#sendData').nextElementSibling;
subButton.addEventListener('click', function (e) {
    if (validateForm(form)) {
        successMessageTag.classList.remove("error-message");
        successMessageTag.classList.add("success-message");
        successMessageTag.innerHTML = "Thank you! You successfully sent your request. We will contact you within 1-3 business days";
    } else {
        e.preventDefault();
        successMessageTag.classList.remove("success-message");
        successMessageTag.classList.add("error-message");
        successMessageTag.innerHTML = "Your request wasn't send. See errors above";
    }
});