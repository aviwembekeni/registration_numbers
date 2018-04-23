function AddRegNumHb(registrationNumbers){
  var regNums = registrationNumbers || {};

    function addRegNumHb(regNum){
      if(regNums[regNum] === undefined){
        regNums[regNum]= 0;
      }
    }

    function getRegNumsHb(){
      return regNums;
    }

    function regNumberFromTownHb(regNum){
      if (regNum.startsWith('CA') || regNum.startsWith('CJ') || regNum.startsWith('CF') || regNum.startsWith('CY')) {
        return true;
      }else {
        return false;
      }
    }

    function filterBySelectedTownHb(selecedTown){
      var filteredObj = {};
      var startsWith ;

      if (selecedTown == "cape town") {
        startsWith = 'CA';
      } else if (selecedTown == "paarl") {
        startsWith = 'CJ';
      } else if (selecedTown == "belville") {
        startsWith = 'CY';
      } else if (selecedTown == "strand") {
        startsWith = 'CF';
      }else if (selecedTown == "all") {
        return regNums;
      }

      Object.keys(regNums).map(regNo =>{
       if (regNo.startsWith(startsWith)) {
         filteredObj[regNo] = 0;
       }

      })

      return filteredObj;
    }

    function clearRegNosHb(){
      regNums = {};
      return regNums;
    }

  return {
    addRegistrationNoHb: addRegNumHb,
    getRegistrationNosHb: getRegNumsHb,
    regNoFromTownHb : regNumberFromTownHb,
    filterByTownHb : filterBySelectedTownHb,
    clearRegistrationNosHb : clearRegNosHb
  }
}
