let display = document.getElementById('output2')

function calculate(){
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value

    if(weight>0 && height>0){
        let bmi = weight/(height*height)
        display.innerHTML = bmi.toFixed(2)
    }
    else{
        display.innerHTML = 'Please Enter valid data'
    }

    let bmi = weight/(height*height)
    let pointer = document.getElementById('pointer')
    if(bmi<18.5){
       pointer.style.transform='rotate(-70deg)'
    }
    else if(bmi>18.5 && bmi<24.9){
        pointer.style.transform='rotate(-35deg)'
    }
    else if(bmi>25.0 && bmi<29.9){
        pointer.style.transform='initial'
    }
    else if(bmi>30.0 && bmi<34.9){
        pointer.style.transform='rotate(30deg)'
    }else if(bmi >35.0){
        pointer.style.transform='rotate(70deg)'
    }

}

function Erase(){
    display.innerHTML = ''
    document.getElementById('weight').value = ''
    document.getElementById('height').value = ''
    document.getElementById('pointer').style.transform = 'initial'

}