// Object
function Validator(options){

    function validate(inputElement,rule){
        var errorMessage = rule.test(inputElement.value);
         var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
                
                if(errorMessage){
                    errorElement.innerText = errorMessage;
                    inputElement.parentElement.classList.add('invalid')
                }
                else{
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid')
                }
                
            }
    
     // Lay element cua form can validate
    var formElement = document.querySelector(options.form);
    console.log(options.rules)
    if(formElement){
        options.rules.forEach(function(rule){
           var inputElement = formElement.querySelector(rule.selector)
          
           console.log(inputElement.parentElement)
           if(inputElement){
            inputElement.onblur = function(){
                //value : inputElement.value
                // test func: rule.test
                // Xu li TH blur khoi input
                validate(inputElement, rule)
              
            }
            // Xu li moi khi nguoi dung nhap vao input
            inputElement.oninput = function(){
                var errorElement = inputElement.parentElement.querySelector('.form-message')
                errorElement.innerText='';
                inputElement.parentElement.classList.remove('invalid');
            }
           }
        });
    }
}
// Define rules
// Nguyen tac rules
//1. error : return mess erroe
//2. success -> ko tra ra cj(undefined)
Validator.isRequired = function (selector){
    return {
        selector:selector,
        test: function(value){
            return value.trim() ? undefined : " Please fill in the blanks. "
        }
    };
}
Validator.isEmail = function(selector){
    return {
        selector:selector,
        test:function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : 'Please fill in your email in the blank '

        }
    }
}

Validator.minLength = function(selector,min){
    return {
        selector:selector,
        test:function(value)
        {
            return value.length >= min ? undefined :`Please enter at least ${min} characters`
        }
    }
}

Validator.isConfirmed = function(selector,getCofirmValue)
{
    return {
        selector:selector,
        test: function(value){
            return value === getCofirmValue() ? undefined:'Input value is incorrect'
        }
    }
}