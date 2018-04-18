var regInputElem = document.querySelector(".regNumField");
var addButtonElem = document.querySelector(".addButton");
var regNoDispDiv = document.querySelector(".regNumbersDisplay");
var townSelectElem = document.querySelector(".townSelect");
var errorMessageDivElem = document.querySelector(".errorMessageDiv");
var clearRegNumsBtn = document.querySelector(".clearRegNums");

addButtonElem.addEventListener('click', addButtonClicked);
townSelectElem.addEventListener('change', handleTownSelectChange);
clearRegNumsBtn.addEventListener('click', clearRegistrationNumbers);

var addRegNum = AddRegNum(getRegistrationNumbersFromStorage());
var regNos = addRegNum.getRegistrationNos();
Object.keys(regNos).map(regNo =>{
  showRegNumber(regNo);
})

function getRegistrationNumbersFromStorage() {
  var regNumbers = {};
  if (localStorage['registrationNumbers']){

    var retrieved = localStorage.getItem('registrationNumbers');
     regNumbers =JSON.parse(retrieved);
  }

  return regNumbers;
}

function showRegNumber(regNumber){
  var paragraphElem = document.createElement("p");
  paragraphElem.classList.add('regNumDis')
    paragraphElem.classList.add('mdl-button')
    paragraphElem.classList.add('mdl-button--accent')

  var newContent = document.createTextNode(regNumber);
  paragraphElem.appendChild(newContent);
  regNoDispDiv.appendChild(paragraphElem);
}

function clearRegNumbers(){
  var paragraphElem = document.querySelector("p");


  while (regNoDispDiv.firstChild) {
    regNoDispDiv.removeChild(regNoDispDiv.firstChild);
  }

}

function addButtonClicked() {
    var regNum = regInputElem.value;
    regInputElem.value = "";
    var checkRegNum = addRegNum.getRegistrationNos();
    var lastRegistrationNo;

    if (Object.keys(checkRegNum).length == 0) {
       lastRegistrationNo = "";

    }else {
       lastRegistrationNo = Object.keys(checkRegNum)[Object.keys(checkRegNum).length - 1];
    }


    if (regNum !== lastRegistrationNo) {

      var correctRegNo = addRegNum.regNoFromTown(regNum);
      if (correctRegNo) {
        addRegNum.addRegistrationNo(regNum);
        var registrationNumbers = addRegNum.getRegistrationNos();
        var lastReg = Object.keys(registrationNumbers)[Object.keys(registrationNumbers).length - 1];
        showRegNumber(lastReg);

        localStorage.setItem('registrationNumbers', JSON.stringify(registrationNumbers));


      }else {
        errorMessageDivElem.style.display='inline-block';
      }

   }



}

function handleTownSelectChange(){
 clearRegNumbers();

  var startsWith ;

  var selecedTown = townSelectElem.value;

  var filterdRegNums = addRegNum.filterByTown(selecedTown);

  Object.keys(filterdRegNums).map(regNo =>{
    showRegNumber(regNo);
  })
}

function clearRegistrationNumbers(){
  localStorage.clear();
  clearRegNumbers();
  var regNumbers = addRegNum.clearRegistrationNos();;


}
