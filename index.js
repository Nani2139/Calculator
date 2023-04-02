let dispaly = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map(button =>{
    button.addEventListener('click', (e) =>{
        switch(e.target.innerText){
            case 'C':
                dispaly.innerText = '';
                break;
                case '=':
                    try{
                        dispaly.innerText = eval(display.innerText);
                    }catch{
                        display.innerText = "Error"
                    }
                    break;
                    case "←" :
                        if(display.innerText){
                            dispaly.innerText = display.innerText.slice(0,-1);
                        }
                        break;
                        default :
                        dispaly.innerText += e.target.innerText;
        }
    });
});