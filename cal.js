// INPUTS
const dayInput= document.getElementsByClassName('day')[0]
const monthInput= document.getElementsByClassName('month')[0]
const yearInput= document.getElementsByClassName('year')[0]

// OUTPUTS
const dayOutput= document.getElementById('day')
const monthOutput= document.getElementById('month')
const yearOutput= document.getElementById('year')

//ERRORS
const dayError = document.getElementsByClassName('dayerror')[0]
const monthError = document.getElementsByClassName('montherror')[0]
const yearError = document.getElementsByClassName('yearerror')[0]


 
const button= document.getElementsByClassName('arrow')[0]

console.log(button);
console.log(dayError);

const checkDay = ()=>{
    let value = dayInput.value
    if(value == ''){
        dayError.innerHTML ='This field is required'
    } else if(value > 31 ||value < 1 ){
        dayError.innerHTML ='Must be a valid day'
    } else{
        dayError.innerHTML =''
        /* dayOutput.innerHTML = value */
    }
}

const checkMonth = ()=>{
    let value = monthInput.value
    if(value == ''){
        monthError.innerHTML ='This field is required'
    } else if(value > 12 ||value < 1 ){
        monthError.innerHTML ='Must be a valid month'
    } else{
        monthError.innerHTML =''
        /* monthOutput.innerHTML = value */
    }
}


const checkYear = ()=>{
    let value = yearInput.value
    if(value == ''){
        yearError.innerHTML ='This field is required'
    } else if(value > 2023 ){
        yearError.innerHTML ='Must be in the past'
    } 
    else if(value < 1900 ){
        yearError.innerHTML ='Must be in the future'
    }
    else{
        yearError.innerHTML =''
        /* yearOutput.innerHTML = value */
    }
}


const calculateAge = birthday =>{
    let birthdate = new Date(birthday);
    let today = new Date();

 let years = today.getFullYear() - birthdate.getFullYear();
 let months = today.getMonth() - birthdate.getMonth();
 let days = today.getDate() - birthdate.getDate();
// If the birthdate month and day are after the current month and day,
// subtract one year from the age


 if (months < 0 || (months === 0 && days < 0)) {
   years--;
   if (months === 0) {
     months = 11;
   } else {
     months = 12 + months;
   }
   days = 30 + days;
 }

   yearOutput.innerHTML = years;
   monthOutput.innerHTML = months;
   dayOutput.innerHTML = days;
}



button.addEventListener('click' , () => {
    checkDay()
    checkMonth()
    checkYear()
    if (dayError.innerHTML === '' && monthError.innerHTML === '' && yearError.innerHTML === '') {
        // If there are no errors, calculate the age
        const birthday = `${yearInput.value}-${monthInput.value}-${dayInput.value}`;
        calculateAge(birthday);
    }
    

}) 



