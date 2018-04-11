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

  return {
    addRegistrationNo: addRegNum,
    getRegistrationNos: getRegNums
  }
}
