const calculateWeightLostInAMonth = (cycling,running,swimming,extraCalorieInTake) =>{

   if (cycling <= 0 || running <= 0 || swimming <= 0 || extraCalorieInTake <= 0) {
      return -1;
   }

   let weightLostInAMonth = 0;

   // write logic here 
   const burnedCaloriesByCycling = cycling * 8; 
   const burnedCaloriesBySwiming = swimming * 8;
   const burnedCaloriesByRunning = running * 8;
   const extraCalorieInTakeInMonth = extraCalorieInTake * 30;

   const LostCarloriesInMonth = (burnedCaloriesByCycling + burnedCaloriesBySwiming + burnedCaloriesByRunning) - extraCalorieInTakeInMonth;

   weightLostInAMonth = LostCarloriesInMonth / 1000;

   return weightLostInAMonth;
   
}

module.exports = calculateWeightLostInAMonth

