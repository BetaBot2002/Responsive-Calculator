let buttons=document.querySelector('.buttons')
let allbtn=document.querySelectorAll('span')
let value=document.getElementById('value')
let count=0

for(let i=0;i<allbtn.length;i++){
    allbtn[i].addEventListener("click",function(){
        if(allbtn[i].innerText=='C'){
            value.innerText=''
            count=0
        }
        else if(allbtn[i].innerText=='='){
            value.innerText=eval(value.innerText)
        }
        else if(allbtn[i].innerText=='()'){
            let k=value.innerText[value.innerText.length-1]
            if(count==0 || k=='+' || k=='-' || k=='*' || k=='/'){
                value.innerText+="("
                count++
                //value.innerText+=count
            }
            else{
                value.innerText+=")"
                count--
                //value.innerText+=count
              }
        }
        else if(allbtn[i].innerText=='B'){
            if(value.innerText[value.innerText.length-1]=='('){
                count--
            }
            else if(value.innerText[value.innerText.length-1]==')'){
                count++
            }
            value.innerText=value.innerText.slice(0,value.innerText.length-1)
        }
        else{
            value.innerText+=allbtn[i].innerText
        }
    })
}

const toggle=()=>{
    let darkicon=document.getElementById('icon')
    console.log(darkicon.src)
    let darktheme=document.querySelector('.link')
    console.log(darktheme.getAttribute('href'))
    if(darktheme.getAttribute('href')==="style.css"){
        darktheme.href="styledark.css"
        darkicon.src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/40/000000/external-half-moon-weather-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
    }
    else{
        darktheme.href="style.css"
        darkicon.src="https://img.icons8.com/color/48/000000/sun--v1.png"
    }
}