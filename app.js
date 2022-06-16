const btn = document.querySelector('.btn');
const input = document.querySelector('.email');
const errorIcon = document.querySelector('.error-icon');
const errorText = document.querySelector('.error-text');

function validateEmail(){
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!input.value.match(mailformat))
  {
    errorIcon.style.visibility = "visible";
    errorText.style.visibility = "visible";
    input.style.border = "2px solid hsl(0, 93%, 68%)";
  }
};

btn.addEventListener('click', validateEmail);