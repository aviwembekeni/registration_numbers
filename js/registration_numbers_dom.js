var regInputElem = document.querySelector(".regNumField");
var addButtonElem = document.querySelector(".addButton");
var regNoDispDiv = document.querySelector(".regNumbersDisplay");
var townSelectElem = document.querySelector(".townSelect");
var errorMessageDivElem = document.querySelector(".errorMessageDiv");

addButtonElem.addEventListener('click', addButtonClicked);
townSelectElem.addEventListener('change', handleTownSelectChange);

var addRegNum = AddRegNum();

function showRegNumber(regNumber){
  var parEl = document.createElement("p");
  var newContent = document.createTextNode(regNumber);
  parEl.appendChild(newContent);
  regNoDispDiv.appendChild(parEl);
}

function clearRegNumbers(){
  var parEl = document.querySelector("p");


  while (regNoDispDiv.firstChild) {
    regNoDispDiv.removeChild(regNoDispDiv.firstChild);
}

}

function addButtonClicked() {
    var regNum = regInputElem.value;

    var correctRegNo = addRegNum.regNoFromTown(regNum);
    if (correctRegNo) {
      addRegNum.addRegistrationNo(regNum);
      showRegNumber(regNum);
    }else {
      errorMessageDivElem.style.display='inline-block';
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
