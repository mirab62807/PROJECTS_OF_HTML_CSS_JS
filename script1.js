// button
const button1 = document.getElementById('btn1');
// inputByChalender
const input1 = document.getElementById('inputDOB');
// resutlt in paraGraph
const resultInP = document.getElementById('result');


function CalcualteAge(){
  const birthdayValue=input1.value;
  if(birthdayValue===''){
    alert('Please enter valid Birthday');
  }else{
    const agefinal = getAge(birthdayValue);
    resultInP.innerText = `Your are ${agefinal}${agefinal >1 ? "years":"years"} old`;
  }
};

function getAge(birthdayValue){
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);

  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();
  console.log('month =', month);

  if(month < 0 || (month ===0 && currentDate.getDate() < birthdayDate.getDate())){
    age --;
  }
  return age;

};


button1.addEventListener("click", CalcualteAge)