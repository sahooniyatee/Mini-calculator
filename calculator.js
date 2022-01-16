let screen= document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
let backspace='';
let restNum='';
for(item of buttons) {
    item.addEventListener('click',(e)=>
    {
        buttonText=e.target.innerText;
        console.log('Button Text is ',buttonText);
       
        if(buttonText=='CC')
        {
            screenValue=" ";
            screen.value = screenValue;

        }
        else if(buttonText=='=')
        {
            screen.value =eval(screenValue);

        }
        else if(buttonText=='Del')
        {
           backspace=screen.value;
           restNum=backspace.slice(0,-1);
           screenValue=restNum;
           screen.value = screenValue;

        }
        else
        {
            screenValue += buttonText;
        screen.value = screenValue;
        }
    })
}

