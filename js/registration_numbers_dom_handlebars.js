var regInputElemHb = document.querySelector(".regNumFieldHandleBars");
var addButtonElemHb = document.querySelector(".addButtonHandleBars");
var regNoDispDivHb = document.querySelector(".regNumbersDisplayHandleBars");
var townSelectElemHb = document.querySelector(".townSelectHandleBars");
var errorMessageDivElemHb = document.querySelector(".errorMessageDivHandleBars");
var clearRegNumsBtnHb = document.querySelector(".clearRegNumsHandleBars");

var regNoTemplateSource = document.querySelector(".regNumberTemplate").innerHTML;

var regNoTemplate = Handlebars.compile(regNoTemplateSource);

addButtonElemHb.addEventListener('click', addButtonClicked);
townSelectElemHb.addEventListener('change', handleTownSelectChangeHb);
clearRegNumsBtnHb.addEventListener('click', clearRegistrationNumbers);

var addRegNumHb = AddRegNumHb(getRegistrationNumbersFromStorageHb());
var regNos = addRegNumHb.getRegistrationNosHb();
  showRegNumberHb(regNos);

function getRegistrationNumbersFromStorageHb() {
  var regNumbers = {};
  if (localStorage['registrationNumbersHb']){

    var retrieved = localStorage.getItem('registrationNumbersHb');
     regNumbers =JSON.parse(retrieved);
  }

  return regNumbers;
}

function showRegNumberHb(regNumbers){

var registrationNumberData = { registrationNumbers: regNumbers};
  var registrationNumberDataHTML = regNoTemplate(registrationNumberData);
// put the resulting HTML into the target elements innerHTML

  regNoDispDivHb.innerHTML = registrationNumberDataHTML;

}

function clearRegNumbersHb(){

  while (regNoDispDivHb.firstChild) {
    regNoDispDivHb.removeChild(regNoDispDivHb.firstChild);
  }

}

function addButtonClicked() {

    var regNum = regInputElemHb.value;
    regInputElemHb.value = "";

      var correctRegNo = addRegNumHb.regNoFromTownHb(regNum);
      if (correctRegNo) {
        addRegNumHb.addRegistrationNoHb(regNum);
        var registrationNumbers = addRegNumHb.getRegistrationNosHb();
        showRegNumberHb(registrationNumbers);

        localStorage.setItem('registrationNumbersHb', JSON.stringify(registrationNumbers));


      }else {
        errorMessageDivElemHb.style.display='inline-block';
      }

}

function handleTownSelectChangeHb(){
 clearRegNumbersHb();

  var startsWith ;

  var selecedTown = townSelectElemHb.value;

  var filterdRegNums = addRegNumHb.filterByTownHb(selecedTown);

  showRegNumberHb(filterdRegNums);
}

function clearRegistrationNumbers(){
  localStorage.setItem('registrationNumbersHb', JSON.stringify({}));
  clearRegNumbersHb();
  var regNumbers = addRegNumHb.clearRegistrationNosHb();;


}
