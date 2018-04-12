var regInputElem = document.querySelector(".regNumField");
var addButtonElem = document.querySelector(".addButton");
var regNoDispDiv = document.querySelector(".regNumbersDisplay");
var townSelectElem = document.querySelector(".townSelect");

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
    if (regNum.startsWith('CA') || regNum.startsWith('CJ') || regNum.startsWith('CF') || regNum.startsWith('CY')) {
      addRegNum.addRegistrationNo(regNum);
      showRegNumber(regNum);
    } else {
      alert("registration number must be from Cape Town, Belville, Paarl or Strand only!");

    }

}

function handleTownSelectChange(){
 clearRegNumbers();
  var newRegList= {};
  var startsWith ;

  var selecedTown = townSelectElem.value;

  if (selecedTown == "cape town") {
    startsWith = 'CA';
  } else if (selecedTown == "paarl") {
    startsWith = 'CJ';
  } else if (selecedTown == "belville") {
    startsWith = 'CY';
  } else if (selecedTown == "strand") {
    startsWith = 'CF';
  }

  regNos = addRegNum.getRegistrationNos();
  Object.keys(regNos).map(regNo =>{
   if (regNo.startsWith(startsWith)) {
     newRegList[regNo] = 0;
   }

  })

  Object.keys(newRegList).map(regNo =>{
    showRegNumber(regNo);
  })
}
