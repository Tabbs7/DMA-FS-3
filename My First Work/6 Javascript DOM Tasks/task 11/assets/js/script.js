
// Dom one //


// function calculate(x) {
//     let result=0;
//     let value1=+document.querySelectorAll("input")[0].value
//     let value2=+document.querySelectorAll("input")[1].value
//     if(x.innerText=="+"){
//         result=value1+value2
//     }
//     else if(x.innerText=="-"){
//         result=value1-value2
//     }
//     else if(x.innerText=="*"){
//         result=value1*value2
//     }
//     else if(x.innerText=="/"){
//         result=value1/value2
//     }
//     document.querySelector("span").innerHTML=result
// }


// Dom two //


// function reverseText() {
//     let inputText = document.getElementById("inn3").value;
//     let reversedText = inputText.split('').reverse().join('');
//     document.getElementById("metin-two").innerText = "Ters soz: " + reversedText;
// }


// Dom three //


// function changeDiv(){
//     div1.style.width=inputwidth.value+"px";
//     div1.style.height=inputheight.value+"px";
//     div1.style.borderWidth=inputborderWidth.value+"px";
//     div1.style.borderStyle=selectBorderStyle.value
// }


// Dom four //


// function changeDiv(){
//     console.log(div1.style,width);
//     div1.style.width=parseInt(div1.style.width)+inputwidth.value+"px";
//     div1.style.height=inputheight.value+"px";
//     div1.style.borderWidth=inputborderWidth.value+"px";
//     div1.style.borderStyle=selectBorderStyle.value
// }


// Dom six //


function buttonKal(x) {
displayInput.value+=x.innerText
}

function equal() {
    let result=0
    if(displayInput.value.includes("+")){
        let deyer=displayInput.value.split("+")
        console.log(deyer);
        for (let i = 0; i <deyer.length; i++){
            result+=(+deyer[i])
        }
    }else if(displayInput.value.includes("-")){
        let deyer=displayInput.value.split("-")
        result=(+deyer[0])
        for (let i = 1; i <deyer.length; i++){
            result-=(deyer[i])
        }
    }else if(displayInput.value.includes("/")){
        let deyer=displayInput.value.split("/")
        result=(+deyer[0])
        for (let i = 1; i <deyer.length; i++){
            result/=(deyer[i])
        }
    }else if(displayInput.value.includes("*")){
        let deyer=displayInput.value.split("*")
        result=(+deyer[0])
        for (let i = 1; i <deyer.length; i++){
            result*=(deyer[i])
        }
    }
    displayInput.value=result
}
function sil(){
    displayInput.value=""
}
