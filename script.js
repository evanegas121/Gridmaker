let numRows = 0;
let numCols = 0;
let colorSelected; 
let table = document.getElementById("grid");
//Add a row
function addR() {
    // alert("Clicked Add Row")
    numRows +=1;
    var addRow = table.insertRow();
    var addCol;
    for (var i = 0; i <= numCols; i++){
        addCol =addRow.insertCell()
    }

}
//Add a column
function addC() {
    // alert("Clicked Add Col")
    numCols += 1;
    let tableRows = table.getElementsByTagName('tr');
    for (let i = 0; i < tableRows.length; i++){
        tableRows[i].insertCell();
    }
 }
 

//Remove a row
function removeR() {
    // alert("Clicked Remove Row")
    numRows -= 1
    table.deleteRow(-1)
}
//Remove a column
function removeC() {
    //alert("Clicked Remove Col")
    let removeCol = ''
    let tableRows = document.getElementsByTagName("tr");
    numCols -= 1
    for (let i = 0; i <= numCols; i++){
        removeCol += '<td></td>'
    }
    for (let i = 0; i < tableRows.length; i++){
        tableRows[i].innerHTML = removeCol
    }
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