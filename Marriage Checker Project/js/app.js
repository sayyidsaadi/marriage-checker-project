//Get Elements
let marriageForm=document.querySelector('#marriageForm');
let alertBox=document.querySelector('.alertBox');
let fResult=document.querySelector('.fResult');
let name_req=document.querySelector('#name_req');
let age_req=document.querySelector('#age_req');

marriageForm.onsubmit=(event)=>{
    event.preventDefault();

    let name=marriageForm.querySelector('input[name="name"]');
    let age=marriageForm.querySelector('input[name="age"]');
    let gender=marriageForm.querySelectorAll('input[name="gender"]');

    let genderName='';
    gender.forEach(item=>{
        if(item.checked){
            genderName=item.value; 
        }
    })

   if(name.value=='' || age.value=='' || genderName==''){

    alertBox.innerHTML=alertMsFuntion('All Fileds Are Required')
 

   }else if(ageValidFuntion(age.value)==false){

    alertBox.innerHTML=alertMsFuntion(`Invalid Age`, 'warning')

   }else{
    fResult.innerHTML=ageCalculation(name.value, age.value, genderName);
   }

   




}


