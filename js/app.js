document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    const display = document.getElementById('pin-display')
    display.value = pin;
})
function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if( pinString.length === 4 ){
        return pin;
    }else{

        return getPin();
    }

}
function generatePin(){
   const random =  Math.round(Math.random()*10000);
   return random;
}



// make typ\ing input form
document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('type-number');
    const preFieldValue = typeNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typeNumberField.value = '';
        }else if(number === 'X'){
            const digit = preFieldValue.split('');
            digit.pop();
            const remainingDigit = digit.join('');
            typeNumberField.value = remainingDigit;
        }
    }else{
       const newFieldValue =preFieldValue +  number;
        typeNumberField.value = newFieldValue;
    }
})




// pin matching 
document.getElementById('submit-btn').addEventListener('click',function(){
    const displayPin = document.getElementById('pin-display');
    const currentPin = displayPin.value;


    const typeDisplay = document.getElementById('type-number');
    const typeNumber = typeDisplay.value;

    const successMassage = document.getElementById('pin-success');
    const failMassage = document.getElementById('pin-fail');

    if(currentPin === typeNumber){
        successMassage.style.display = 'block';
        failMassage.style.display = 'none';
    }
    else{
        failMassage.style.display = 'block';
        successMassage.style.display = 'none';
    }
    
})