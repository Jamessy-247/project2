const names = document.getElementById('names')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const submit = document.getElementById("submit")

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    validateInput();
});

const handleClick = () => {
    alert("Clicked")
}

const setError = ( element, message) => {
    const inputControl = element.parentElement;
errorElement.innerText = message;
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}
const setSuccess = ( element, message) => {
    const inputControl = element.parentElement;
errorElement.innerText = message;
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}

const passwordValue = password.value.trim() 
const passwordLength = password.length

const validateInput = () =>{
    if (password.value === '' || password.value.length == null ) {
        setError(password , 'password is empty')
    }
    else if  (password.value.length <= 3) {
        setError(password , 'must be 4 digit')
    }else if  (password.value.length == 5) {
        setError(password , 'must be 4 digit')
    }else {
    setSuccess(password, 'successful');



    

    // switch (passwordLength) { 
    //     case '':
    //         setError(password , 'password is empty')
    //         break;
    
    //     case (passwordLength <= 3):
    //         setError(password , 'must be 4 digit')
    //         break;
    
    //     case (passwordLength >= 5):
    //         setError(password , 'password is empty')
    //         break;
    
    //     default:
    //         break;
    // }
    }
};
