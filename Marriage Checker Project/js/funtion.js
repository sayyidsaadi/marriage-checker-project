/**
 * Alert Funtion
 */
const alertMsFuntion=(msg, alertType='danger')=>{
    return `<p class="alert alert-${alertType} d-flex justify-content-between">${msg} <button data-bs-dismiss="alert" class="btn-close"></button> </p>`
}

/**
 * Age Validation Check
 */
const ageValidFuntion=(age)=>{
    let agePattern=/^[0-9]{1,3}$/;
    return agePattern.test(age);
}


/**
 * Age Calculate Funtion
 */

const ageCalculation=(name, age, genderName)=>{

    if(genderName=='male'){

        let marriAge=21;

        if(age>=marriAge){

            return alertMsFuntion(`Hi ${name} Bhaiya... Your Age is Ready for Marriage`, 'success');
        }else{

            return alertMsFuntion(`Hi ${name} Bhaiya Your Age Is not Ready for Marriage You have to Wait ${marriAge-age} Years`, 'warning');

        }

    }else{


        let marriAge=18;
        
        if(age>=marriAge){

            return alertMsFuntion(`Hi ${name} Apuuu... Your Age is Ready for Marriage`, 'success');
            
        }else{

            return alertMsFuntion(`Hi ${name} Apuuu Your Age Is not Ready for Marriage You have to Wait ${marriAge-age} Years`, 'warning');

        }

    }


}