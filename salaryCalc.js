const salary = parseInt(prompt('Enter the salary number '));
const shifts = parseInt(prompt('Enter the shifts number ')); 

function calculateSal(salary, shifts){
if(salary > 8000)
console.log("salaray too large");
else if(shifts<= 0)
console.log("shifts too small ");
else if(salary < 0)
console.log("salary too small");
else 
{
savings = (salary*0.5)+(salary*0.02*shifts);
console.log("% of savings", savings);
}
}
calculateSal(salary, shifts);
