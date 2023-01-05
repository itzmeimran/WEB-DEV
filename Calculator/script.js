let screen = document.getElementById('screen').firstElementChild.innerHTML 
let string =''
let buttons = document.querySelectorAll('button')
Array.from(buttons).forEach((button) =>{
    button.addEventListener('click',(e)=>{
        if (e.target.innerHTML == '='){
            string = eval(string);
            document.getElementById('dis').innerHTML=string;
        }
        else if (e.target.innerHTML == 'CE'){
            string = '';
            document.getElementById('dis').innerHTML=string;
        }
        else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.getElementById('dis').innerHTML = string;
        }
    })
})
