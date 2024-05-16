// 1.	Array elementlərinin cəmini / hasilini tapın


// var arr=[10,40,60,30,90]
// console.log(arr);

// let cem=0,hasil=1
// for (let i = 0; i <= arr.length-1; i++) {
//     console.log(arr[i]);
//     cem+=arr[i]
//     hasil*=arr[i]
    
// }
// console.log(cem);
// console.log(hasil);



// 2.	Array elementlərinin içində təkrarlanan elementləri silin


// var arr=[10,40,60,30,90,30,40,10]
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     for(let j=i+1; j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             arr.splice(j,1)
//             j--
//         }
//     }  
// }
// console.log(arr);



// 3.	Array elementlərində ədəd olmayan elementləri silin


// var arr=[30,-60,"leyla",false,6,undefined,0,true,null,9]
// console.log(typeof arr);

// for (let i = 0; i < arr.length; i++) {
//    if(typeof arr[i]!="number"){
//     arr.splice(i,1)
//     i--
//    }
// }
// console.log(arr);



// 4.	Array elementlərindən maksimum/minimum olanı tapın.


// let arr=[30,-60,90,-32,400]
// let max=arr[0]
// let min=arr[0]
// for (let i = 0; i < arr.length; i++) {
//    if(max < arr[i]){
//     max=arr[i]
//    }   
//    if(min > arr[i]){
//     min=arr[i]
//    }   
// }
// console.log(min);
// console.log(max);



// 5.	Daxil edilən cumlədəki simvol sayını çıxarın.


// let cumle = "Qara qizin eybi var";
// let simvolSayi = cumle.length;
// console.log(simvolSayi);



// 6.	Array elementlerini 2-yə vurub yeni bir array kimi çap edin.


// let arr=[30,-60,90,-32,400]
// console.log(arr);
// let newarr=arr.map((value,index,arr)=>value*2)
// console.log(newarr);



// 7.	Array elementlərini tərsinə çap edin.


// let arr = [10, 25, 38, 49, 51];
// let reversArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     reversArr.push(arr[i]);
// }
// console.log(reversArr);



// 8.	Verilmiş massivlərdə hər bir indeks dəyərinin cəmini hesablayan JavaScript proqramı yazın.(Massivlərin uzunluqları mütləq eyni olmalıdı) 
// Nümunə :  massiv1 = [1,0,2,3,4];  massiv2 = [3,5,6,7,8,13];
// Gözlənilən Nəticə: [4, 5, 8, 10, 12, 13]


// let arr1=[1,2,3,4]
// let arr2=[5,6,7,8]
// let newA=[]
// if(arr1.length==arr2.length){
//     for (let i = 0; i < arr1.length; i++) {
//         newA.push(arr1[i]+arr2[i])
//     }
// }else{
//     console.log("ferqli uzunluqlar");
// }
// console.log(newA);



// 9.	Sözü tərsinə çevirən program yazın.


// function tersSoz(metin) {
//     return metin.split('').reverse().join('');
// }

// var yazilanMetin = prompt("Bir metin daxil edin");
// var tersSoz = tersSoz(yazilanMetin);
// console.log("Tersine cevirilen metin: " + tersSoz);



// 10.	Cümlədəki sözlərin yerini tərsinə çevirən program yazın. (salam mənim adım leyladır 🡺 leyladır adım mənim salam)


// let cumle="salam menim adim nazlidir"
// let split_cumle=cumle.split(" ")
// // console.log(split_cumle);
// let reverse="";
// for (let i =split_cumle.length-1; i >=0 ; i--) {
//     reverse+=split_cumle[i]+" "
    
// }
// console.log(reverse);



// 11.	Daxil edilmiş ədədi sözlə yazan funskiya (Məs🡪input:1, output : Bir)


// let teklikler=["sifir","bir","iki","uc","dord","bes","alti","yeddi","sekkiz","doqquz"]
// let onluqlar=["on","iyirmi","otuz","qirx","elli","altmish","yetmish","seksen","doqsan"]
// let eded=+prompt("eded daxil edin: ")
// if(eded>=0 && eded<10){
//     alert(teklikler[eded]);
// }else if(eded>=10 && eded<100){
//     let onluq=Math.floor(eded/10)
//     let teklik=eded%10
//     if(teklik==0){
//         alert(onluqlar[onluq-1])
//     }else{
//         alert(onluqlar[onluq-1]+" "+teklikler[teklik])
//     }
// }



// 12.	Verilmiş mətndə sözlərin sayını tapın.


// let metin = "Burada sizin reklam ola biler di amma...";
// let sozler = metin.split(" ");
// let sozlerSayi = sozler.length;
// console.log(sozlerSayi);



// 13.	Verilmiş cümlədə artıq boşluq simvollarını silin


// let cumle="   salam          necesen"
// let trimCumle=cumle.trim()
// let splitCumle=trimCumle.split(" ")
// let newCumle="";
// for (let i = 0; i < splitCumle.length; i++) {
//     if(splitCumle[i]!=""){
//         newCumle+=splitCumle[i]+" "
//     }
// }
// console.log(newCumle.trim());



// 14.	Verilmiş mətndə cümlələrin ilk sözündə olan baş hərfin böyük yazılmasını təmin edən proqram yazın


// let metn = "bu metinin birinci herifi boyuk olmalidir.";
// let tezeMetn = birinciHerifBoyuk(metn);

// function birinciHerifBoyuk(metn) {
//     let cumleler= metn.split();
//     let tezeMetn ="";
//     for (let i = 0; i < cumleler.length;i++) {
//         if (i%2===0) {
//             tezeMetn+=cumleler[i].trim().charAt(0).toUpperCase()+cumleler[i].slice(1).trim();
//         } else {
//             tezeMetn+=cumleler[i];
//         }
//     }
//     return tezeMetn;
// }
// console.log(tezeMetn);



// 15.	 İki arrayın eyniliyini yoxlayın. 


// let array1=[1,2,3]
// let array2=[3,2,1,]
// if(array1.length!=array2.length){
//     console.log("arrayler beraber deyil");
// }else{
//    array1.sort()
//    array2.sort()
//    let count=0
//    for (let i = 0; i < array1.length; i++) {
//     if(array1[i]==array2[i]){
//         count++
//     }
//    }
//    if(count==array1.length){
//         console.log("arrayler beraberdir");
//    }else{
//     console.log("arrayler beraber deyil");
//    }
// }



// 16.	Array elementlərini sort metodundan istifadə etmədən artma / azalma istiqamətinə görə sıralayın (bubble sort)


// let arr=[9,1,5,37,26]

// for (let i = 0; i < arr.length; i++) {
// for (let j = i+1; j < arr.length; j++) {
//     if(arr[i]>arr[j]){
//         let a=arr[i]
//         arr[i]=arr[j]
//         arr[j]=a
//     }
// }    
// }
// console.log(arr);



// 17.	İstifadəçidən ədəd daxil etməyini tələb edin. Proqram daxil edilən ədədi oxuyur 
// və ədədin hər bir rəqəmini arada boşluq olmaqla ekrana verir.  Məs: Giriş: 3456 Çıxış: 3 4 5 6


// const num = prompt("Ededi daxil edin:");
// const numDigits = num.split('').join(' ');
// console.log(numDigits);



// 18.	Verilmiş mətndə təkrarlana sözlərin sayını tapın


// let cumle="salam necesen salam ne var ne yox necesen"
// let obj={}
// let cumleSplit=cumle.split(" ")
// console.log(cumleSplit);
// for (let i = 0; i < cumleSplit.length; i++) {
//     let soz=cumleSplit[i]
// if(obj[soz]==undefined){
//     obj[soz]=1
// }else{
//     obj[soz]++
// }
// }
// console.log(obj);



// 19.	Tələbələrin məlumatlarını özündə saxlayan object yaradın. İmtahandan keçməyən tələbələri objectdən silin.


// let telebeler=[
//     {
//         ad:"Sahin",
//         giris_bali:34,
//         final_bali:20
//     },
//     {
//         ad:"Nigar",
//         giris_bali:44,
//         final_bali:30
//     },
//     {
//         ad:"Ayaz",
//         giris_bali:34,
//         final_bali:16
//     },
//     {
//         ad:"Leyal",
//         giris_bali:30,
//         final_bali:20
//     }
// ]

// for (let i = 0; i < telebeler.length; i++) {
//     console.log(telebeler[i]);
//     if(telebeler[i].giris_bali+telebeler[i].final_bali<51 || telebeler[i].final_bali<17){
//         telebeler.splice(i,1)
//         i--
//     }
// }
// console.log(telebeler);



// 20.	Verilmiş 2mətnin oxşarlıq əmsalını hesablayın. ( 3 ardıcıl sözün eyniliyinə əsasən)  ??????


// let esas_metin="Salam menim adim Nermindir. Man BDU mezunuyam. Menim 22 yashim var"
// let oxsar_cumle="Salam menim adim Nermindir. Man ADNSU mezunuyam. Menim 21 yashim var"
// let metin_split=oxsar_cumle.split(" ")
// let say=0;
// for(var i=0; i<metin_split.length;i++){
//     if(i<metin_split.length-2){
//         let text=metin_split[i]+" "+metin_split[i+1]+" "+metin_split[i+2]
    
//     if(esas_metin.includes(text)){
//         say++
//     }
//     }
// }
// let faiz=(metin_split.length-2)*0.2
// if(faiz<say) {
// console.log("plagiat");
// }else{
//     console.log("plagiat deyil");
// }

// console.log(say);
// console.log(faiz);



// 21.	İşçilərin 1 saatlıq əmək haqqı və həftəlik iş saatları verildikdə, 
// aylıq əmək haqqınn hesablanması üçün proqram yazın. Həftəlik 40 saatdan artıq 
// olan iş saatları üçün əmək haqqı 2 qat hesablansın


// let saat=50;
// let saat_haqq=20;
// let maas=0;
// if (saat>40) {
// maas=40*saat_haqq+(saat-40)*2*saat_haqq
// }else{
//     maas=saat*saat_haqq
// }
// console.log(maas*4);



// 22.	Verilmiş mətndə «ADNA» sözlərini «ADNSU» sözü ilə əvəz edin.


// let metn= "Mənim ADNA bir dostum oxuyur. Men bugun onu gormek ucun ADNA -ya gedacam.";

// let splitMetn=metn.split(" ");
// for (let i = 0; i < splitMetn.length; i++) {
//     if (splitMetn[i] === "ADNA") {
//         splitMetn[i] = "ADNSU";
//     }
// }

// let newMetn=splitMetn.join(" ");
// console.log(newMetn);



// 23.	3 rəqəmli ədədin rəqəmləri cəmini tapın.


// let eded=679
// let ededString=eded.toString()
// let cem=0;
// for (let i = 0; i < ededString.length; i++) {
//     cem+=(+ededString[i])
// }
// console.log(cem);


// 23. ikinci variant

// let eded=679
// let ededString=eded.toString()
// let cem=0;
// while(eded>0){
//     let qaliq=eded%10
//     eded=Math.floor(eded/10)
//     cem+=qaliq
// }
// console.log(cem);