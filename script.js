let display = document.getElementById("display");

let exp=''


function updateDisplay(button) {
    //if the π symbol add
    if(button.value ==='π'){

        display.value += '==';
        exp +=display.value

        let index=exp.toString().indexOf("π")
        exp=exp.toString().replace((exp[index]),Math.PI)

        return exp
    }
    // if power symbol add 
    else if (button.value =='x') {

        alert('&#178;')
        display.value += '?'
        exp +=display.value
        
        var reg=/(\d+)\b&#178;\b/g
        var index=exp.toString().indexOf("&#178;")
        exp +=exp.toString().replace(reg,Math.pow(2,exp[index-1]))

    }
    else{
        display.value +=button.value
        
        exp += button.value
    }
}

function calculate(){

    result=eval(exp)
    display.value=result.toFixed(3)


}
function del(){
    display.value=display.value.toString().slice(0,-1)
}

function clearDisplay(){
    display.value=""
    exp=""
}

