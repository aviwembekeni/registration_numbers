function AddRegNum(){
  var regNums =  {};

    function addRegNum(regNum){
      if(regNums[regNum] === undefined){
        regNums[regNum]= 0;
      }
    }

    function getRegNums(){
      return regNums;
    }

    function regNumberFromTown(regNum){
      if (regNum.startsWith('CA') || regNum.startsWith('CJ') || regNum.startsWith('CF') || regNum.startsWith('CY')) {
        return true;
      }else {
        return false;
      }
    }

    function filterBySelectedTown(selecedTown){
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

  return {
    addRegistrationNo: addRegNum,
    getRegistrationNos: getRegNums,
    regNoFromTown : regNumberFromTown,
    filterByTown : filterBySelectedTown
  }
}
