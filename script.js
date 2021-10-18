let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    // alert("Clicked Add Row")
    numRows+=1;
    let addRow = ''
    for(let i = 1 ; i <= numRows; i++){
        addRow += '<tr>'
    for(let j = 0 ; j <= numCols; j++){
        addRow += '<td></td>'
        }
        addRow += '</tr>'
    }
    table.innerHTML = addRow;

}
//Add a column
function addC() {
    alert("Clicked Add Col")
 }
 

//Remove a row
function removeR() {
    // alert("Clicked Remove Row")
    var table = document.getElementById("grid");
    numRows-=1;
    let removeRow = ''
    for(let i = 1 ; i <= numRows; i++){
        removeRow += '<tr><td></td><tr>'
    }
    table.innerHTML = removeRow;
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}