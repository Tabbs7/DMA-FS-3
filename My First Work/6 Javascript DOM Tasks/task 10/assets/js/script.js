


// Dom one //


function calculate(x) {
    let result=0;
    let value1=+document.querySelectorAll("input")[0].value
    let value2=+document.querySelectorAll("input")[1].value
    if(x.innerText=="+"){
        result=value1+value2
    }
    else if(x.innerText=="-"){
        result=value1-value2
    }
    else if(x.innerText=="*"){
        result=value1*value2
    }
    else if(x.innerText=="/"){
        result=value1/value2
    }
    document.querySelector("span").innerHTML=result
}



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
//     console.log(div1.style.width);
//     div1.style.width=parseInt(div1.style.width)+(+inputwidth.value)+"px";
//     div1.style.height=inputheight.value+"px";
//     div1.style.borderWidth=inputborderWidth.value+"px"
//     div1.style.borderStyle=selectBorderStyle.value
// }



// Dom five //


// function buttonKal(x) {
// displayInput.value+=x.innerText
// }

// function equal() {
//     let result=0
//     if(displayInput.value.includes("+")){
//         let deyer=displayInput.value.split("+")
//         console.log(deyer);
//         for (let i = 0; i <deyer.length; i++){
//             result+=(+deyer[i])
//         }
//     }else if(displayInput.value.includes("-")){
//         let deyer=displayInput.value.split("-")
//         result=(+deyer[0])
//         for (let i = 1; i <deyer.length; i++){
//             result-=(deyer[i])
//         }
//     }else if(displayInput.value.includes("/")){
//         let deyer=displayInput.value.split("/")
//         result=(+deyer[0])
//         for (let i = 1; i <deyer.length; i++){
//             result/=(deyer[i])
//         }
//     }else if(displayInput.value.includes("*")){
//         let deyer=displayInput.value.split("*")
//         result=(+deyer[0])
//         for (let i = 1; i <deyer.length; i++){
//             result*=(deyer[i])
//         }
//     }
//     displayInput.value=result
// }
// function birBisSil() {
//     let display = document.getElementById("displayInput");
//     display.value = display.value.slice(0, -1);
// }
// function sil(){
//     displayInput.value=""
// }



// Dom six // 


// let modal = document.querySelector(".mymodal");
// let modalImg = modal.querySelector(".image img");
// let modalTitle = document.querySelectorAll(".content p")[1].children[0];
// let modalclient = document.querySelectorAll(".content p")[2].children[0];


// console.log(modalTitle);

// function openModal(x) {
//     console.log(x.children[0]);
//     modalImg.src = x.children[0].src;
//     modalTitle.innerText = x.nextElementSibling.children[0].innerText;
//     modalclient.innerText = x.nextElementSibling.children[1].innerText;

//     modal.style.display = "block";
// }

// function closeModal() {
//     modal.style.display = "none";
// }



// Dom seven //
 
// Burada siz bir neca kod gosterdiz hammisina baxdim AMMA en sadeini yazdim;))))


// function openAccordionMenu(x){
//     x.parentElement.classList.toggle("active")
// }