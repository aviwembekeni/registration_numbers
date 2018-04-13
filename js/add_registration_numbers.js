function AddRegNum(){
  regNums =  {};

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

  return {
    addRegistrationNo: addRegNum,
    getRegistrationNos: getRegNums,
    regNoFromTown : regNumberFromTown
  }
}
