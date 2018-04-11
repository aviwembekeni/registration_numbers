var regInputElem = document.querySelector(".regNumField");
var addButtonElem = document.querySelector(".addButton");
var currentDiv = document.querySelector(".regNumbersDisplay");

addButtonElem.addEventListener('click', addButtonClicked);

var addRegNum = AddRegNum();

function addButtonClicked() {
  var regNum = regInputElem.value;
  addRegNum.addRegistrationNo(regNum);

  var regNumList = addRegNum.getRegistrationNos();
  console.log( regNumList)
  Object.keys(regNumList).map(regNum =>{
    var parEl = document.createElement("p");
    var newContent = document.createTextNode(regNum);
    parEl.appendChild(newContent);
    currentDiv.appendChild(parEl);
  })

}
