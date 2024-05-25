

// 1.	Array daxilində tək yerdə duran elementləri ekrana verin


// let myArray = [11, 2, 39, 47, 5, 6, 77, 80, 91];
// tekyerdeDuran(myArray);

// function tekyerdeDuran(arr) {
//     for (let i = 1; i < arr.length; i += 2) {
//         console.log(arr[i]);
//     }
// }



// 2.	Array elementləri daxilində 5-ə bölünən ədədlərin sayını ekrana verin


// let reqemler = [15, 5, 34, 15, 49, 25, 30, 65, 80];
// function besheBolunenler(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 5 === 0) {
//             count++;
//         }
//     }
//     return count;
// }
// let result = besheBolunenler(reqemler);
// console.log(result);



// 3.	Array elementləri daxilində 7-ə bölünən sonuncu ədədi ekrana çıxarın.


// let myArray = [11, 14, 32, 21, 5, 63, 82];
// function yeddininSonReqemi(arr) {
//     let axirinciEded = null;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 7 === 0) {
//             axirinciEded = arr[i];
//         }
//     }
//     return axirinciEded;
// }

// let result = yeddininSonReqemi(myArray);
// if (result !== null) {
//     console.log(result);
// } else {
//     console.log("7-ye bolunen eded yoxdur.");
// }



// 4.	Array elementləri daxilində ən böyük və ən kiçik elementlərin yerini dəyişən  proqram tərtib edin


// let reqemler = [2, 6, 9, 8, 1, 3];
// console.log(reqemler);

// function yerDeyisenler(arr) {
//     if (arr.length < 2) return arr;
//     let minI = 0;
//     let maxI = 0;
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < arr[minI]) {
//             minI = i;
//         }
//         if (arr[i] > arr[maxI]) {
//             maxI = i;
//         }
//     }
//     let temp = arr[minI];
//     arr[minI] = arr[maxI];
//     arr[maxI] = temp;
//     return arr;
// }
// let resultArray = yerDeyisenler(reqemler);
// console.log(resultArray);



// 5.	Verilmiş array daxilində ixtiyari(random) ədədi ekrana çıxaran proqram tərtib edin 


// let arr = [8, 4, 2, 6, 9, 3, 5, 1];
// function randomReqem(arr) {
//     if (arr.length === 0) {
//         return null;
//     }
//     const randomI = Math.floor(Math.random() * arr.length);
//     return arr[randomI];
// }
// let randomElement = randomReqem(arr);
// console.log(randomElement);



// 6.	1-dən 100-ə qədər ədədlər daxilində təkliyi 1 olan ədədləri ekrana verin


// function tekliyiBir(num) {
//     let numStr = num.toString();
//     for (let char of numStr) {
//         if (char !== '1') {
//             return false;
//         }
//     }
//     return true;
// }
// function tekliyiBirOlaniTapir() {
//     let result = [];
//     for (let i = 1; i <= 100; i++) {
//         if (tekliyiBir(i)) {
//             result.push(i);
//         }
//     }
//     return result;
// }
// let numbersWithOnlyOne = tekliyiBirOlaniTapir();
// console.log(numbersWithOnlyOne);



// 7.	Daxil olunmuş ifadənin polindrom olduğunu yoxlayın.   (polindrom dedikdə tərsi və düzü eyni 
//     olan ifadə başa düşülür məsələn ütü, 121,1331,4554 və s.)


// function polindrom(str) {
//     let cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');
//     let reversedStr = cleanedStr.split('').reverse().join('');
//     return cleanedStr === reversedStr;
// }
// console.log(polindrom("utu"));
// console.log(polindrom("121"));
// console.log(polindrom("1331"));
// console.log(polindrom("4554"));
// console.log(polindrom("Salam"));



// 8.	Daxil olunmuş iki sözün anaqram olduğunu yoxlayın ( anaqram dedikdə sözlərinin 
//     tərkibinin eyni olması başa düşülür, məsələn oslo solo və   s.)


// function anagramSozler(str1, str2) {
//     let cleanedStr1 = str1.toLowerCase().replace(/[\W_]/g, '');
//     let cleanedStr2 = str2.toLowerCase().replace(/[\W_]/g, '');

//     if (cleanedStr1.length !== cleanedStr2.length) {
//         return false;
//     }

//     let sortedStr1 = cleanedStr1.split('').sort().join('');
//     let sortedStr2 = cleanedStr2.split('').sort().join('');
//     return sortedStr1 === sortedStr2;
// }

// console.log(anagramSozler("oslo", "solo"));
// console.log(anagramSozler("listen", "silent"));
// console.log(anagramSozler("hello", "world"));
// console.log(anagramSozler("ana", "naa"));
// console.log(anagramSozler("Salam", "Malas"));
// console.log(anagramSozler("Salam", "Meles"));



// 9.	Daxil olunmuş mətndə saitləri silən proqram yaradın 


// function saitSilen(text) {
//     const vowels = /[aeiouAEIOU]/g;
//     return text.replace(vowels, '');
// }
// const inputText = "Saitleri silen bir proqram";
// const result = saitSilen(inputText);
// console.log(result);



// 10.	İstifadəçi daxil edən ədəd sayda ixtiyarı(random) simvoldan ibarət string ifadə 
// yaradın (məsələn input:5   output: qeg8d)


// function generateRandomString(length) {
//     const characters = 'g58ifdoecbxmvuieu3212qasa';
//     let result = '';
//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * characters.length);
//         result += characters[randomIndex];
//     }
//     return result;
// }
// const inputLength = parseInt(prompt("Random simvol sayini sec"), 10);

// if (!isNaN(inputLength) && inputLength > 0) {
//     const randomString = generateRandomString(inputLength);
//     console.log(`Random string: ${randomString}`);
// } else {
//     console.log("Duzgun eded daxil edin");
// }



// 11.	Daxil olunmuş sözdə neçə sait və samit olduğunu tapın


// function sozdeSaitveSamitler(text) {
//     const saitler = 'aeiouAEIOU';
//     let saitsayi = 0;
//     let samitsayi = 0;
//     for (let char of text) {
//         if (saitler.includes(char)) {
//             saitsayi++;
//         } else if (/[a-zA-Z]/.test(char)) {
//             samitsayi++;
//         }
//     }
//     return { saitsayi, samitsayi };
// }
// const inputText = prompt("Sozu duzqun daxil edil");

// const result = sozdeSaitveSamitler(inputText);
// console.log(`Saitler: ${result.saitsayi}`);
// console.log(`Samitler: ${result.samitsayi}`);



// 12.	Daxil olunmuş ədədin mükəmməl ədəd olub olmadığını yoxlayan metod yaradın 
// (Mükəmməl ədəd ədədin özündən başqa qalan bütün tam bölənlərinin cəmi özünə 
//     bərabər olan ədədə deyilir - məs: 6=1+2+3;  28=1+2+4+7+14)


// function mukemmelReqem(number) {
//     if (number <= 1) return false;
//     let sum = 0;
//     for (let i = 1; i <= number / 2; i++) {
//         if (number % i === 0) {
//             sum += i;
//         }
//     }
//     return sum === number;
// }
// const inputNumber = parseInt(prompt("Bir eded daxi edin"), 10);

// if (!isNaN(inputNumber)) {
//     const isPerfect = mukemmelReqem(inputNumber);
//     if (isPerfect) {
//         console.log(`${inputNumber} mukemmel ededdir.`);
//     } else {
//         console.log(`${inputNumber} mukemmel eded deyil.`);
//     }
// } else {
//     console.log("Duzgun bir eded daxil edin.");
// }



// 13.	Daxil olunan ixtiyari ədədin rəqəmləri cəmini tapan funksiya yaradın


// function reqemlerinCemi(number) {
//     let sum = 0;
//     let num = Math.abs(number);
//     while (num > 0) {
//         sum += num % 10;
//         num = Math.floor(num / 10); 
//     }
//     return sum;
// }
// const inputNumber = parseInt(prompt("Bir eded daxil edin:"), 10);
// if (!isNaN(inputNumber)) {
//     const digitSum = reqemlerinCemi(inputNumber);
//     console.log(`${inputNumber} ededin reqemler cemi: ${digitSum}`);
// } else {
//     console.log("Duzqun eded daxil edin.");
// }



// 14.	Substring metodunun işini yerinə yetirən funksiya yaradın



// function ferdiSubstring(str, start, end) {
//     if (typeof str !== 'string' || typeof start !== 'number' || (end !== undefined && typeof end !== 'number')) {
//         throw new TypeError('Yanlish arqument');
//     }
//     start = Math.max(0, start);
//     end = (end === undefined) ? str.length : Math.min(str.length, end);
//     if (start > end) {
//         [start, end] = [end, start];
//     }
//     let result = '';
//     for (let i = start; i < end; i++) {
//         result += str[i];
//     }
//     return result;
// }
// const text = "Salam, Dunya";
// console.log(ferdiSubstring(text, 7));        
// console.log(ferdiSubstring(text, 0, 5));    
// console.log(ferdiSubstring(text, 7, 12));   
// console.log(ferdiSubstring(text, 12, 7));   



// 15.	indexOf metodunun işini yerinə yetirən funksiya yaradın


// function ferdiIndex(str, searchValue, fromIndex = 0) {
//     if (typeof str !== 'string' || typeof searchValue !== 'string' || typeof fromIndex !== 'number') {
//         throw new TypeError('Yanlish arqument');
//     }
//     if (fromIndex < 0) {
//         fromIndex = 0;
//     }
//     for (let i = fromIndex; i <= str.length - searchValue.length; i++) {
//         let match = true;
//         for (let j = 0; j < searchValue.length; j++) {
//             if (str[i + j] !== searchValue[j]) {
//                 match = false;
//                 break;
//             }
//         }
//         if (match) {
//             return i;
//         }
//     }
//     return -1;
// }
// const text = "Salam, dunya!";
// console.log(ferdiIndex(text, "Salam"));   
// console.log(ferdiIndex(text, "dunya"));   
// console.log(ferdiIndex(text, "a", 5));     
// console.log(ferdiIndex(text, "cvb"));      



// 16.	2 tarix arasındakı intervalı tapın. ( nəticə : 1 il 3ay 5 gün – formatında olmalıdı)


// function tarixdeFerq(startDate, endDate) {
//     const start = new Date(startDate);
//     const end = new Date(endDate);
//     if (end < start) {
//         [start, end] = [end, start];
//     }
//     let years = end.getFullYear() - start.getFullYear();
//     let months = end.getMonth() - start.getMonth();
//     let days = end.getDate() - start.getDate();
//     if (days < 0) {
//         months--;
//         const prevMonth = (end.getMonth() - 1 + 12) % 12;
//         const daysInPrevMonth = new Date(end.getFullYear(), prevMonth + 1, 0).getDate();
//         days += daysInPrevMonth;
//     }
//     if (months < 0) {
//         years--;
//         months += 12;
//     }
//     return `${years} il ${months} ay ${days} gün`;
// }
// const startDate = "2022-01-01";
// const endDate = "2023-04-06";
// console.log(tarixdeFerq(startDate, endDate));






